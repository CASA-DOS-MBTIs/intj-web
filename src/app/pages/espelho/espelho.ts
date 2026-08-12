import {
  Component,
  DOCUMENT,
  Injector,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { DEFICIT_SCORED, FN_KEYS, type LevelSet } from '../../content/types';
import { ESPELHO_EN } from '../../content/en/espelho';
import { ESPELHO_PT } from '../../content/pt/espelho';

const STORAGE_KEY = 'intj-espelho-v2';

const RATINGS: readonly number[] = [1, 2, 3, 4, 5] as const;

type Answers = (number | null)[];

function readStoredAnswers(expectedLength: number): Answers | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return null;
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== expectedLength) {
      return null;
    }

    const values: unknown[] = parsed;
    return values.map((value) =>
      typeof value === 'number' && RATINGS.includes(value) ? value : null,
    );
  } catch {
    return null;
  }
}

function writeStoredAnswers(answers: Answers): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {}
}

function levelFor(percent: number, levels: LevelSet): string {
  if (percent >= 80) return levels.veryStrong;
  if (percent >= 60) return levels.strong;
  if (percent >= 40) return levels.moderate;
  if (percent >= 20) return levels.weak;
  return levels.absent;
}

@Component({
  selector: 'app-espelho',
  imports: [RouterLink, PageMasthead, Reveal, References],
  templateUrl: './espelho.html',
  styleUrl: './espelho.scss',
})
export class Espelho {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);

  protected readonly page = usePageContent({ pt: ESPELHO_PT, en: ESPELHO_EN });
  protected readonly path = inject(LanguageService).path;
  protected readonly ratings = RATINGS;
  protected readonly bloom: BloomPosition = {
    top: '-46%',
    right: '30%',
    width: 'min(660px, 90vw)',
  };

  protected readonly total = computed(() => this.page().quiz.questions.length);

  private readonly answers = signal<Answers>([]);

  protected readonly picks = this.answers.asReadonly();

  protected readonly answered = computed(
    () => this.answers().filter((value) => value !== null).length,
  );

  protected readonly complete = computed(
    () => this.total() > 0 && this.answered() === this.total(),
  );

  protected readonly locked = this.complete;

  protected readonly progress = computed(() => {
    const total = this.total();
    return total === 0 ? '0%' : `${Math.round((this.answered() / total) * 100)}%`;
  });

  protected readonly answeredText = computed(() =>
    this.page()
      .quiz.answeredTemplate.replace('{n}', String(this.answered()))
      .replace('{total}', String(this.total())),
  );

  protected readonly groups = computed(() => {
    const { questions, groupLabels, groupHints } = this.page().quiz;

    return FN_KEYS.map((fn) => ({
      fn,
      label: groupLabels[fn],
      hint: groupHints[fn],
      items: questions
        .map((question, index) => ({ index, text: question.text, fn: question.fn }))
        .filter((item) => item.fn === fn),
    })).filter((group) => group.items.length > 0);
  });

  private readonly score = computed(() => {
    const total = this.total();
    if (!this.complete()) {
      return null;
    }

    const sum = this.answers().reduce<number>((running, value) => running + (value ?? 0), 0);
    const span = total * 4;
    const raw = ((sum - total) / span) * 100;
    return Math.round(raw / 10) * 10;
  });

  protected readonly reading = computed(() => {
    const score = this.score();
    if (score === null) {
      return null;
    }

    const band = this.page().result.bands.find((candidate) => score >= candidate.min);
    return band === undefined ? null : { score, band };
  });

  protected readonly bars = computed(() => {
    const answers = this.answers();
    const { questions } = this.page().quiz;
    const { functionNames, levels, inverseLevels } = this.page().result;

    return FN_KEYS.map((fn) => {
      const values = questions
        .map((question, index) => (question.fn === fn ? answers[index] : null))
        .filter((value): value is number => value !== null);

      const average = values.length
        ? values.reduce((running, value) => running + value, 0) / values.length
        : 1;
      const percent = Math.round(((average - 1) / 4) * 100);

      const inverted = DEFICIT_SCORED.includes(fn);

      return {
        fn,
        name: functionNames[fn],
        width: `${percent}%`,
        level: levelFor(percent, inverted ? inverseLevels : levels),
        inverted,
        count: values.length,
      };
    });
  });

  constructor() {
    usePageMeta(() => this.page().meta);

    const length = this.page().quiz.questions.length;
    this.answers.set(readStoredAnswers(length) ?? Array<number | null>(length).fill(null));
  }

  protected questionNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  protected ratingName(rating: number): string {
    return this.page().quiz.ratingLabel.replace('{n}', String(rating));
  }

  protected pick(index: number, rating: number): void {
    if (this.locked()) {
      return;
    }

    const next = this.answers().slice();
    next[index] = rating;
    writeStoredAnswers(next);
    this.answers.set(next);

    if (next.every((value) => value !== null)) {
      this.scrollTo('leitura');
    }
  }

  protected reset(): void {
    const next = Array<number | null>(this.total()).fill(null);
    writeStoredAnswers(next);
    this.answers.set(next);
    this.scrollTo('quiz');
  }

  private scrollTo(id: string): void {
    afterNextRender(
      () => {
        this.document.getElementById(id)?.scrollIntoView({ block: 'start' });
      },
      { injector: this.injector },
    );
  }
}
