import { Component, input } from '@angular/core';

import { Reveal } from '../../core/reveal.directive';
import { References } from '../references/references';
import { PageMasthead, type BloomPosition } from '../page-header/page-header';
import type { ArticlePageContent } from '../../content/types';

/**
 * Presentation for the site's long-form prose pages — friendship, family,
 * childhood, health, the combinations argument, and the two written for people
 * who are not the reader. They differ in copy, not in shape.
 */
@Component({
  selector: 'app-article-page',
  imports: [PageMasthead, References, Reveal],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss',
})
export class ArticlePage {
  readonly content = input.required<ArticlePageContent>();
  readonly bloom = input<BloomPosition>({
    top: '-44%',
    right: '16%',
    width: 'min(700px, 90vw)',
  });
}
