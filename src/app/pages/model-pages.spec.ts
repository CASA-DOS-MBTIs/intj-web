import { type Type } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../core/language.service';
import { ProfileService } from '../core/profile.service';
import { ENEAGRAMA_PT } from '../content/pt/eneagrama';
import { SUBTIPOS_PT } from '../content/pt/subtipos';
import { TEMPERAMENTOS_PT } from '../content/pt/temperamentos';
import { Eneagrama } from './eneagrama/eneagrama';
import { Subtipos } from './subtipos/subtipos';
import { Temperamentos } from './temperamentos/temperamentos';

interface Mounted<T> {
  fixture: ComponentFixture<T>;
  el: HTMLElement;
  profiles: ProfileService;
}

function mount<T>(type: Type<T>): Mounted<T> {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  localStorage.clear();
  localStorage.setItem('intj-lang', 'pt');
  TestBed.inject(LanguageService);
  const profiles = TestBed.inject(ProfileService);
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement, profiles };
}

function press(fixture: ComponentFixture<unknown>, node: Element | null): void {
  (node as HTMLElement).click();
  fixture.detectChanges();
}

const text = (el: HTMLElement, selector: string) =>
  el.querySelector(selector)?.textContent?.trim() ?? '';

const buttons = (el: HTMLElement, selector: string) =>
  [...el.querySelectorAll(selector)] as HTMLButtonElement[];

describe('Eneagrama', () => {
  it('opens on type five rather than nothing', () => {
    const { el } = mount(Eneagrama);

    expect(text(el, '.detail__name')).toContain(ENEAGRAMA_PT.types['5'].name);
  });

  it('moves to whichever type is pressed', () => {
    const { el, fixture } = mount(Eneagrama);

    press(fixture, buttons(el, '.picker__chip')[0]);

    expect(text(el, '.detail__name')).toContain(ENEAGRAMA_PT.types['1'].name);
  });

  it('shows only the two wings that belong to the selected type', () => {
    const { el } = mount(Eneagrama);
    const codes = [...el.querySelectorAll('.wings__code')].map((n) => n.textContent?.trim());

    expect(codes).toEqual(['5w4', '5w6']);
  });

  it('follows the type implied by the reader wing', () => {
    const { el, fixture, profiles } = mount(Eneagrama);

    profiles.set('wing', '9w1');
    fixture.detectChanges();
    press(fixture, el.querySelector('.focus__back'));

    expect(text(el, '.detail__name')).toContain(ENEAGRAMA_PT.types['9'].name);
  });

  it('opens a focused reading of the reader own wing, and gives it up on request', () => {
    const { el, fixture, profiles } = mount(Eneagrama);

    profiles.set('wing', '4w5');
    fixture.detectChanges();
    expect(el.querySelector('app-variant-focus')).not.toBeNull();
    expect(text(el, '.focus__title')).toContain('4w5');

    press(fixture, el.querySelector('.focus__back'));
    expect(el.querySelector('app-variant-focus')).toBeNull();
    expect(el.querySelector('.picker__chips')).not.toBeNull();
  });
});

describe('Subtipos', () => {
  it('opens on self preservation rather than nothing', () => {
    const { el } = mount(Subtipos);

    expect(text(el, '.detail__name')).toBe(SUBTIPOS_PT.instincts.sp.name);
  });

  it('moves to whichever instinct is pressed', () => {
    const { el, fixture } = mount(Subtipos);

    press(fixture, buttons(el, '.picker__chip')[2]);

    expect(text(el, '.detail__name')).toBe(SUBTIPOS_PT.instincts.sx.name);
  });

  it('opens a focused reading of the reader own instinct, and gives it up on request', () => {
    const { el, fixture, profiles } = mount(Subtipos);

    profiles.set('instinct', 'so');
    fixture.detectChanges();
    expect(el.querySelector('app-variant-focus')).not.toBeNull();
    expect(text(el, '.focus__title')).toContain(SUBTIPOS_PT.instincts.so.code);

    press(fixture, el.querySelector('.focus__back'));
    expect(el.querySelector('app-variant-focus')).toBeNull();
    expect(text(el, '.detail__name')).toBe(SUBTIPOS_PT.instincts.so.name);
  });
});

describe('Temperamentos', () => {
  it('opens on a defined blend rather than nothing', () => {
    const { el } = mount(Temperamentos);

    expect(text(el, '.detail__name')).toBe(
      TEMPERAMENTOS_PT.blends['melancholic-choleric'].name,
    );
  });

  it('lists every blend of two different temperaments', () => {
    const { el } = mount(Temperamentos);

    expect(buttons(el, '.blends__chip').length).toBe(12);
    expect(el.querySelectorAll('.singles__name').length).toBe(4);
  });

  it('moves to whichever blend is pressed', () => {
    const { el, fixture } = mount(Temperamentos);
    const chip = buttons(el, '.blends__chip').at(-1);

    press(fixture, chip ?? null);

    expect(text(el, '.detail__name')).toBe(
      TEMPERAMENTOS_PT.blends['sanguine-phlegmatic'].name,
    );
  });

  it('marks the reader own blend among the rest', () => {
    const { el, fixture, profiles } = mount(Temperamentos);

    profiles.set('temperament', 'choleric-melancholic');
    fixture.detectChanges();
    press(fixture, el.querySelector('.focus__back'));

    const mine = buttons(el, '.blends__chip').filter((c) => c.classList.contains('is-mine'));
    expect(mine.length).toBe(1);
  });

  it('opens a focused reading of the reader own blend, and gives it up on request', () => {
    const { el, fixture, profiles } = mount(Temperamentos);

    profiles.set('temperament', 'phlegmatic-sanguine');
    fixture.detectChanges();
    expect(el.querySelector('app-variant-focus')).not.toBeNull();

    press(fixture, el.querySelector('.focus__back'));
    expect(el.querySelector('app-variant-focus')).toBeNull();
    expect(text(el, '.detail__name')).toBe(
      TEMPERAMENTOS_PT.blends['phlegmatic-sanguine'].name,
    );
  });
});
