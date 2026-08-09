import { Component, input, output } from '@angular/core';

import { Reveal } from '../../core/reveal.directive';
import type { FocusLabels, VariantDeep } from '../../content/types';

/**
 * The unabridged analysis of one variant, rendered in place of the page's
 * general view once the reader has said which variant is theirs.
 *
 * One renderer serves wings, tritypes, temperament blends and instincts —
 * they all narrow to the same shape, so a reader who has configured two of them
 * gets the same reading experience on both pages.
 */
@Component({
  selector: 'app-variant-focus',
  imports: [Reveal],
  templateUrl: './variant-focus.html',
  styleUrl: './variant-focus.scss',
})
export class VariantFocus {
  readonly deep = input.required<VariantDeep>();
  readonly labels = input.required<FocusLabels>();
  /** e.g. "INTJ 3w4 — o realizador exigente". */
  readonly title = input.required<string>();
  /** Optional line under the title, e.g. the tritype's centres. */
  readonly subtitle = input<string>('');

  /** Asks the page to drop back to the general view. */
  readonly widened = output<void>();
}
