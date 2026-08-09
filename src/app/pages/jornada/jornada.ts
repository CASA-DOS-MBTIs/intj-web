import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { JORNADA_EN } from '../../content/en/jornada';
import { JORNADA_PT } from '../../content/pt/jornada';

@Component({
  selector: 'app-jornada',
  imports: [Reveal, PageMasthead, NextPageLink, References],
  templateUrl: './jornada.html',
  styleUrl: './jornada.scss',
})
export class Jornada {
  protected readonly page = usePageContent({ pt: JORNADA_PT, en: JORNADA_EN });

  protected readonly bloom: BloomPosition = {
    top: '-48%',
    left: '30%',
    width: 'min(700px, 90vw)',
  };

  /** The design opens on the third phase — "A construção", the 20–30 decade. */
  protected readonly selected = signal(2);

  protected readonly phase = computed(() => this.page().phases[this.selected()]);

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected select(index: number): void {
    this.selected.set(index);
  }
}
