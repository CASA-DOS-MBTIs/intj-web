import { computed, inject, type Signal } from '@angular/core';

import { LanguageService } from './language.service';
import type { Lang } from '../content/types';

export function usePageContent<T>(bundles: Record<Lang, T>): Signal<T> {
  const language = inject(LanguageService);
  return computed(() => bundles[language.lang()]);
}
