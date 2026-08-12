import { Component, signal } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { vi } from 'vitest';

import { Reveal } from './reveal.directive';

@Component({
  imports: [Reveal],
  template: `
    @if (alive()) {
      <p appReveal>copy</p>
    }
  `,
})
class Host {
  readonly alive = signal(true);
}

interface Observed {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  observed: Element[];
  disconnected: number;
}

let last: Observed | null = null;

function stubObserver(): void {
  last = null;
  class Stub {
    constructor(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit,
    ) {
      last = { callback, options, observed: [], disconnected: 0 };
    }
    observe(element: Element): void {
      last?.observed.push(element);
    }
    disconnect(): void {
      if (last) last.disconnected++;
    }
    unobserve(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  vi.stubGlobal('IntersectionObserver', Stub);
}

function mount(): { fixture: ComponentFixture<Host>; target: HTMLElement } {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({});
  const fixture = TestBed.createComponent(Host);
  fixture.detectChanges();
  return {
    fixture,
    target: fixture.nativeElement.querySelector('p') as HTMLElement,
  };
}

function intersect(ratio: number): void {
  last?.callback(
    [{ isIntersecting: ratio > 0 } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe('Reveal', () => {
  it('marks the element as hidden until it is revealed', () => {
    stubObserver();
    const { target } = mount();

    expect(target.getAttribute('data-rv')).toBe('');
    expect(target.classList.contains('rv-in')).toBe(false);
  });

  it('watches the element it is placed on', () => {
    stubObserver();
    const { target } = mount();

    expect(last?.observed).toEqual([target]);
    expect(last?.options?.threshold).toBe(0.05);
  });

  it('reveals the element once it enters view', () => {
    stubObserver();
    const { target } = mount();

    intersect(1);

    expect(target.classList.contains('rv-in')).toBe(true);
  });

  it('leaves the element alone while it stays out of view', () => {
    stubObserver();
    const { target } = mount();

    intersect(0);

    expect(target.classList.contains('rv-in')).toBe(false);
  });

  it('stops watching once it has revealed', () => {
    stubObserver();
    mount();

    intersect(1);

    expect(last?.disconnected).toBe(1);
  });

  it('reveals everything anyway when the observer never fires', () => {
    vi.useFakeTimers();
    stubObserver();
    const { target } = mount();

    vi.advanceTimersByTime(1600);

    expect(target.classList.contains('rv-in')).toBe(true);
  });

  it('reveals immediately where the browser has no observer at all', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    const { target } = mount();

    expect(target.classList.contains('rv-in')).toBe(true);
  });

  it('lets go of the observer when the element is destroyed unseen', () => {
    stubObserver();
    const { fixture } = mount();

    fixture.componentInstance.alive.set(false);
    fixture.detectChanges();

    expect(last?.disconnected).toBe(1);
  });
});
