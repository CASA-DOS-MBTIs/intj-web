import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';

/**
 * Answers an unknown address.
 *
 * Pages serves this with a real 404 status (see scripts/postbuild-pages.mjs).
 * Redirecting to the homepage instead would answer 200, which tells a search
 * engine that every typo is a valid page and is worth indexing — a soft 404.
 */
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private readonly language = inject(LanguageService);

  protected readonly c = computed(() => this.language.content().shell.notFound);
  protected readonly home = computed(() => this.language.path()['home']);

  constructor() {
    usePageMeta(() => this.c().meta, { index: false });
  }
}
