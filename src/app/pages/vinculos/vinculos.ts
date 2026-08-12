import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead } from '../../shared/page-header/page-header';
import { VINCULOS_EN } from '../../content/en/vinculos';
import { VINCULOS_PT } from '../../content/pt/vinculos';

@Component({
  selector: 'app-vinculos',
  imports: [Reveal, PageMasthead, NextPageLink, References],
  templateUrl: './vinculos.html',
  styleUrl: './vinculos.scss',
})
export class Vinculos {
  protected readonly page = usePageContent({ pt: VINCULOS_PT, en: VINCULOS_EN });

  protected readonly bloom = { top: '-45%', right: '8%', width: 'min(660px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
