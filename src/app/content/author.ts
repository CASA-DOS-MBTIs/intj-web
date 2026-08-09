/**
 * The site's off-site identities: who wrote it, and the community it belongs to.
 *
 * Not part of a language bundle — an address and a URL are the same in every
 * language. `AUTHOR` also feeds the `Person` node in the structured data, which
 * is what lets a search engine attach all of this to an author rather than to
 * an anonymous domain.
 */
export const AUTHOR = {
  /**
   * Named rather than handled.
   *
   * An identifiable author is a stronger authorship signal than a pseudonym,
   * and it closes a gap that would otherwise matter: the licence files claim
   * copyright for this name, so the site had better be the thing that says who
   * wrote it.
   */
  name: 'Alessandro Lima',
  /** The site's own address rather than a personal one, so it can be
      re-pointed without every published link going stale. */
  email: 'contact@intj.net.br',
  portfolio: 'https://alexZ7000.com.br',
} as const;

/**
 * The MBTI community the site sits alongside.
 *
 * The link goes to the community's own page rather than straight to a chat
 * invite: that page carries the rules, the channels and every network it runs,
 * and an invite link handed out with no rules attached is how a group turns
 * into a mess.
 */
export const COMMUNITY = {
  name: 'Casa dos MBTIs',
  url: 'https://casa-dos-mbtis.carrd.co/',
} as const;

/**
 * Whether the community is linked from the site yet.
 *
 * Off while the community's administrator is asked whether she is happy both
 * with the link and with this site carrying it. Linking somebody's community
 * from a page that makes claims about psychology is her decision as much as
 * ours.
 *
 * A flag rather than commented-out markup on purpose: the copy, the styles and
 * the templates all stay compiled and type-checked, so nothing rots while the
 * answer is pending. Turning it back on is this one word.
 */
export const SHOW_COMMUNITY = false;
