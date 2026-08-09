import { EN } from './en';
import { PT } from './pt';
import type { Lang, SiteContent } from './types';

/**
 * Both bundles are typed as `SiteContent`, so adding a string to one locale
 * without the other fails the build rather than the page.
 */
export const CONTENT: Record<Lang, SiteContent> = {
  pt: PT,
  en: EN,
};
