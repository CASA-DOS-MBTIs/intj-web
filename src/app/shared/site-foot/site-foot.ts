import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { SiteLogo } from '../site-logo/site-logo';
import { COMMUNITY, SHOW_COMMUNITY } from '../../content/author';

@Component({
  selector: 'app-site-foot',
  imports: [RouterLink, SiteLogo],
  templateUrl: './site-foot.html',
  styleUrl: './site-foot.scss',
})
export class SiteFoot {
  private readonly language = inject(LanguageService);

  protected readonly foot = computed(() => this.language.content().shell.footer);
  protected readonly community = COMMUNITY;
  protected readonly showCommunity = SHOW_COMMUNITY;
  protected readonly path = this.language.path;
}
