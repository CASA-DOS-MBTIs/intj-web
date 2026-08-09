import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { SAUDE_EN } from '../../content/en/saude';
import { SAUDE_PT } from '../../content/pt/saude';

@Component({
  selector: 'app-saude',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class Saude {
  protected readonly page = usePageContent({ pt: SAUDE_PT, en: SAUDE_EN });
  protected readonly bloom = { bottom: '-58%', left: '22%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
