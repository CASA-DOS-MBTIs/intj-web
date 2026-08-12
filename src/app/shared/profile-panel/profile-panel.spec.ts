import { type Type } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';

import { LanguageService } from '../../core/language.service';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { ProfileLens } from '../profile-lens/profile-lens';
import { ProfilePanel } from './profile-panel';

const ALL: readonly ProfileFacet[] = ['identity', 'wing', 'tritype', 'instinct', 'temperament'];

interface Mounted<T> {
  fixture: ComponentFixture<T>;
  el: HTMLElement;
  profiles: ProfileService;
}

function mount<T>(type: Type<T>, facets: readonly ProfileFacet[]): Mounted<T> {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({});
  localStorage.clear();
  TestBed.inject(LanguageService);
  const profiles = TestBed.inject(ProfileService);
  const fixture = TestBed.createComponent(type);
  fixture.componentRef.setInput('facets', facets);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement, profiles };
}

function chips(el: HTMLElement, legend: string): HTMLButtonElement[] {
  const set = [...el.querySelectorAll('fieldset.facet')].find(
    (f) => f.querySelector('legend')?.textContent?.trim() === legend,
  );
  return [...(set?.querySelectorAll('.chip') ?? [])] as HTMLButtonElement[];
}

function select(el: HTMLElement, id: string): HTMLSelectElement {
  return el.querySelector(`#${id}`) as HTMLSelectElement;
}

function choose(fixture: ComponentFixture<unknown>, node: HTMLSelectElement, value: string): void {
  node.value = value;
  node.dispatchEvent(new Event('change'));
  fixture.detectChanges();
}

function press(fixture: ComponentFixture<unknown>, node: HTMLElement): void {
  node.click();
  fixture.detectChanges();
}

describe('ProfilePanel', () => {
  it('renders only the facets the page asked for', () => {
    const { el } = mount(ProfilePanel, ['identity', 'wing']);

    expect(el.querySelectorAll('.facet').length).toBe(2);
    expect(select(el, 'facet-wing')).not.toBeNull();
    expect(select(el, 'facet-tritype')).toBeNull();
    expect(select(el, 'facet-temperament')).toBeNull();
  });

  it('offers every key each facet defines', () => {
    const { el } = mount(ProfilePanel, ALL);

    expect(select(el, 'facet-wing').options.length).toBe(19);
    expect(select(el, 'facet-tritype').options.length).toBe(28);
    expect(select(el, 'facet-temperament').options.length).toBe(13);
  });

  it('marks a chosen chip as pressed', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);
    const [assertive] = chips(el, TestBed.inject(LanguageService).content().profile.identity.title);

    press(fixture, assertive);

    expect(profiles.profile().identity).toBe('A');
    expect(assertive.getAttribute('aria-pressed')).toBe('true');
    expect(assertive.classList.contains('is-on')).toBe(true);
  });

  it('lets a second press on the same chip undo the choice', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);
    const [assertive] = chips(el, TestBed.inject(LanguageService).content().profile.identity.title);

    press(fixture, assertive);
    press(fixture, assertive);

    expect(profiles.profile().identity).toBeNull();
    expect(assertive.getAttribute('aria-pressed')).toBe('false');
  });

  it('keeps the instinct chips mutually exclusive', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);
    const options = chips(el, TestBed.inject(LanguageService).content().profile.instinct.title);

    press(fixture, options[0]);
    press(fixture, options[2]);

    expect(profiles.profile().instinct).toBe('sx');
    expect(options[0].getAttribute('aria-pressed')).toBe('false');
    expect(options[2].getAttribute('aria-pressed')).toBe('true');
  });

  it('applies a value picked from a select', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);

    choose(fixture, select(el, 'facet-wing'), '5w4');

    expect(profiles.profile().wing).toBe('5w4');
  });

  it('clears the facet when the unset option is picked', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);

    choose(fixture, select(el, 'facet-tritype'), '458');
    expect(profiles.profile().tritype).toBe('458');

    choose(fixture, select(el, 'facet-tritype'), '');
    expect(profiles.profile().tritype).toBeNull();
  });

  it('leaves a value set when the same option is picked twice', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);
    const node = select(el, 'facet-temperament');

    choose(fixture, node, 'melancholic-choleric');
    choose(fixture, node, 'melancholic-choleric');

    expect(profiles.profile().temperament).toBe('melancholic-choleric');
  });

  it('hides the reset control until something relevant is set', () => {
    const { el, fixture } = mount(ProfilePanel, ALL);

    expect(el.querySelector('.panel__clear')).toBeNull();

    choose(fixture, select(el, 'facet-wing'), '9w1');

    expect(el.querySelector('.panel__clear')).not.toBeNull();
  });

  it('ignores a facet it does not show when deciding to offer a reset', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ['identity']);

    profiles.set('wing', '4w5');
    fixture.detectChanges();

    expect(el.querySelector('.panel__clear')).toBeNull();
  });

  it('empties every facet from the reset control', () => {
    const { el, fixture, profiles } = mount(ProfilePanel, ALL);

    choose(fixture, select(el, 'facet-wing'), '5w6');
    choose(fixture, select(el, 'facet-tritype'), '458');
    press(fixture, el.querySelector('.panel__clear') as HTMLElement);

    expect(profiles.hasAny()).toBe(false);
    expect(el.querySelector('.panel__clear')).toBeNull();
  });

  it('announces itself as a dialog with a name', () => {
    const { el } = mount(ProfilePanel, ALL);
    const dialog = el.querySelector('.panel');

    expect(dialog?.getAttribute('role')).toBe('dialog');
    expect(dialog?.getAttribute('aria-label')).toBeTruthy();
  });

  it('asks to be closed rather than closing itself', () => {
    const { el, fixture } = mount(ProfilePanel, ALL);
    let closed = 0;
    fixture.componentInstance.closed.subscribe(() => closed++);

    press(fixture, el.querySelector('.panel__close') as HTMLElement);

    expect(closed).toBe(1);
  });
});

describe('ProfileLens', () => {
  it('starts closed, with the panel absent rather than hidden', () => {
    const { el } = mount(ProfileLens, ALL);

    expect(el.querySelector('app-profile-panel')).toBeNull();
    expect(el.querySelector('.btn')?.getAttribute('aria-expanded')).toBe('false');
    expect(el.querySelector('.lens__hint')).not.toBeNull();
  });

  it('opens the panel from the toggle', () => {
    const { el, fixture } = mount(ProfileLens, ALL);

    press(fixture, el.querySelector('.btn') as HTMLElement);

    expect(el.querySelector('app-profile-panel')).not.toBeNull();
    expect(el.querySelector('.btn')?.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('.lens')?.classList.contains('is-open')).toBe(true);
  });

  it('drops the empty hint once a facet it watches is set', () => {
    const { el, fixture, profiles } = mount(ProfileLens, ['instinct']);

    profiles.set('instinct', 'so');
    fixture.detectChanges();

    expect(el.querySelector('.lens__hint')).toBeNull();
  });

  it('keeps the hint for a facet it does not watch', () => {
    const { el, fixture, profiles } = mount(ProfileLens, ['instinct']);

    profiles.set('wing', '7w8');
    fixture.detectChanges();

    expect(el.querySelector('.lens__hint')).not.toBeNull();
  });

  it('closes when the panel asks it to', () => {
    const { el, fixture } = mount(ProfileLens, ALL);

    press(fixture, el.querySelector('.btn') as HTMLElement);
    press(fixture, el.querySelector('.panel__close') as HTMLElement);

    expect(el.querySelector('app-profile-panel')).toBeNull();
  });
});
