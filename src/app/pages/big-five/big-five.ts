import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { BIG_FIVE_EN } from '../../content/en/big-five';
import { BIG_FIVE_PT } from '../../content/pt/big-five';

@Component({
  selector: 'app-big-five',
  imports: [PageMasthead, References, Reveal],
  templateUrl: './big-five.html',
  styleUrl: './big-five.scss',
})
export class BigFive {
  protected readonly page = usePageContent({ pt: BIG_FIVE_PT, en: BIG_FIVE_EN });
  protected readonly bloom: BloomPosition = {
    top: '-44%',
    left: '32%',
    width: 'min(700px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
