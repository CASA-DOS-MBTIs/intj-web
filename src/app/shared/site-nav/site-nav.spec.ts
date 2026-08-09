import { Component } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { SiteNav } from './site-nav';

/**
 * Somewhere for the nav's links to actually go. With an empty route table the
 * clicks below fail to match, and RouterLink reports the failure after the
 * TestBed has been torn down — an unhandled NG0205 that passes the suite while
 * poisoning the run.
 */
@Component({ template: '' })
class Blank {}

function mount(): { fixture: ComponentFixture<SiteNav>; el: HTMLElement } {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([{ path: '**', component: Blank }])] });
  TestBed.inject(LanguageService);
  const fixture = TestBed.createComponent(SiteNav);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

function click(el: Element | null, fixture: ComponentFixture<SiteNav>): void {
  (el as HTMLElement).click();
  fixture.detectChanges();
}

const burger = (el: HTMLElement) => el.querySelector('.nav__burger');
const drawer = (el: HTMLElement) => el.querySelector('.nav__links');
const triggers = (el: HTMLElement) => [...el.querySelectorAll('.nav__trigger')];

describe('SiteNav', () => {
  it('starts with the drawer and every group closed', () => {
    const { el } = mount();

    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
    expect(burger(el)?.getAttribute('aria-expanded')).toBe('false');
    expect(el.querySelector('.nav__dropdown')).toBeNull();
  });

  it('opens and closes the drawer from the toggle', () => {
    const { el, fixture } = mount();

    click(burger(el), fixture);
    expect(drawer(el)?.classList.contains('is-open')).toBe(true);
    expect(burger(el)?.getAttribute('aria-expanded')).toBe('true');

    click(burger(el), fixture);
    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
  });

  it('drives both presentations of a group from one piece of state', () => {
    const { el, fixture } = mount();

    // The same trigger that opens a popover on a wide screen opens the inline
    // accordion inside the drawer — only the CSS differs between the two.
    click(triggers(el)[0], fixture);

    expect(el.querySelector('.nav__dropdown')).not.toBeNull();
    expect(triggers(el)[0].getAttribute('aria-expanded')).toBe('true');
  });

  it('keeps only one group open at a time', () => {
    const { el, fixture } = mount();

    click(triggers(el)[0], fixture);
    click(triggers(el)[1], fixture);

    expect(el.querySelectorAll('.nav__dropdown').length).toBe(1);
    expect(triggers(el)[0].getAttribute('aria-expanded')).toBe('false');
    expect(triggers(el)[1].getAttribute('aria-expanded')).toBe('true');
  });

  it('closes everything when a destination is chosen', async () => {
    const { el, fixture } = mount();

    click(burger(el), fixture);
    click(triggers(el)[0], fixture);
    click(el.querySelector('.nav__drop-link'), fixture);
    // Let the navigation settle before the fixture is torn down.
    await fixture.whenStable();

    // Otherwise the drawer would sit on top of the page the reader just asked for.
    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
    expect(el.querySelector('.nav__dropdown')).toBeNull();
  });

  it('does not leave a group open behind a closed drawer', () => {
    const { el, fixture } = mount();

    click(burger(el), fixture);
    click(triggers(el)[0], fixture);
    click(burger(el), fixture);

    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
    expect(el.querySelector('.nav__dropdown')).toBeNull();
  });

  it('closes on Escape', () => {
    const { el, fixture } = mount();

    click(burger(el), fixture);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
  });

  it('closes when the reader clicks outside the header', () => {
    const { el, fixture } = mount();

    click(burger(el), fixture);
    document.body.click();
    fixture.detectChanges();

    expect(drawer(el)?.classList.contains('is-open')).toBe(false);
  });

  it('reaches every destination once a group is open', () => {
    const { el, fixture } = mount();
    const inline = el.querySelectorAll('.nav__link:not(.nav__trigger)').length;

    click(triggers(el)[0], fixture);
    const firstGroup = el.querySelectorAll('.nav__drop-link').length;
    click(triggers(el)[1], fixture);
    const secondGroup = el.querySelectorAll('.nav__drop-link').length;

    // Four inline links plus two grouped menus cover the whole site.
    expect(inline).toBe(4);
    expect(firstGroup + secondGroup).toBeGreaterThanOrEqual(20);
  });
});
