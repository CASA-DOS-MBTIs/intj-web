import { Component } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ModelPage } from '../../shared/model-page/model-page';
import { SOCIONICS_EN } from '../../content/en/socionics';
import { SOCIONICS_PT } from '../../content/pt/socionics';

@Component({
  selector: 'app-socionics',
  imports: [ModelPage],
  template: `<app-model-page [content]="page()" [bloom]="bloom" />`,
})
export class Socionics {
  protected readonly page = usePageContent({ pt: SOCIONICS_PT, en: SOCIONICS_EN });
  protected readonly bloom = { top: '-44%', left: '18%', width: 'min(700px, 90vw)' };

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
