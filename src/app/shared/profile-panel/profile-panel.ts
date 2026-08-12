import { Component, computed, inject, input, output } from '@angular/core';

import { LanguageService } from '../../core/language.service';
import { ProfileService, type Profile, type ProfileFacet } from '../../core/profile.service';
import {
  IDENTITY_KEYS,
  INSTINCT_KEYS,
  TEMPERAMENT_PAIR_KEYS,
  TRITYPE_KEYS,
  WING_KEYS,
} from '../../content/profile-keys';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.html',
  styleUrl: './profile-panel.scss',
})
export class ProfilePanel {
  readonly facets = input.required<readonly ProfileFacet[]>();
  readonly closed = output<void>();

  private readonly language = inject(LanguageService);
  private readonly profiles = inject(ProfileService);

  protected readonly copy = computed(() => this.language.content().profile);
  protected readonly profile = this.profiles.profile;

  protected readonly hasRelevant = computed(() => {
    const current = this.profiles.profile();
    return this.facets().some((facet) => current[facet] !== null);
  });

  protected readonly identityKeys = IDENTITY_KEYS;
  protected readonly instinctKeys = INSTINCT_KEYS;
  protected readonly wingKeys = WING_KEYS;
  protected readonly tritypeKeys = TRITYPE_KEYS;
  protected readonly temperamentKeys = TEMPERAMENT_PAIR_KEYS;

  protected shows(facet: ProfileFacet): boolean {
    return this.facets().includes(facet);
  }

  protected set<K extends keyof Profile>(facet: K, value: Profile[K]): void {
    this.profiles.set(facet, value);
  }

  protected choose<K extends keyof Profile>(facet: K, event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    this.profiles.set(facet, null);
    if (raw !== '') {
      this.profiles.set(facet, raw as Profile[K]);
    }
  }

  protected clear(): void {
    this.profiles.clear();
  }

  protected close(): void {
    this.closed.emit();
  }
}
