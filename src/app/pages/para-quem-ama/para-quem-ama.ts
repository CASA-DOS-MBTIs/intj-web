import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { PARA_QUEM_AMA_EN } from '../../content/en/para-quem-ama';
import { PARA_QUEM_AMA_PT } from '../../content/pt/para-quem-ama';

@Component({
  selector: 'app-para-quem-ama',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class ParaQuemAma {
  protected readonly page = usePageContent({ pt: PARA_QUEM_AMA_PT, en: PARA_QUEM_AMA_EN });
  protected readonly bloom = { top: '-40%', right: '8%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
