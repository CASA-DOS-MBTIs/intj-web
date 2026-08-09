import type { SiteContent } from '../types';

import { PROFILE_PT } from './profile';
import { SHELL_PT } from './shell';

/**
 * Site-wide copy only. Page bundles are imported by their own components so
 * they land in the matching lazy chunk — see core/page-content.ts.
 */
export const PT: SiteContent = {
  shell: SHELL_PT,
  profile: PROFILE_PT,
};
