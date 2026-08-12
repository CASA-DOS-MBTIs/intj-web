import type { ProfileFacet } from '../core/profile.service';
import { PAGE_PATH, stripLangPrefix, type PageKey } from './types';

export const PROFILE_SCOPE: Partial<Record<PageKey, readonly ProfileFacet[]>> = {
  eneagrama: ['wing'],
  tritipos: ['tritype', 'wing'],
  temperamentos: ['temperament'],
  subtipos: ['instinct', 'wing'],
  comparacoes: ['identity'],
};

const BY_PATH: { path: string; facets: readonly ProfileFacet[] }[] = Object.entries(PROFILE_SCOPE)
  .map(([key, facets]) => ({ path: PAGE_PATH[key as PageKey], facets: facets ?? [] }))
  .sort((a, b) => b.path.length - a.path.length);

export function facetsForUrl(url: string): readonly ProfileFacet[] {
  const bare = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  const path = stripLangPrefix(bare);
  return BY_PATH.find((entry) => entry.path === path)?.facets ?? [];
}
