import { Component, computed, inject, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { References } from '../../shared/references/references';
import { ProfileLens } from '../../shared/profile-lens/profile-lens';
import { VariantFocus } from '../../shared/variant-focus/variant-focus';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { TRITIPOS_EN } from '../../content/en/tritipos';
import { TRITIPOS_PT } from '../../content/pt/tritipos';
import {
  TRITYPE_KEYS,
  tritypeContains,
  tritypeDigits,
  type TritypeKey,
} from '../../content/profile-keys';

@Component({
  selector: 'app-tritipos',
  imports: [PageMasthead, References, ProfileLens, VariantFocus],
  templateUrl: './tritipos.html',
  styleUrl: './tritipos.scss',
})
export class Tritipos {
  private readonly profiles = inject(ProfileService);

  protected readonly page = usePageContent({ pt: TRITIPOS_PT, en: TRITIPOS_EN });
  protected readonly bloom: BloomPosition = {
    top: '-44%',
    left: '16%',
    width: 'min(680px, 90vw)',
  };

  protected readonly facets: readonly ProfileFacet[] = ['tritype', 'wing'];

  private readonly myTritype = computed(() => this.profiles.profile().tritype);

  /** Which tritype the reader widened out of — see the enneagram page for why. */
  private readonly widenedFor = signal<TritypeKey | null>(null);

  protected readonly focus = computed(() => {
    const key = this.myTritype();
    if (key === null || this.widenedFor() === key) {
      return null;
    }

    const entry = this.page().tritypes[key];
    return { title: `INTJ ${key} — ${entry.name}`, deep: entry.deep };
  });

  private readonly chosen = signal<TritypeKey | null>(null);

  /** Narrows the 27 down to the ones containing the reader's own core type. */
  protected readonly onlyMine = signal(false);

  protected readonly canFilter = computed(() => this.profiles.enneatype() !== null);

  protected readonly visible = computed(() => {
    const core = this.profiles.enneatype();
    if (!this.onlyMine() || core === null) {
      return TRITYPE_KEYS;
    }
    return TRITYPE_KEYS.filter((key) => tritypeContains(key, core));
  });

  protected readonly selected = computed<TritypeKey>(
    () => this.chosen() ?? this.profiles.profile().tritype ?? '358',
  );

  protected readonly detail = computed(() => this.page().tritypes[this.selected()]);

  /** The three digits with the centre each one belongs to. */
  protected readonly breakdown = computed(() => {
    const labels = this.page().centreLabels;
    return tritypeDigits(this.selected()).map((digit) => ({
      digit,
      centre:
        digit === '8' || digit === '9' || digit === '1'
          ? labels.gut
          : digit === '2' || digit === '3' || digit === '4'
            ? labels.heart
            : labels.head,
    }));
  });

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(key: TritypeKey): void {
    this.chosen.set(key);
  }

  protected widen(): void {
    this.widenedFor.set(this.myTritype());
  }

  protected toggleFilter(): void {
    this.onlyMine.update((on) => !on);
  }

  protected isMine(key: TritypeKey): boolean {
    return this.profiles.profile().tritype === key;
  }
}
