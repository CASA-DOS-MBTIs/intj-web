import { Injectable, inject, signal } from '@angular/core';
import { PlatformLocation } from '@angular/common';

/**
 * The path the reader is on, as a signal.
 *
 * Two unrelated things need it — the language is read off the URL's first
 * segment, and every canonical/`hreflang`/`og:url` tag is built from it — and
 * neither should own it. `App` pushes each navigation in here; everyone else
 * reads.
 *
 * Seeded from `PlatformLocation` rather than `window.location` because this
 * also runs under prerendering, where "the current page" is whichever route the
 * build is rendering and there is no window at all.
 */
@Injectable({ providedIn: 'root' })
export class CurrentUrl {
  private readonly value = signal(normalise(inject(PlatformLocation).pathname));

  /** Path only — no query, no fragment, no trailing slash below the root. */
  readonly path = this.value.asReadonly();

  set(url: string): void {
    this.value.set(normalise(url));
  }
}

function normalise(url: string): string {
  const path = url.split('?')[0].split('#')[0];
  return path.replace(/\/+$/, '') || '/';
}
