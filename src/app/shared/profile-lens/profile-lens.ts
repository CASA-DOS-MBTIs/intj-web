import { Component, computed, inject, input, signal } from '@angular/core';

import { LanguageService } from '../../core/language.service';
import { ProfileService, type ProfileFacet } from '../../core/profile.service';
import { ProfilePanel } from '../profile-panel/profile-panel';

/**
 * The in-page control that narrows a page to the reader's own variant.
 *
 * It lives on the page rather than in the header for the same reason it is only
 * rendered on pages that use it: the offer should appear exactly where it pays
 * off, next to the thing it will change, and nowhere else.
 */
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

  /** Whether the reader has set anything this page actually reads. */
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
