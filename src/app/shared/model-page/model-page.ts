import { Component, input } from '@angular/core';

import { Reveal } from '../../core/reveal.directive';
import { References } from '../references/references';
import { PageMasthead, type BloomPosition } from '../page-header/page-header';
import type { ModelPageContent } from '../../content/types';

/**
 * Presentation for a single-model deep page — Socionics, DISC, Jung. They carry
 * the same shape, so they share a body and differ only in copy and in where the
 * header bloom sits.
 */
@Component({
  selector: 'app-model-page',
  imports: [PageMasthead, References, Reveal],
  templateUrl: './model-page.html',
  styleUrl: './model-page.scss',
})
export class ModelPage {
  readonly content = input.required<ModelPageContent>();
  readonly bloom = input<BloomPosition>({
    top: '-44%',
    right: '14%',
    width: 'min(700px, 90vw)',
  });
}
