import { effect, inject } from '@angular/core';

import { SeoService } from './seo';
import type { PageMeta } from '../content/types';

export function usePageMeta(source: () => PageMeta, options: { index?: boolean } = {}): void {
  const seo = inject(SeoService);

  effect(() => {
    seo.apply(source(), options);
  });
}
