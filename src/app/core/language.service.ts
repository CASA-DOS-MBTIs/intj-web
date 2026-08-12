import {
  DOCUMENT,
  Injectable,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  linkedSignal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CurrentUrl } from './current-url';
import { CONTENT } from '../content/content';
import {
  LANGS,
  LANG_PAGE_PATH,
  langFromUrl,
  stripLangPrefix,
  type Lang,
  type PageKey,
  type SiteContent,
} from '../content/types';

const STORAGE_KEY = 'intj-lang';

const FALLBACK_LANG: Lang = 'en';

const PRIMARY_LANG: Lang = 'pt';

export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

function detectLang(): Lang {
  if (typeof navigator === 'undefined') {
    return FALLBACK_LANG;
  }

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const tag of preferred) {
    const base = tag.toLowerCase().split('-')[0];
    if (isLang(base)) {
      return base;
    }
  }

  return FALLBACK_LANG;
}

function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null && isLang(stored) ? stored : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly url = inject(CurrentUrl).path;

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly current = linkedSignal<string, Lang>({
    source: () => this.url(),
    computation: (url, previous) => langFromUrl(url) ?? previous?.value ?? this.preferred(),
  });

  readonly lang = this.current.asReadonly();

  readonly content = computed<SiteContent>(() => CONTENT[this.current()]);

  readonly path = computed<Record<PageKey, string>>(() => LANG_PAGE_PATH[this.current()]);

  readonly alternates = computed<Record<Lang, string>>(() => {
    const bare = stripLangPrefix(this.url());
    const suffix = bare === '/' ? '' : bare;
    return Object.fromEntries(LANGS.map((lang) => [lang, `/${lang}${suffix}`])) as Record<
      Lang,
      string
    >;
  });

  constructor() {
    effect(() => {
      this.document.documentElement.lang = HTML_LANG[this.current()];
    });
  }

  set(lang: Lang): void {
    this.current.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  preferred(): Lang {
    return this.isBrowser ? (readStoredLang() ?? detectLang()) : PRIMARY_LANG;
  }

  chosen(): Lang | null {
    return this.isBrowser ? readStoredLang() : null;
  }
}
