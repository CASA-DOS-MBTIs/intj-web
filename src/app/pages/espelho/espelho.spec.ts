import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { ESPELHO_PT } from '../../content/pt/espelho';
import { Espelho } from './espelho';

const STORAGE_KEY = 'intj-espelho-v2';
const TOTAL = ESPELHO_PT.quiz.questions.length;

interface Mounted {
  fixture: ComponentFixture<Espelho>;
  el: HTMLElement;
}

interface Picker {
  pick(index: number, rating: number): void;
}

function mount(stored?: unknown): Mounted {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  localStorage.clear();
  localStorage.setItem('intj-lang', 'pt');
  if (stored !== undefined) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }
  TestBed.inject(LanguageService);
  const fixture = TestBed.createComponent(Espelho);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

const questions = (el: HTMLElement) => [...el.querySelectorAll('.q')] as HTMLElement[];

const dots = (question: HTMLElement) =>
  [...question.querySelectorAll('.q__dot')] as HTMLButtonElement[];

function answerAll(mounted: Mounted, rating: number): void {
  for (const question of questions(mounted.el)) {
    dots(question)[rating - 1].click();
  }
  mounted.fixture.detectChanges();
}

const text = (el: HTMLElement, selector: string) =>
  el.querySelector(selector)?.textContent?.trim() ?? '';

describe('Espelho', () => {
  it('starts empty, with no reading offered', () => {
    const { el } = mount();

    expect(questions(el).length).toBe(TOTAL);
    expect(el.querySelector('.meter__fill')?.getAttribute('style')).toContain('0%');
    expect(el.querySelector('.result__card')).toBeNull();
  });

  it('numbers the questions from a padded one', () => {
    const { el } = mount();

    expect(text(questions(el)[0], '.q__n')).toBe('01');
    expect(text(questions(el)[9], '.q__n')).toBe('10');
  });

  it('groups the questions by cognitive function', () => {
    const { el } = mount();
    const counted = [...el.querySelectorAll('.group')].reduce(
      (running, group) => running + group.querySelectorAll('.q').length,
      0,
    );

    expect(el.querySelectorAll('.group').length).toBeGreaterThan(1);
    expect(counted).toBe(TOTAL);
  });

  it('records a rating and moves the progress on', () => {
    const { el, fixture } = mount();

    dots(questions(el)[0])[3].click();
    fixture.detectChanges();

    expect(text(el, '.quiz__count')).toContain('1');
    expect(el.querySelector('.meter__fill')?.getAttribute('style')).not.toContain('0%');
  });

  it('produces a reading once every question is answered', () => {
    const mounted = mount();

    answerAll(mounted, 5);

    expect(mounted.el.querySelector('.result__card')).not.toBeNull();
    expect(text(mounted.el, '.result__pct')).toBe('100%');
  });

  it('scores the floor of the scale at nothing', () => {
    const mounted = mount();

    answerAll(mounted, 1);

    expect(text(mounted.el, '.result__pct')).toBe('0%');
  });

  it('scores the middle of the scale halfway', () => {
    const mounted = mount();

    answerAll(mounted, 3);

    expect(text(mounted.el, '.result__pct')).toBe('50%');
  });

  it('closes the questionnaire once it is complete', () => {
    const mounted = mount();

    answerAll(mounted, 4);

    expect(mounted.el.querySelector('.quiz__closed')).not.toBeNull();
  });

  it('withdraws the questions once it is closed', () => {
    const mounted = mount();

    answerAll(mounted, 4);

    expect(questions(mounted.el).length).toBe(0);
  });

  it('refuses a late change even when one reaches it directly', () => {
    const mounted = mount();
    answerAll(mounted, 4);
    const before = text(mounted.el, '.result__pct');

    (mounted.fixture.componentInstance as unknown as Picker).pick(0, 1);
    mounted.fixture.detectChanges();

    expect(text(mounted.el, '.result__pct')).toBe(before);
  });

  it('empties every answer on reset', () => {
    const mounted = mount();
    answerAll(mounted, 5);

    (mounted.el.querySelector('.quiz__reset') as HTMLElement).click();
    mounted.fixture.detectChanges();

    expect(mounted.el.querySelector('.result__card')).toBeNull();
    expect(mounted.el.querySelector('.quiz__closed')).toBeNull();
    expect(mounted.el.querySelector('.meter__fill')?.getAttribute('style')).toContain('0%');
  });

  it('names a level for every function once answered', () => {
    const mounted = mount();

    answerAll(mounted, 5);

    const levels = [...mounted.el.querySelectorAll('.result__card')].length;
    expect(levels).toBeGreaterThan(0);
    expect(mounted.el.textContent).toContain(ESPELHO_PT.result.eyebrow);
  });

  it('picks up where the reader left off', () => {
    const stored = Array<number | null>(TOTAL).fill(null);
    stored[0] = 5;
    stored[1] = 4;

    const { el } = mount(stored);

    expect(text(el, '.quiz__count')).toContain('2');
    expect(dots(questions(el)[0])[4].getAttribute('aria-pressed')).toBe('true');
  });

  it('restores a finished run straight to its reading', () => {
    const { el } = mount(Array<number>(TOTAL).fill(2));

    expect(el.querySelector('.result__card')).not.toBeNull();
    expect(text(el, '.result__pct')).toBe('30%');
  });

  it('ignores stored answers of the wrong length', () => {
    const { el } = mount([5, 5, 5]);

    expect(text(el, '.quiz__count')).toContain('0');
    expect(el.querySelector('.result__card')).toBeNull();
  });

  it('ignores stored values outside the scale', () => {
    const stored: unknown[] = Array<number | null>(TOTAL).fill(null);
    stored[0] = 9;
    stored[1] = 'three';
    stored[2] = 3;

    const { el } = mount(stored);

    expect(text(el, '.quiz__count')).toContain('1');
  });

  it('ignores a stored value that is not a list at all', () => {
    const { el } = mount({ nope: true });

    expect(text(el, '.quiz__count')).toContain('0');
  });
});
