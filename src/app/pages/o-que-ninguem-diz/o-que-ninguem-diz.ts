import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { O_QUE_NINGUEM_DIZ_EN } from '../../content/en/o-que-ninguem-diz';
import { O_QUE_NINGUEM_DIZ_PT } from '../../content/pt/o-que-ninguem-diz';

@Component({
  selector: 'app-o-que-ninguem-diz',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class OQueNinguemDiz {
  protected readonly page = usePageContent({ pt: O_QUE_NINGUEM_DIZ_PT, en: O_QUE_NINGUEM_DIZ_EN });
  protected readonly bloom = { top: '-46%', left: '38%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
