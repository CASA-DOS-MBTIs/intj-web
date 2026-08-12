import { Component, computed, inject, input, signal } from '@angular/core';

import { LanguageService } from '../../core/language.service';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { ProfilePanel } from '../profile-panel/profile-panel';

@Component({
  selector: 'app-profile-lens',
  imports: [ProfilePanel],
  templateUrl: './profile-lens.html',
  styleUrl: './profile-lens.scss',
})
export class ProfileLens {
  readonly facets = input.required<readonly ProfileFacet[]>();

  private readonly language = inject(LanguageService);
  private readonly profiles = inject(ProfileService);

  protected readonly copy = computed(() => this.language.content().profile);
  protected readonly open = signal(false);

  protected readonly isSet = computed(() => {
    const profile = this.profiles.profile();
    return this.facets().some((facet) => profile[facet] !== null);
  });

  protected toggle(): void {
    this.open.update((open) => !open);
  }

  protected close(): void {
    this.open.set(false);
  }
}
