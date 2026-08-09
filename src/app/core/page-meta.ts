import { effect, inject } from '@angular/core';

import { SeoService } from './seo';
import type { PageMeta } from '../content/types';

/**
 * Keeps everything a search engine or a link preview reads about this page in
 * step with a signal — title, description, canonical, `hreflang` alternates,
 * Open Graph, Twitter card and structured data.
 *
 * Call from an injection context — a field initialiser or constructor:
 *
 * ```ts
 * private readonly content = inject(LanguageService).content;
 * private readonly _meta = usePageMeta(() => this.content().mente.meta);
 * ```
 *
 * The effect re-runs on language *and* on navigation, because the canonical URL
 * and the alternate set change with both.
 */
export function usePageMeta(source: () => PageMeta, options: { index?: boolean } = {}): void {
  const seo = inject(SeoService);

  effect(() => {
    seo.apply(source(), options);
  });
}
