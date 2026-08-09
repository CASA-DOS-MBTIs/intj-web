import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { COMPARACOES_EN } from '../../content/en/comparacoes';
import { COMPARACOES_PT } from '../../content/pt/comparacoes';

@Component({
  selector: 'app-comparacoes',
  imports: [Reveal, PageMasthead, NextPageLink, References],
  templateUrl: './comparacoes.html',
  styleUrl: './comparacoes.scss',
})
export class Comparacoes {
  protected readonly page = usePageContent({ pt: COMPARACOES_PT, en: COMPARACOES_EN });

  protected readonly bloom: BloomPosition = {
    top: '-46%',
    left: '12%',
    width: 'min(680px, 90vw)',
  };

  /** Index of the type currently held up against the INTJ. */
  protected readonly selected = signal(0);

  /**
   * Clamped so a shorter list in another locale could never leave the table
   * pointing past its end.
   */
  protected readonly comparison = computed(() => {
    const items = this.page().comparator.items;
    return items[Math.min(this.selected(), items.length - 1)];
  });

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
