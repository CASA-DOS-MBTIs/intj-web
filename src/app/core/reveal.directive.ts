import { Directive, ElementRef, type OnDestroy, type OnInit, inject } from '@angular/core';

const ROOT_MARGIN = '0px 0px -6% 0px';
const THRESHOLD = 0.05;

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
