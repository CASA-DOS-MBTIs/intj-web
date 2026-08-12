import { Component, input, output } from '@angular/core';

import { Reveal } from '../../core/reveal.directive';
import type { FocusLabels, VariantDeep } from '../../content/types';

@Component({
  selector: 'app-variant-focus',
  imports: [Reveal],
  templateUrl: './variant-focus.html',
  styleUrl: './variant-focus.scss',
})
export class VariantFocus {
  readonly deep = input.required<VariantDeep>();
  readonly labels = input.required<FocusLabels>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');

  readonly widened = output<void>();
}
