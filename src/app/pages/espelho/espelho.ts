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

/**
 * Bumped from v1 when the questionnaire grew from 12 statements to 32. A stored
 * v1 run has no meaningful mapping onto the new items, so it is left behind
 * rather than partially restored.
 */
const STORAGE_KEY = 'intj-espelho-v2';

/** The Likert scale printed under every statement. */
const RATINGS: readonly number[] = [1, 2, 3, 4, 5] as const;

type Answers = (number | null)[];

/**
 * Reads a previously saved run. Anything malformed — a hand-edited value, an
 * older shape, a different length — is discarded rather than trusted, and
 * storage itself can throw in private-browsing modes.
 */
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
  } catch {
    // The run simply will not survive a reload.
  }
}

/** Turns a 0–100 percentage into one of the five wording levels. */
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

  /** Read-only view for the template, which must not write to state directly. */
  protected readonly picks = this.answers.asReadonly();

  protected readonly answered = computed(
    () => this.answers().filter((value) => value !== null).length,
  );

  protected readonly complete = computed(
    () => this.total() > 0 && this.answered() === this.total(),
  );

  /**
   * Closed once finished, so the reading is not competing with the form.
   *
   * There is no "reopen without clearing" state: the only way back into the
   * questionnaire is to start it again. Reopening a finished run with all
   * thirty-two answers still selected invites editing single statements until
   * the bars say something nicer, which is the one use of this page that
   * produces a worthless reading.
   */
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

  /** Statements grouped into one block per function, keeping their global index. */
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

  /**
   * Every statement is answered 1–5, so a run of N gives a raw total between N
   * and 5N; the reading is that total rescaled to 0–100 and then rounded to the
   * nearest ten.
   *
   * The rounding is not cosmetic. One answer moved a single point shifts the
   * raw total by about 2 points, which is well inside what 32 self-report items
   * can resolve — printing "73%" would claim a precision the instrument does not
   * have. Banding uses the same rounded figure, so the number shown can never
   * contradict the band shown.
   */
  private readonly score = computed(() => {
    const total = this.total();
    if (!this.complete()) {
      return null;
    }

    // The explicit type parameter keeps the accumulator a plain number; without
    // it TypeScript widens it to the array's own `number | null`.
    const sum = this.answers().reduce<number>((running, value) => running + (value ?? 0), 0);
    const span = total * 4;
    const raw = ((sum - total) / span) * 100;
    return Math.round(raw / 10) * 10;
  });

  /**
   * The score paired with its band, or `null` while the quiz is unfinished.
   * Bands are ordered by descending `min`, so the first match is the tightest
   * one the score reaches. Returning the pair keeps the template free of
   * null checks — and of a `0` score being mistaken for "no result".
   */
  protected readonly reading = computed(() => {
    const score = this.score();
    if (score === null) {
      return null;
    }

    const band = this.page().result.bands.find((candidate) => score >= candidate.min);
    return band === undefined ? null : { score, band };
  });

  /** One bar per cognitive function, averaged over that function's answers. */
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

      // Se is measured through statements about what gets missed, so a full bar
      // is a larger blind spot. Labelling it with the ordinary wording would
      // tell the reader the exact opposite of what they just answered.
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

  /** Zero-padded position, e.g. "07", matching the design's numbering. */
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

    // Answering the last statement closes the questionnaire and moves the
    // reader to the reading, which is the only reason they filled it in.
    if (next.every((value) => value !== null)) {
      this.scrollTo('leitura');
    }
  }

  /** Also what the "redo" button does: a fresh run, not a reopened one. */
  protected reset(): void {
    const next = Array<number | null>(this.total()).fill(null);
    writeStoredAnswers(next);
    this.answers.set(next);
    this.scrollTo('quiz');
  }

  /**
   * Both moves happen at the moment the page changes height by most of a
   * screen — the questionnaire collapsing into the locked note, or expanding
   * back out of it. Scrolling before that has been laid out measures the old
   * document and lands wherever the browser can still reach, which is why
   * finishing the quiz used to leave the reader in the footer.
   *
   * `afterNextRender` waits for the render that the signal write above just
   * scheduled, so the target is measured where it will actually be.
   */
  private scrollTo(id: string): void {
    afterNextRender(
      () => {
        this.document.getElementById(id)?.scrollIntoView({ block: 'start' });
      },
      { injector: this.injector },
    );
  }
}
