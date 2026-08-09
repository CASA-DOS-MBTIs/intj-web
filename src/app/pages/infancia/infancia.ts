import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { INFANCIA_EN } from '../../content/en/infancia';
import { INFANCIA_PT } from '../../content/pt/infancia';

@Component({
  selector: 'app-infancia',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class Infancia {
  protected readonly page = usePageContent({ pt: INFANCIA_PT, en: INFANCIA_EN });
  protected readonly bloom = { top: '-44%', right: '28%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
