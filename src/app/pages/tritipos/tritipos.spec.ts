import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { ProfileService } from '../../core/profile.service';
import { TRITIPOS_PT } from '../../content/pt/tritipos';
import { Tritipos } from './tritipos';

interface Mounted {
  fixture: ComponentFixture<Tritipos>;
  el: HTMLElement;
  profiles: ProfileService;
}

function mount(): Mounted {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  localStorage.clear();
  localStorage.setItem('intj-lang', 'pt');
  TestBed.inject(LanguageService);
  const profiles = TestBed.inject(ProfileService);
  const fixture = TestBed.createComponent(Tritipos);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement, profiles };
}

function chips(el: HTMLElement): HTMLButtonElement[] {
  return [...el.querySelectorAll('.picker__chip')] as HTMLButtonElement[];
}

function press(fixture: ComponentFixture<Tritipos>, node: Element | null): void {
  (node as HTMLElement).click();
  fixture.detectChanges();
}

const text = (el: HTMLElement, selector: string) =>
  el.querySelector(selector)?.textContent?.trim() ?? '';

describe('Tritipos', () => {
  it('opens on a defined tritype rather than an empty detail', () => {
    const { el } = mount();

    expect(text(el, '.detail__code')).toBe('358');
    expect(text(el, '.detail__name')).toBe(TRITIPOS_PT.tritypes['358'].name);
  });

  it('lists all twenty-seven tritypes when nothing narrows them', () => {
    const { el } = mount();

    expect(chips(el).length).toBe(27);
  });

  it('moves the detail to whichever tritype is pressed', () => {
    const { el, fixture } = mount();
    const target = chips(el).find((c) => c.textContent?.trim() === '147');

    press(fixture, target ?? null);

    expect(text(el, '.detail__code')).toBe('147');
    expect(text(el, '.detail__name')).toBe(TRITIPOS_PT.tritypes['147'].name);
    expect(target?.getAttribute('aria-pressed')).toBe('true');
  });

  it('names the centre each digit belongs to', () => {
    const { el } = mount();
    const centres = [...el.querySelectorAll('.centres__item')].map((i) => ({
      digit: i.querySelector('.centres__digit')?.textContent?.trim(),
      centre: i.querySelector('.label')?.textContent?.trim(),
    }));

    expect(centres).toEqual([
      { digit: '3', centre: TRITIPOS_PT.centreLabels.heart },
      { digit: '5', centre: TRITIPOS_PT.centreLabels.head },
      { digit: '8', centre: TRITIPOS_PT.centreLabels.gut },
    ]);
  });

  it('offers no filter while the reader has named no enneatype', () => {
    const { el } = mount();

    expect(el.querySelector('.picker__filter')).toBeNull();
  });

  it('offers the filter once a wing implies a core type', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('wing', '5w4');
    fixture.detectChanges();

    expect(el.querySelector('.picker__filter')).not.toBeNull();
  });

  it('narrows the grid to tritypes carrying the reader core type', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('wing', '5w4');
    fixture.detectChanges();
    press(fixture, el.querySelector('.picker__filter'));

    const shown = chips(el).map((c) => c.textContent?.trim() ?? '');
    expect(shown.length).toBeGreaterThan(0);
    expect(shown.every((key) => key.includes('5'))).toBe(true);
  });

  it('restores the full grid when the filter is lifted', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('wing', '5w4');
    fixture.detectChanges();
    press(fixture, el.querySelector('.picker__filter'));
    press(fixture, el.querySelector('.picker__filter'));

    expect(chips(el).length).toBe(27);
  });

  it('marks the reader own tritype among the rest', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('tritype', '469');
    profiles.set('wing', '4w5');
    fixture.detectChanges();
    press(fixture, el.querySelector('.focus__back'));

    const mine = chips(el).filter((c) => c.classList.contains('is-mine'));
    expect(mine.length).toBe(1);
    expect(mine[0].textContent?.trim()).toBe('469');
  });

  it('replaces the picker with a focused reading of the reader own tritype', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('tritype', '458');
    fixture.detectChanges();

    expect(el.querySelector('app-variant-focus')).not.toBeNull();
    expect(el.querySelector('.picker__grid')).toBeNull();
    expect(text(el, '.focus__title')).toContain('458');
  });

  it('renders every part of the focused reading', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('tritype', '458');
    fixture.detectChanges();
    const deep = TRITIPOS_PT.tritypes['458'].deep;

    expect(el.querySelectorAll('.focus__section').length).toBe(deep.sections.length);
    expect(el.querySelectorAll('.focus__growth-grid .card').length).toBe(deep.growth.length);
    expect(el.querySelectorAll('.focus__item').length).toBe(
      deep.strengths.length + deep.traps.length,
    );
    expect(text(el, '.focus__stress .prose')).toBe(deep.stress);
  });

  it('returns to the full picker when the reader widens back out', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('tritype', '458');
    fixture.detectChanges();
    press(fixture, el.querySelector('.focus__back'));

    expect(el.querySelector('app-variant-focus')).toBeNull();
    expect(chips(el).length).toBe(27);
    expect(text(el, '.detail__code')).toBe('458');
  });

  it('brings the focused reading back when the reader names a different tritype', () => {
    const { el, fixture, profiles } = mount();

    profiles.set('tritype', '458');
    fixture.detectChanges();
    press(fixture, el.querySelector('.focus__back'));

    profiles.set('tritype', '369');
    fixture.detectChanges();

    expect(el.querySelector('app-variant-focus')).not.toBeNull();
    expect(text(el, '.focus__title')).toContain('369');
  });
});
