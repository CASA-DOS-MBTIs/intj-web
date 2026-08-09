import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';

import { CurrentUrl } from './core/current-url';
import { SiteFoot } from './shared/site-foot/site-foot';
import { SiteNav } from './shared/site-nav/site-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteNav, SiteFoot],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(window:scroll)': 'onScroll()' },
})
export class App {
  private readonly currentUrl = inject(CurrentUrl);

  /** Fraction of the document scrolled, 0–1, driving the top progress bar. */
  protected readonly progress = signal(0);

  /** Set while a measurement is already queued, to coalesce scroll bursts. */
  private ticking = false;

  constructor() {
    /**
     * `RoutesRecognized` rather than `NavigationEnd`: it carries the final URL
     * — redirects already resolved — and fires *before* the page component is
     * created. The language and the canonical URL are both read off this, and
     * a page that constructs before they update renders the wrong language for
     * a frame.
     */
    inject(Router)
      .events.pipe(
        filter((event): event is RoutesRecognized => event instanceof RoutesRecognized),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.currentUrl.set(event.urlAfterRedirects));
  }

  protected onScroll(): void {
    // Reading scrollHeight forces layout, so measure at most once per frame.
    if (this.ticking) {
      return;
    }
    this.ticking = true;

    requestAnimationFrame(() => {
      this.ticking = false;
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      this.progress.set(scrollable > 0 ? Math.min(1, Math.max(0, el.scrollTop / scrollable)) : 0);
    });
  }
}
