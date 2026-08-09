/**
 * Language-neutral identifiers for the variants an INTJ reader can be.
 *
 * Only keys live here — every human-readable label is copy, and belongs in the
 * per-language bundles. These unions are what the profile lens is built on, so
 * a typo in a content file becomes a compile error instead of a blank panel.
 */

/* -------------------------------------------------------------------------- */
/* Identity (16Personalities' Assertive / Turbulent, not an MBTI dimension)     */
/* -------------------------------------------------------------------------- */

export type IdentityKey = 'A' | 'T';

export const IDENTITY_KEYS: readonly IdentityKey[] = ['A', 'T'] as const;

/* -------------------------------------------------------------------------- */
/* Enneagram                                                                   */
/* -------------------------------------------------------------------------- */

export type EnneatypeKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export const ENNEATYPE_KEYS: readonly EnneatypeKey[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const;

/** Each type with each of its two adjacent wings. */
export type WingKey =
  | '1w9'
  | '1w2'
  | '2w1'
  | '2w3'
  | '3w2'
  | '3w4'
  | '4w3'
  | '4w5'
  | '5w4'
  | '5w6'
  | '6w5'
  | '6w7'
  | '7w6'
  | '7w8'
  | '8w7'
  | '8w9'
  | '9w8'
  | '9w1';

export const WING_KEYS: readonly WingKey[] = [
  '1w9',
  '1w2',
  '2w1',
  '2w3',
  '3w2',
  '3w4',
  '4w3',
  '4w5',
  '5w4',
  '5w6',
  '6w5',
  '6w7',
  '7w6',
  '7w8',
  '8w7',
  '8w9',
  '9w8',
  '9w1',
] as const;

/** The core type of a wing key: '3w4' -> '3'. */
export function coreType(wing: WingKey): EnneatypeKey {
  return wing[0] as EnneatypeKey;
}

/* -------------------------------------------------------------------------- */
/* Centres of intelligence                                                     */
/* -------------------------------------------------------------------------- */

export type CentreKey = 'gut' | 'heart' | 'head';

/**
 * A tritype takes exactly one type from each centre, which is what makes 27
 * combinations rather than 84.
 */
export const CENTRE_TYPES: Record<CentreKey, readonly EnneatypeKey[]> = {
  gut: ['8', '9', '1'],
  heart: ['2', '3', '4'],
  head: ['5', '6', '7'],
};

/* -------------------------------------------------------------------------- */
/* Tritype                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * The 27 tritype archetypes, keyed in ascending digit order.
 *
 * Two different things get called "a tritype" and only one of them is a stable
 * identifier. The *archetype* is the unordered set — one type from each centre —
 * and there are 27 of those. A *person's* tritype is that set written in
 * dominance order with the core type leading, so the same archetype appears as
 * 358, 385, 538, 583, 835 or 853 depending on who is describing themselves.
 *
 * Keys here are the archetype, ascending, because that is what content is
 * written against. Rendering someone's own ordering is `dominanceOrder()`.
 *
 * Tritype® is Katherine Chernick Fauvre's model and trademark.
 */
export type TritypeKey =
  | '125'
  | '126'
  | '127'
  | '135'
  | '136'
  | '137'
  | '145'
  | '146'
  | '147'
  | '258'
  | '268'
  | '278'
  | '358'
  | '368'
  | '378'
  | '458'
  | '468'
  | '478'
  | '259'
  | '269'
  | '279'
  | '359'
  | '369'
  | '379'
  | '459'
  | '469'
  | '479';

export const TRITYPE_KEYS: readonly TritypeKey[] = [
  '125',
  '126',
  '127',
  '135',
  '136',
  '137',
  '145',
  '146',
  '147',
  '258',
  '268',
  '278',
  '358',
  '368',
  '378',
  '458',
  '468',
  '478',
  '259',
  '269',
  '279',
  '359',
  '369',
  '379',
  '459',
  '469',
  '479',
] as const;

/** The three digits of a tritype, ascending. */
export function tritypeDigits(key: TritypeKey): EnneatypeKey[] {
  return key.split('') as EnneatypeKey[];
}

/** True when the tritype contains the reader's core type. */
export function tritypeContains(key: TritypeKey, type: EnneatypeKey): boolean {
  return key.includes(type);
}

/* -------------------------------------------------------------------------- */
/* Instinctual subtypes                                                        */
/* -------------------------------------------------------------------------- */

export type InstinctKey = 'sp' | 'so' | 'sx';

export const INSTINCT_KEYS: readonly InstinctKey[] = ['sp', 'so', 'sx'] as const;

/* -------------------------------------------------------------------------- */
/* Classical temperaments                                                      */
/* -------------------------------------------------------------------------- */

export type TemperamentKey = 'melancholic' | 'choleric' | 'phlegmatic' | 'sanguine';

export const TEMPERAMENT_KEYS: readonly TemperamentKey[] = [
  'melancholic',
  'choleric',
  'phlegmatic',
  'sanguine',
] as const;

/** Every ordered pair the template literal can form, self-pairs included. */
type AnyTemperamentPair = `${TemperamentKey}-${TemperamentKey}`;

/** 'melancholic-melancholic' and friends — a blend of something with itself. */
type SelfPair = { [K in TemperamentKey]: `${K}-${K}` }[TemperamentKey];

/**
 * Nobody is one temperament, and nobody is a blend of one temperament with
 * itself. The blend is written dominant-first, so 'choleric-phlegmatic' and
 * 'phlegmatic-choleric' are genuinely different people.
 *
 * Excluding the self-pairs is what makes this exactly the twelve blends
 * `TEMPERAMENT_PAIR_KEYS` builds — without it the type claims sixteen and every
 * content file is a compile error for omitting four combinations that do not
 * exist.
 */
export type TemperamentPairKey = Exclude<AnyTemperamentPair, SelfPair>;

/** All 12 ordered pairs — a temperament is never blended with itself. */
export const TEMPERAMENT_PAIR_KEYS: readonly TemperamentPairKey[] = TEMPERAMENT_KEYS.flatMap(
  (primary) =>
    TEMPERAMENT_KEYS.filter((secondary) => secondary !== primary).map(
      (secondary) => `${primary}-${secondary}` as TemperamentPairKey,
    ),
);

export function temperamentParts(key: TemperamentPairKey): [TemperamentKey, TemperamentKey] {
  const [primary, secondary] = key.split('-') as [TemperamentKey, TemperamentKey];
  return [primary, secondary];
}

/* -------------------------------------------------------------------------- */
/* Sex / gender lens                                                           */
/* -------------------------------------------------------------------------- */

export type GenderKey = 'man' | 'woman';

export const GENDER_KEYS: readonly GenderKey[] = ['man', 'woman'] as const;

/* -------------------------------------------------------------------------- */
/* The other fifteen types                                                     */
/* -------------------------------------------------------------------------- */

export type MbtiType =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP';

/**
 * Ordered by how close the stack sits to the INTJ's, which is also roughly the
 * order a reader wants them in: the other intuitives first, sensors last.
 */
export const MBTI_TYPES: readonly MbtiType[] = [
  'INTP',
  'ENTJ',
  'ENTP',
  'INFJ',
  'INFP',
  'ENFJ',
  'ENFP',
  'ISTJ',
  'ISTP',
  'ESTJ',
  'ESTP',
  'ISFJ',
  'ISFP',
  'ESFJ',
  'ESFP',
  'INTJ',
] as const;

/** The fifteen others, i.e. everyone the INTJ can be compared against. */
export const OTHER_TYPES: readonly MbtiType[] = MBTI_TYPES.filter((t) => t !== 'INTJ');
