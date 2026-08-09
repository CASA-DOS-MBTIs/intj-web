import type { SiteContent } from '../types';

import { PROFILE_EN } from './profile';
import { SHELL_EN } from './shell';

/**
 * Site-wide copy only. Page bundles are imported by their own components so
 * they land in the matching lazy chunk — see core/page-content.ts.
 */
export const EN: SiteContent = {
  shell: SHELL_EN,
  profile: PROFILE_EN,
};
