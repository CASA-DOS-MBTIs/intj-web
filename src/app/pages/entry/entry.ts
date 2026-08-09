import { Component, afterNextRender, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { HTML_LANG, LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';
import { SiteLogo } from '../../shared/site-logo/site-logo';
import { CONTENT } from '../../content/content';
import { LANGS, LANG_NAME, type Lang } from '../../content/types';

/**
 * The language door at `/`.
 *
 * Browser-language detection used to run on every page. It lives here alone now
 * because every other address already names its language, and a page that
 * redirects the moment it renders is a page a crawler cannot index — the whole
 * point of the prefixed trees is that `/pt/mente` and `/en/mente` each stay put
 * and each say, in `hreflang`, that the other exists.
 *
 * This page is real markup rather than a bare redirect so that the two trees
 * are reachable by following links, with or without JavaScript.
 */
@Component({
  selector: 'app-entry',
  imports: [RouterLink, SiteLogo],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  private readonly language = inject(LanguageService);
  private readonly router = inject(Router);

  protected readonly htmlLang = HTML_LANG;

  /** Each language invites the reader in its own words, next to its own link. */
  protected readonly doors = LANGS.map((lang) => ({
    lang,
    name: LANG_NAME[lang],
    href: `/${lang}`,
    ...CONTENT[lang].shell.entry,
  }));

  private readonly meta = computed(() => this.language.content().shell.entry.meta);

  constructor() {
    usePageMeta(() => this.meta());

    // Browser only, and after the door has been committed to the DOM — so the
    // prerendered markup is what a crawler keeps, and a reader is moved along
    // without ever having to choose.
    afterNextRender(() => {
      void this.router.navigateByUrl(`/${this.language.preferred()}`, { replaceUrl: true });
    });
  }

  /** Choosing here outranks the browser on every later visit. */
  protected remember(lang: Lang): void {
    this.language.set(lang);
  }
}
