import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ModelPage } from '../../shared/model-page/model-page';
import { DISC_EN } from '../../content/en/disc';
import { DISC_PT } from '../../content/pt/disc';

@Component({
  selector: 'app-disc',
  imports: [ModelPage],
  template: `<app-model-page [content]="page()" [bloom]="bloom" />`,
})
export class Disc {
  protected readonly page = usePageContent({ pt: DISC_PT, en: DISC_EN });
  protected readonly bloom = { top: '-48%', right: '26%', width: 'min(660px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
