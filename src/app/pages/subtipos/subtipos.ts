import { Component, computed, inject, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { References } from '../../shared/references/references';
import { ProfileLens } from '../../shared/profile-lens/profile-lens';
import { VariantFocus } from '../../shared/variant-focus/variant-focus';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { ENNEATYPE_KEYS, INSTINCT_KEYS, type InstinctKey } from '../../content/profile-keys';
import { SUBTIPOS_EN } from '../../content/en/subtipos';
import { SUBTIPOS_PT } from '../../content/pt/subtipos';

@Component({
  selector: 'app-subtipos',
  imports: [PageMasthead, References, Reveal, ProfileLens, VariantFocus],
  templateUrl: './subtipos.html',
  styleUrl: './subtipos.scss',
})
export class Subtipos {
  private readonly profiles = inject(ProfileService);

  protected readonly page = usePageContent({ pt: SUBTIPOS_PT, en: SUBTIPOS_EN });
  protected readonly instinctKeys = INSTINCT_KEYS;
  protected readonly typeKeys = ENNEATYPE_KEYS;
  protected readonly bloom: BloomPosition = {
    top: '-46%',
    right: '18%',
    width: 'min(680px, 90vw)',
  };

  private readonly chosen = signal<InstinctKey | null>(null);

  protected readonly selected = computed<InstinctKey>(
    () => this.chosen() ?? this.profiles.profile().instinct ?? 'sp',
  );

  protected readonly detail = computed(() => this.page().instincts[this.selected()]);

  protected readonly facets: readonly ProfileFacet[] = ['instinct', 'wing'];

  private readonly myInstinct = computed(() => this.profiles.profile().instinct);
  private readonly widenedFor = signal<InstinctKey | null>(null);

  protected readonly focus = computed(() => {
    const key = this.myInstinct();
    if (key === null || this.widenedFor() === key) {
      return null;
    }

    const entry = this.page().instincts[key];
    return { title: `INTJ ${entry.code} — ${entry.name}`, deep: entry.deep };
  });

  protected widen(): void {
    this.widenedFor.set(this.myInstinct());
  }

  protected readonly myType = this.profiles.enneatype;

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(key: InstinctKey): void {
    this.chosen.set(key);
  }
}
