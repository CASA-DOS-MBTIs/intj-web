import { computed, inject, type Signal } from '@angular/core';

import { LanguageService } from './language.service';
import type { Lang } from '../content/types';

/**
 * Binds a page to its own copy, in the active language.
 *
 * Pages import their two locale bundles directly rather than reaching through
 * one site-wide object, which is what lets the bundler put each page's copy in
 * that page's lazy chunk. Routing the copy through a single `SiteContent` made
 * every route eager in practice: the components split, the prose did not, and
 * opening the home page downloaded all nineteen pages in both languages.
 *
 * Only genuinely site-wide copy — the shell and the profile lens — stays in
 * `LanguageService.content()`.
 *
 * ```ts
 * protected readonly page = usePageContent({ pt: MENTE_PT, en: MENTE_EN });
 * ```
 *
 * Must be called from an injection context.
 */
export function usePageContent<T>(bundles: Record<Lang, T>): Signal<T> {
  const language = inject(LanguageService);
  return computed(() => bundles[language.lang()]);
}
