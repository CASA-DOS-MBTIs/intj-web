import { Component, computed, inject, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { References } from '../../shared/references/references';
import { ProfileLens } from '../../shared/profile-lens/profile-lens';
import { VariantFocus } from '../../shared/variant-focus/variant-focus';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { TEMPERAMENTOS_EN } from '../../content/en/temperamentos';
import { TEMPERAMENTOS_PT } from '../../content/pt/temperamentos';
import {
  TEMPERAMENT_KEYS,
  TEMPERAMENT_PAIR_KEYS,
  type TemperamentPairKey,
} from '../../content/profile-keys';

@Component({
  selector: 'app-temperamentos',
  imports: [PageMasthead, References, Reveal, ProfileLens, VariantFocus],
  templateUrl: './temperamentos.html',
  styleUrl: './temperamentos.scss',
})
export class Temperamentos {
  private readonly profiles = inject(ProfileService);

  protected readonly page = usePageContent({ pt: TEMPERAMENTOS_PT, en: TEMPERAMENTOS_EN });
  protected readonly singleKeys = TEMPERAMENT_KEYS;
  protected readonly blendKeys = TEMPERAMENT_PAIR_KEYS;
  protected readonly bloom: BloomPosition = {
    bottom: '-56%',
    left: '24%',
    width: 'min(700px, 90vw)',
  };

  protected readonly facets: readonly ProfileFacet[] = ['temperament'];

  private readonly myBlend = computed(() => this.profiles.profile().temperament);
  private readonly widenedFor = signal<TemperamentPairKey | null>(null);

  protected readonly focus = computed(() => {
    const key = this.myBlend();
    if (key === null || this.widenedFor() === key) {
      return null;
    }

    const entry = this.page().blends[key];
    return { title: `INTJ ${entry.name}`, deep: entry.deep };
  });

  protected widen(): void {
    this.widenedFor.set(this.myBlend());
  }

  private readonly chosen = signal<TemperamentPairKey | null>(null);

  protected readonly selected = computed<TemperamentPairKey>(
    () => this.chosen() ?? this.profiles.profile().temperament ?? 'melancholic-choleric',
  );

  protected readonly detail = computed(() => this.page().blends[this.selected()]);

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(key: TemperamentPairKey): void {
    this.chosen.set(key);
  }

  protected isMine(key: TemperamentPairKey): boolean {
    return this.profiles.profile().temperament === key;
  }
}
