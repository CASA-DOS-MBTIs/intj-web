import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { Reveal } from '../../core/reveal.directive';
import { type NextPage } from '../../content/types';

@Component({
  selector: 'app-next-page',
  imports: [RouterLink, Reveal],
  templateUrl: './next-page.html',
  styleUrl: './next-page.scss',
})
export class NextPageLink {
  readonly next = input.required<NextPage>();

  protected readonly path = inject(LanguageService).path;
}
