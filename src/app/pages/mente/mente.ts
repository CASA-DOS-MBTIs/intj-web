import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { MENTE_EN } from '../../content/en/mente';
import { MENTE_PT } from '../../content/pt/mente';

@Component({
  selector: 'app-mente',
  imports: [Reveal, PageMasthead, NextPageLink, References],
  templateUrl: './mente.html',
  styleUrl: './mente.scss',
})
export class Mente {
  protected readonly page = usePageContent({ pt: MENTE_PT, en: MENTE_EN });

  /** Index of the function whose detail panel is on screen. */
  protected readonly selected = signal(0);

  protected readonly current = computed(() => this.page().functions[this.selected()]);

  protected readonly bloom: BloomPosition = {
    top: '-40%',
    right: '-10%',
    width: 'min(720px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
