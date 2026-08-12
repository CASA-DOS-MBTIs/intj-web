import { Component, computed, inject, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { References } from '../../shared/references/references';
import { ProfileLens } from '../../shared/profile-lens/profile-lens';
import { VariantFocus } from '../../shared/variant-focus/variant-focus';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { ENEAGRAMA_EN } from '../../content/en/eneagrama';
import { ENEAGRAMA_PT } from '../../content/pt/eneagrama';
import {
  ENNEATYPE_KEYS,
  WING_KEYS,
  coreType,
  type EnneatypeKey,
  type WingKey,
} from '../../content/profile-keys';

@Component({
  selector: 'app-eneagrama',
  imports: [PageMasthead, References, ProfileLens, VariantFocus],
  templateUrl: './eneagrama.html',
  styleUrl: './eneagrama.scss',
})
export class Eneagrama {
  private readonly profiles = inject(ProfileService);

  protected readonly page = usePageContent({ pt: ENEAGRAMA_PT, en: ENEAGRAMA_EN });
  protected readonly typeKeys = ENNEATYPE_KEYS;
  protected readonly facets: readonly ProfileFacet[] = ['wing'];
  protected readonly bloom: BloomPosition = {
    top: '-46%',
    right: '22%',
    width: 'min(700px, 90vw)',
  };

  private readonly myWing = computed(() => this.profiles.profile().wing);

  private readonly widenedFor = signal<WingKey | null>(null);

  protected readonly focus = computed(() => {
    const wing = this.myWing();
    if (wing === null || this.widenedFor() === wing) {
      return null;
    }

    const entry = this.page().wings[wing];
    return { title: `INTJ ${wing} — ${entry.name}`, deep: entry.deep };
  });

  private readonly chosen = signal<EnneatypeKey | null>(null);

  protected readonly selected = computed<EnneatypeKey>(
    () => this.chosen() ?? this.profiles.enneatype() ?? '5',
  );

  protected readonly detail = computed(() => this.page().types[this.selected()]);

  protected readonly wings = computed(() => {
    const type = this.selected();
    const copy = this.page().wings;

    return WING_KEYS.filter((key) => coreType(key) === type).map((key) => ({
      key,
      name: copy[key].name,
      text: copy[key].text,
      mine: this.myWing() === key,
    }));
  });

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(type: EnneatypeKey): void {
    this.chosen.set(type);
  }

  protected widen(): void {
    this.widenedFor.set(this.myWing());
  }
}
