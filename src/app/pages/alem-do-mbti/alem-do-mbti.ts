import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { NextPageLink } from '../../shared/next-page/next-page';
import { References } from '../../shared/references/references';
import { PageMasthead } from '../../shared/page-header/page-header';
import { ALEM_DO_MBTI_EN } from '../../content/en/alem-do-mbti';
import { ALEM_DO_MBTI_PT } from '../../content/pt/alem-do-mbti';

@Component({
  selector: 'app-alem-do-mbti',
  imports: [PageMasthead, NextPageLink, Reveal, References, RouterLink],
  templateUrl: './alem-do-mbti.html',
  styleUrl: './alem-do-mbti.scss',
})
export class AlemDoMbti {
  private readonly language = inject(LanguageService);

  protected readonly page = usePageContent({ pt: ALEM_DO_MBTI_PT, en: ALEM_DO_MBTI_EN });

  /** Index of the enneatype whose detail card is showing. */
  protected readonly selected = signal(0);

  /**
   * Derived from the language signal as well as the selection, so switching
   * language swaps the open card's copy without losing the reader's place.
   */
  protected readonly current = computed(() => this.page().enneagram.types[this.selected()]);

  protected readonly bloom = { top: '-46%', right: '22%', width: 'min(700px, 90vw)' };

  protected readonly path = this.language.path;

  /**
   * This page summarises; the deep pages carry the unabridged material. The
   * links come from the nav bundle so the two never drift apart — minus the
   * first entry, which points back here.
   */
  /**
   * This page summarises; the deep pages carry the unabridged material. The
   * links come from the nav bundle so the two never drift apart — minus the
   * entry that points back here.
   */
  private readonly deepMenu = computed(() =>
    this.language.content().shell.nav.menus.find((menu) => menu.key === 'alem'),
  );

  protected readonly deepMenuLabel = computed(() => this.deepMenu()?.label ?? '');

  protected readonly deepLinks = computed(
    () => this.deepMenu()?.items.filter((item) => item.key !== 'alem-do-mbti') ?? [],
  );

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected select(index: number): void {
    this.selected.set(index);
  }
}
