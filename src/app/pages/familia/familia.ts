import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { FAMILIA_EN } from '../../content/en/familia';
import { FAMILIA_PT } from '../../content/pt/familia';

@Component({
  selector: 'app-familia',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class Familia {
  protected readonly page = usePageContent({ pt: FAMILIA_PT, en: FAMILIA_EN });
  protected readonly bloom = { top: '-48%', left: '30%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
