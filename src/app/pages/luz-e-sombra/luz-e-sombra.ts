import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { LUZ_E_SOMBRA_EN } from '../../content/en/luz-e-sombra';
import { LUZ_E_SOMBRA_PT } from '../../content/pt/luz-e-sombra';

@Component({
  selector: 'app-luz-e-sombra',
  imports: [PageMasthead, NextPageLink, Reveal, References],
  templateUrl: './luz-e-sombra.html',
  styleUrl: './luz-e-sombra.scss',
})
export class LuzESombra {
  protected readonly page = usePageContent({ pt: LUZ_E_SOMBRA_PT, en: LUZ_E_SOMBRA_EN });

  /** The design drops this page's bloom low and left, behind the headline. */
  protected readonly bloom: BloomPosition = {
    bottom: '-60%',
    left: '20%',
    width: 'min(700px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
