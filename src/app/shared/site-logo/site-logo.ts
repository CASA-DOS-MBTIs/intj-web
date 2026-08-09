import { Component, input } from '@angular/core';

/**
 * The site's mark: P1, "barras decrescentes" — the four functions as four bars
 * of decreasing length, the wordmark, and the Ni·Te·Fi·Se line under it.
 *
 * The geometry is a faithful copy of `public/assets/logos/p1-barras-decrescentes.svg`,
 * down to the coordinates: same viewBox, same bar widths, same type sizes and
 * tracking. Nothing is cropped or rearranged — the header simply renders it
 * smaller. There is no reduced cut, because there is no reduced logo.
 *
 * It is inlined rather than loaded as an `<img>` so it can take its colours
 * from the live theme tokens: change `--accent` and the dominant bar follows.
 * The asset file keeps the same values as literal fallbacks, so the two stay in
 * step.
 */
@Component({
  selector: 'app-site-logo',
  templateUrl: './site-logo.html',
  styleUrl: './site-logo.scss',
})
export class SiteLogo {
  /** Accessible name; leave empty when a parent link already provides one. */
  readonly label = input<string>('');
}
