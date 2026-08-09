import type { ProfileFacet } from '../core/profile.service';
import { PAGE_PATH, stripLangPrefix, type PageKey } from './types';

/**
 * Which pages actually change when the reader fills in their profile.
 *
 * The control used to sit in the nav on all twenty-odd pages, which promised an
 * adaptation that most of them never delivered — offering to "apply your
 * profile" on a page whose text is identical either way is worse than not
 * offering it, because the reader configures something and sees nothing happen.
 *
 * A page listed here shows the control, and the panel shows only the facets
 * that page reads. Everything else hides it entirely.
 */
export const PROFILE_SCOPE: Partial<Record<PageKey, readonly ProfileFacet[]>> = {
  // Opens on the reader's core type and marks their wing among the two.
  eneagrama: ['wing'],
  // Opens on their tritype, marks it in the grid, and filters the 27 down to
  // the ones containing their core type — which is why the wing counts here.
  tritipos: ['tritype', 'wing'],
  // Opens on their blend of the twelve.
  temperamentos: ['temperament'],
  // Opens on their dominant instinct and highlights their row of the 27.
  subtipos: ['instinct', 'wing'],
  // The assertive/turbulent split changes which column is emphasised.
  comparacoes: ['identity'],
};

/** Longest-path-first, so /alem-do-mbti/eneagrama never matches /alem-do-mbti. */
const BY_PATH: { path: string; facets: readonly ProfileFacet[] }[] = Object.entries(PROFILE_SCOPE)
  .map(([key, facets]) => ({ path: PAGE_PATH[key as PageKey], facets: facets ?? [] }))
  .sort((a, b) => b.path.length - a.path.length);

/**
 * The facets the page at this URL responds to; empty when it responds to none.
 *
 * The language prefix comes off first: `/en/alem-do-mbti/tritipos` is the same
 * page as `/pt/alem-do-mbti/tritipos` and reads the same part of the profile.
 */
export function facetsForUrl(url: string): readonly ProfileFacet[] {
  const bare = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  const path = stripLangPrefix(bare);
  return BY_PATH.find((entry) => entry.path === path)?.facets ?? [];
}
