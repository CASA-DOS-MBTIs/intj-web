import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { COMBINACOES_EN } from '../../content/en/combinacoes';
import { COMBINACOES_PT } from '../../content/pt/combinacoes';

@Component({
  selector: 'app-combinacoes',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class Combinacoes {
  protected readonly page = usePageContent({ pt: COMBINACOES_PT, en: COMBINACOES_EN });
  protected readonly bloom = { top: '-46%', left: '20%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
