import { Component, input } from '@angular/core';

import type { PageHeader } from '../../content/types';

export type BloomPosition = Record<string, string>;

const DEFAULT_BLOOM: BloomPosition = {
  top: '-40%',
  right: '-10%',
  width: 'min(720px, 90vw)',
};

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageMasthead {
  readonly header = input.required<PageHeader>();
  readonly bloom = input<BloomPosition>(DEFAULT_BLOOM);
}
