import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { AUTHOR, COMMUNITY, SHOW_COMMUNITY } from '../../content/author';
import { CONTATO_EN } from '../../content/en/contato';
import { CONTATO_PT } from '../../content/pt/contato';

@Component({
  selector: 'app-contato',
  imports: [PageMasthead, Reveal],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  protected readonly page = usePageContent({ pt: CONTATO_PT, en: CONTATO_EN });

  protected readonly author = AUTHOR;
  protected readonly community = COMMUNITY;
  protected readonly showCommunity = SHOW_COMMUNITY;

  protected readonly bloom: BloomPosition = {
    top: '-44%',
    right: '-6%',
    width: 'min(680px, 90vw)',
  };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
