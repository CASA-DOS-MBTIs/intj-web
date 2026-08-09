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

  /** Prefixed with the active language, so every link stays in the reader's
      tree instead of dropping them back into Portuguese. */
  protected readonly path = this.language.path;

  /** This same page in the other language — the switcher's hrefs. */
  protected readonly alternates = this.language.alternates;

  /**
   * Key of the open group, or null. One at a time, and the same state drives
   * both presentations: on a wide screen the group is a popover beside its
   * trigger, on a narrow one it expands inline inside the drawer. Same
   * interaction to learn either way — only the layout differs.
   */
  protected readonly openMenu = signal<string | null>(null);

  /** The small-screen drawer. Irrelevant above the breakpoint, where CSS keeps
      the links visible regardless. */
  protected readonly drawerOpen = signal(false);

  /** The link does the navigating; this records the choice so the entry door
      honours it on the reader's next visit. */
  protected select(lang: Lang): void {
    this.language.set(lang);
    this.closeAll();
  }

  protected toggleMenu(key: string): void {
    this.openMenu.update((open) => (open === key ? null : key));
  }

  protected toggleDrawer(): void {
    this.drawerOpen.update((open) => !open);
    // Collapsing the drawer should not leave a group half-open behind it.
    if (!this.drawerOpen()) {
      this.openMenu.set(null);
    }
  }

  /** Following a link closes everything, so the drawer never covers the page
      the reader just asked for. */
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
