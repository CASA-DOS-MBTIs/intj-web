import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { References } from '../../shared/references/references';
import { HOME_EN } from '../../content/en/home';
import { HOME_PT } from '../../content/pt/home';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal, References],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly page = usePageContent({ pt: HOME_PT, en: HOME_EN });
  protected readonly path = inject(LanguageService).path;

  constructor() {
    usePageMeta(() => this.page().meta);
  }
}
