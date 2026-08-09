import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { TRABALHO_EN } from '../../content/en/trabalho';
import { TRABALHO_PT } from '../../content/pt/trabalho';

@Component({
  selector: 'app-trabalho',
  imports: [PageMasthead, NextPageLink, Reveal, References],
  templateUrl: './trabalho.html',
  styleUrl: './trabalho.scss',
})
export class Trabalho {
  protected readonly page = usePageContent({ pt: TRABALHO_PT, en: TRABALHO_EN });

  /** The design pushes this page's bloom to the right of the title. */
  protected readonly bloom: BloomPosition = {
    top: '-50%',
    left: '45%',
    width: 'min(680px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
