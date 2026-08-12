import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HTML_LANG, LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';
import { SiteLogo } from '../../shared/site-logo/site-logo';
import { CONTENT } from '../../content/content';
import { LANGS, LANG_NAME, type Lang } from '../../content/types';

@Component({
  selector: 'app-entry',
  imports: [RouterLink, SiteLogo],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  private readonly language = inject(LanguageService);

  protected readonly htmlLang = HTML_LANG;

  protected readonly doors = LANGS.map((lang) => ({
    lang,
    name: LANG_NAME[lang],
    href: `/${lang}`,
    ...CONTENT[lang].shell.entry,
  }));

  private readonly meta = computed(() => this.language.content().shell.entry.meta);

  constructor() {
    usePageMeta(() => this.meta());
  }

  protected remember(lang: Lang): void {
    this.language.set(lang);
  }
}
