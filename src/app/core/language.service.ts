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

/**
 * Used when the browser asks for something we do not publish. English is the
 * wider fallback: a reader whose browser is set to French is far more likely
 * to follow English than Portuguese.
 */
const FALLBACK_LANG: Lang = 'en';

/**
 * What the language door renders as when there is nobody to ask — which in
 * practice means while it is being prerendered, since that build output is what
 * a crawler and a reader without JavaScript actually receive.
 *
 * Deliberately not `FALLBACK_LANG`: those answer different questions. "Which
 * language does a French speaker stand the best chance with" is English; "which
 * language is this site's own", on a .br domain written first in Portuguese, is
 * not.
 */
const PRIMARY_LANG: Lang = 'pt';

/** BCP-47 tags for `<html lang>`, which wants a region for correct hyphenation. */
export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/**
 * First supported language in the browser's ordered preference list.
 * `navigator.languages` is already sorted by preference, so the first hit wins:
 * a reader with ['fr-FR', 'pt-BR'] gets Portuguese rather than the fallback.
 */
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

/** A previously chosen language always outranks the browser's preference. */
function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null && isLang(stored) ? stored : null;
  } catch {
    // Storage can throw in private-browsing modes; detection still works.
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly url = inject(CurrentUrl).path;

  /**
   * Asked via `PLATFORM_ID` rather than by probing for `navigator`, which the
   * renderer defines during prerendering — so a `typeof` check reports "browser"
   * on the build machine and the door ships in the wrong language.
   */
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * The address is the authority: `/en/mente` is the English page for everyone,
   * crawler or reader, regardless of what the browser or storage prefers. Only
   * the entry door at `/` carries no language, and there the previous value —
   * ultimately the stored choice, then the browser's — stands.
   *
   * A linked signal rather than a computed because the switcher still writes to
   * it directly, half a frame before the navigation it triggers lands.
   */
  private readonly current = linkedSignal<string, Lang>({
    source: () => this.url(),
    computation: (url, previous) => langFromUrl(url) ?? previous?.value ?? this.preferred(),
  });

  readonly lang = this.current.asReadonly();

  /** The whole copy bundle for the active language. */
  readonly content = computed<SiteContent>(() => CONTENT[this.current()]);

  /** Page paths already carrying the active language's prefix — what every
      internal `routerLink` in the app binds to. */
  readonly path = computed<Record<PageKey, string>>(() => LANG_PAGE_PATH[this.current()]);

  /**
   * This same page in each language.
   *
   * The switcher binds real hrefs to these rather than calling a handler, which
   * is also how a crawler learns the other tree exists — a button that mutates
   * a signal is invisible to it. `SeoService` builds the `hreflang` set from
   * the same map, so the two can never disagree.
   */
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

  /** The reader picked a language. That outranks the browser from now on. */
  set(lang: Lang): void {
    this.current.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Choice simply will not survive a reload.
    }
  }

  /** Where a reader who has not named a language should be sent. */
  preferred(): Lang {
    return this.isBrowser ? (readStoredLang() ?? detectLang()) : PRIMARY_LANG;
  }
}
