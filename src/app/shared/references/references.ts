import { Component, computed, inject, input } from '@angular/core';

import { LanguageService } from '../../core/language.service';
import { resolveSources, type SourceId } from '../../content/sources';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  readonly sources = input.required<readonly SourceId[]>();

  private readonly language = inject(LanguageService);

  protected readonly labels = computed(() => this.language.content().shell.references);
  protected readonly entries = computed(() => resolveSources(this.sources()));
}
