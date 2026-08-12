import { Component, ElementRef, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HTML_LANG, LanguageService } from '../../core/language.service';
import { SiteLogo } from '../site-logo/site-logo';
import { LANGS, type Lang } from '../../content/types';

@Component({
  selector: 'app-site-nav',
  imports: [RouterLink, RouterLinkActive, SiteLogo],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeAll()',
  },
})
export class SiteNav {
  private readonly language = inject(LanguageService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly nav = computed(() => this.language.content().shell.nav);
  protected readonly lang = this.language.lang;
  protected readonly langs = LANGS;
  protected readonly htmlLang = HTML_LANG;

  protected readonly path = this.language.path;

  protected readonly alternates = this.language.alternates;

  protected readonly openMenu = signal<string | null>(null);

  protected readonly drawerOpen = signal(false);

  protected select(lang: Lang): void {
    this.language.set(lang);
    this.closeAll();
  }

  protected toggleMenu(key: string): void {
    this.openMenu.update((open) => (open === key ? null : key));
  }

  protected toggleDrawer(): void {
    this.drawerOpen.update((open) => !open);
    if (!this.drawerOpen()) {
      this.openMenu.set(null);
    }
  }

  protected closeAll(): void {
    this.openMenu.set(null);
    this.drawerOpen.set(false);
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (this.openMenu() === null && !this.drawerOpen()) {
      return;
    }

    const target = event.target;
    if (target instanceof Node && !this.host.nativeElement.contains(target)) {
      this.closeAll();
    }
  }
}
