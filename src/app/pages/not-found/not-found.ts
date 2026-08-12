import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';

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
