import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ArticlePage } from '../../shared/article-page/article-page';
import { AMIZADES_EN } from '../../content/en/amizades';
import { AMIZADES_PT } from '../../content/pt/amizades';

@Component({
  selector: 'app-amizades',
  imports: [ArticlePage],
  template: `<app-article-page [content]="page()" [bloom]="bloom" />`,
})
export class Amizades {
  protected readonly page = usePageContent({ pt: AMIZADES_PT, en: AMIZADES_EN });
  protected readonly bloom = { top: '-42%', right: '18%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
