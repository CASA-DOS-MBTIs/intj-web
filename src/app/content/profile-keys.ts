export type IdentityKey = 'A' | 'T';

export const IDENTITY_KEYS: readonly IdentityKey[] = ['A', 'T'] as const;

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

export function coreType(wing: WingKey): EnneatypeKey {
  return wing[0] as EnneatypeKey;
}

export type CentreKey = 'gut' | 'heart' | 'head';

export const CENTRE_TYPES: Record<CentreKey, readonly EnneatypeKey[]> = {
  gut: ['8', '9', '1'],
  heart: ['2', '3', '4'],
  head: ['5', '6', '7'],
};

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

export function tritypeDigits(key: TritypeKey): EnneatypeKey[] {
  return key.split('') as EnneatypeKey[];
}

export function tritypeContains(key: TritypeKey, type: EnneatypeKey): boolean {
  return key.includes(type);
}

export type InstinctKey = 'sp' | 'so' | 'sx';

export const INSTINCT_KEYS: readonly InstinctKey[] = ['sp', 'so', 'sx'] as const;

export type TemperamentKey = 'melancholic' | 'choleric' | 'phlegmatic' | 'sanguine';

export const TEMPERAMENT_KEYS: readonly TemperamentKey[] = [
  'melancholic',
  'choleric',
  'phlegmatic',
  'sanguine',
] as const;

type AnyTemperamentPair = `${TemperamentKey}-${TemperamentKey}`;

type SelfPair = { [K in TemperamentKey]: `${K}-${K}` }[TemperamentKey];

export type TemperamentPairKey = Exclude<AnyTemperamentPair, SelfPair>;

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

export type GenderKey = 'man' | 'woman';

export const GENDER_KEYS: readonly GenderKey[] = ['man', 'woman'] as const;

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

export const OTHER_TYPES: readonly MbtiType[] = MBTI_TYPES.filter((t) => t !== 'INTJ');
