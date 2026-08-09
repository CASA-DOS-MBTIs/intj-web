import { Directive, ElementRef, type OnDestroy, type OnInit, inject } from '@angular/core';

/** Give the browser a moment to settle before treating an element as "in view". */
const ROOT_MARGIN = '0px 0px -6% 0px';
const THRESHOLD = 0.05;

/**
 * Fades an element in the first time it scrolls into view.
 *
 * The `data-rv` attribute carries the hidden state from global CSS, and
 * `.rv-in` releases it. Because hiding happens in CSS, a failsafe timer
 * reveals everything regardless — an observer that never fires (an element
 * inside a scroll container, a browser quirk) must not leave copy invisible.
 */
@Directive({
  selector: '[appReveal]',
  host: { '[attr.data-rv]': '""' },
})
export class Reveal implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private observer?: IntersectionObserver;
  private failsafe?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const element = this.host.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      this.show();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.show();
          }
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD },
    );

    this.observer.observe(element);
    this.failsafe = setTimeout(() => this.show(), 1600);
  }

  ngOnDestroy(): void {
    this.teardown();
  }

  private show(): void {
    this.host.nativeElement.classList.add('rv-in');
    this.teardown();
  }

  private teardown(): void {
    this.observer?.disconnect();
    this.observer = undefined;
    clearTimeout(this.failsafe);
    this.failsafe = undefined;
  }
}
