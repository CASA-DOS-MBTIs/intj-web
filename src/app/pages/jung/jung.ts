import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ModelPage } from '../../shared/model-page/model-page';
import { JUNG_EN } from '../../content/en/jung';
import { JUNG_PT } from '../../content/pt/jung';

@Component({
  selector: 'app-jung',
  imports: [ModelPage],
  template: `<app-model-page [content]="page()" [bloom]="bloom" />`,
})
export class Jung {
  protected readonly page = usePageContent({ pt: JUNG_PT, en: JUNG_EN });
  protected readonly bloom = { top: '-42%', left: '40%', width: 'min(720px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
