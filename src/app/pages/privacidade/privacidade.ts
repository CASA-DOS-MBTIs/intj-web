import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { PRIVACIDADE_EN } from '../../content/en/privacidade';
import { PRIVACIDADE_PT } from '../../content/pt/privacidade';

@Component({
  selector: 'app-privacidade',
  imports: [PageMasthead, Reveal],
  templateUrl: './privacidade.html',
  styleUrl: './privacidade.scss',
})
export class Privacidade {
  protected readonly page = usePageContent({ pt: PRIVACIDADE_PT, en: PRIVACIDADE_EN });

  protected readonly bloom: BloomPosition = {
    top: '-42%',
    right: '-8%',
    width: 'min(640px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
