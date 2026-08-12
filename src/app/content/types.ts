import type {
  CentreKey,
  EnneatypeKey,
  GenderKey,
  IdentityKey,
  InstinctKey,
  MbtiType,
  TemperamentKey,
  TemperamentPairKey,
  TritypeKey,
  WingKey,
} from './profile-keys';
import type { SourceId, SourceKind } from './sources';

export type Lang = 'pt' | 'en';

export const LANGS: readonly Lang[] = ['pt', 'en'] as const;

export type PageKey =
  | 'home'
  | 'mente'
  | 'luz-e-sombra'
  | 'trabalho'
  | 'vinculos'
  | 'jornada'
  | 'alem-do-mbti'
  | 'comparacoes'
  | 'espelho'
  | 'genero'
  | 'compatibilidade'
  | 'amizades'
  | 'familia'
  | 'infancia'
  | 'saude'
  | 'glossario'
  | 'para-quem-ama'
  | 'o-que-ninguem-diz'
  | 'contato'
  | 'privacidade'
  | 'combinacoes'
  | 'eneagrama'
  | 'tritipos'
  | 'temperamentos'
  | 'subtipos'
  | 'big-five'
  | 'socionics'
  | 'disc'
  | 'jung';

export const PAGE_PATH: Record<PageKey, string> = {
  home: '/',
  mente: '/mente',
  'luz-e-sombra': '/luz-e-sombra',
  trabalho: '/trabalho',
  vinculos: '/vinculos',
  jornada: '/jornada',
  'alem-do-mbti': '/alem-do-mbti',
  comparacoes: '/comparacoes',
  espelho: '/espelho',
  genero: '/genero',
  compatibilidade: '/compatibilidade',
  amizades: '/amizades',
  familia: '/familia',
  infancia: '/infancia',
  saude: '/saude',
  glossario: '/glossario',
  'para-quem-ama': '/para-quem-ama-um-intj',
  'o-que-ninguem-diz': '/o-que-ninguem-te-diz',
  contato: '/contato',
  privacidade: '/privacidade',
  combinacoes: '/alem-do-mbti/combinacoes',
  eneagrama: '/alem-do-mbti/eneagrama',
  tritipos: '/alem-do-mbti/tritipos',
  temperamentos: '/alem-do-mbti/temperamentos',
  subtipos: '/alem-do-mbti/subtipos',
  'big-five': '/alem-do-mbti/big-five',
  socionics: '/alem-do-mbti/socionics',
  disc: '/alem-do-mbti/disc',
  jung: '/alem-do-mbti/jung',
};

export const LANG_PAGE_PATH: Record<Lang, Record<PageKey, string>> = Object.fromEntries(
  LANGS.map((lang) => [
    lang,
    Object.fromEntries(
      Object.entries(PAGE_PATH).map(([key, path]) => [
        key,
        path === '/' ? `/${lang}` : `/${lang}${path}`,
      ]),
    ) as Record<PageKey, string>,
  ]),
) as Record<Lang, Record<PageKey, string>>;

const LANG_PREFIX = new RegExp(`^/(${LANGS.join('|')})(?=/|$)`);

export function stripLangPrefix(url: string): string {
  const match = LANG_PREFIX.exec(url);
  return match === null ? url : url.slice(match[0].length) || '/';
}

export function langFromUrl(url: string): Lang | null {
  const match = LANG_PREFIX.exec(url.split('?')[0].split('#')[0]);
  return match === null ? null : (match[1] as Lang);
}

export const DEEP_PAGE_KEYS: readonly PageKey[] = [
  'combinacoes',
  'eneagrama',
  'tritipos',
  'subtipos',
  'temperamentos',
  'big-five',
  'socionics',
  'disc',
  'jung',
] as const;

export type RichText = string;

export type FnKey = 'Ni' | 'Te' | 'Fi' | 'Se';

export const FN_KEYS: readonly FnKey[] = ['Ni', 'Te', 'Fi', 'Se'] as const;

export interface PageHeader {
  eyebrow: string;
  title: string;
  lede: RichText;
}

export interface NextPage {
  label: string;
  title: string;
  index: string;
  key: PageKey;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface KickerCard {
  kicker: string;
  title: string;
  text: string;
}

export interface NumberedCard {
  n: string;
  title: string;
  text: string;
}

export interface NavLink {
  key: PageKey;
  label: string;
}

export interface NavMenu {
  key: string;
  label: string;
  items: NavLink[];
}

export interface ShellContent {
  references: {
    title: string;
    note: string;
    kinds: Record<SourceKind, string>;
  };
  nav: {
    brandLabel: string;
    items: NavLink[];
    languageLabel: string;
    skipToContent: string;
    menuLabel: string;
    menus: NavMenu[];
  };
  footer: {
    tagline: string;
    pagesTitle: string;
    pages: NavLink[];
    deeperTitle: string;
    deeper: NavLink[];
    noteTitle: string;
    note: string;
    stack: string;
    madeFor: string;
    community: { kicker: string; text: string; cta: string };
    trademarks: string;
    legal: NavLink[];
  };
  entry: {
    meta: PageMeta;
    title: string;
    text: string;
  };
  notFound: {
    meta: PageMeta;
    title: string;
    text: string;
    cta: string;
  };
}

export interface PageMeta {
  title: string;
  description: string;
}

export const LANG_NAME: Record<Lang, string> = { pt: 'Português', en: 'English' };

export interface PrivacyContent {
  meta: PageMeta;
  header: PageHeader;
  summary: RichText;
  sections: { title: string; body: RichText[] }[];
  storage: {
    title: string;
    intro: RichText;
    items: { key: string; what: string; why: string }[];
    note: string;
  };
  contact: { title: string; text: RichText };
}

export interface ContactContent {
  meta: PageMeta;
  header: PageHeader;
  emailKicker: string;
  emailNote: string;
  reasons: { kicker: string; title: string; text: RichText }[];
  author: {
    kicker: string;
    title: string;
    text: RichText;
    linkLabel: string;
  };
  community: {
    kicker: string;
    title: string;
    text: RichText;
    linkLabel: string;
  };
  closing: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stack: string;
    lede: RichText;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: { value: string; label: string }[];
  portrait: {
    eyebrow: string;
    title: string;
    paragraphs: RichText[];
  };
  traits: {
    kicker: string;
    title: string;
    text: string;
  }[];
  map: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: {
      key: PageKey;
      kicker: string;
      title: string;
      text: string;
    }[];
  };
  quote: { eyebrow: string; quote: string; text: string };
  disclaimer: { eyebrow: string; title: string; paragraphs: string[] };
}

export interface CognitiveFunction {
  abbr: string;
  name: string;
  pos: string;
  age: string;
  strength: string;
  oneLine: string;
  motto: string;
  desc: string;
  desc2: string;
  signs: string[];
  shadow: string;
  grow: string;
}

export interface MenteContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  selectorHint: string;
  meterNote: string;
  functions: CognitiveFunction[];
  signsLabel: string;
  shadowLabel: string;
  growLabel: string;
  axis: { eyebrow: string; title: string; paragraphs: RichText[] };
  inside: { eyebrow: string; cards: TitledText[] };
  next: NextPage;
}

export interface LuzESombraContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  strengths: { eyebrow: string; items: NumberedCard[] };
  weaknesses: {
    eyebrow: string;
    antidoteLabel: string;
    items: { title: string; text: string; antidote: string }[];
  };
  failure: {
    eyebrow: string;
    title: string;
    signsLabel: string;
    exitLabel: string;
    modes: { kicker: string; title: string; text: string; signs: string[]; exit: string }[];
  };
  burnout: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    warningsTitle: string;
    warnings: string[];
    helpsTitle: string;
    helps: string[];
    directTitle: string;
    direct: string;
  };
  next: NextPage;
}

export interface TrabalhoContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  conditions: {
    thriveTitle: string;
    thrive: TitledText[];
    drainTitle: string;
    drain: TitledText[];
  };
  fields: { eyebrow: string; intro: string; items: string[] };
  leadership: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    doLabel: string;
    avoidLabel: string;
    dos: string[];
    avoids: string[];
  };
  practice: { eyebrow: string; title: string; items: NumberedCard[] };
  next: NextPage;
}

export interface VinculosContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  affection: {
    eyebrow: string;
    title: string;
    cards: TitledText[];
    translationTitle: string;
    translation: string;
  };
  love: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    needsTitle: string;
    needs: string[];
    partnerTitle: string;
    partnerNeeds: string[];
  };
  bonds: { kicker: string; title: string; paragraphs: string[] }[];
  compatibility: { eyebrow: string; paragraphs: string[] };
  next: NextPage;
}

export interface Phase {
  range: string;
  title: string;
  focus: string;
  body: string;
  pain: string;
  gain: string;
  task: string;
}

export interface JornadaContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  timelineHint: string;
  focusLabel: string;
  painLabel: string;
  gainLabel: string;
  taskLabel: string;
  phases: Phase[];
  timelineNote: string;
  growth: { eyebrow: string; title: string; intro: string; items: NumberedCard[] };
  next: NextPage;
}

export interface Enneatype {
  tag: string;
  num: string;
  name: string;
  freq: string;
  motto: string;
  body: string;
  want: string;
  fear: string;
  look: string;
  grow: string;
}

export interface AlemDoMbtiContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  enneagram: {
    eyebrow: string;
    title: string;
    intro: string;
    chipPrefix: string;
    wantLabel: string;
    fearLabel: string;
    lookLabel: string;
    growLabel: string;
    types: Enneatype[];
  };
  instincts: { eyebrow: string; title: string; intro: string; cards: KickerCard[] };
  temperaments: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: (KickerCard & { accent: boolean })[];
  };
  bigFive: {
    eyebrow: string;
    title: string;
    intro: string;
    rows: { name: string; width: string; level: string; text: string }[];
    extras: (TitledText & { accent: boolean })[];
  };
  more: {
    enneagram: string;
    instincts: string;
    temperaments: string;
    bigFive: string;
  };
  next: NextPage;
}

export interface Comparison {
  code: string;
  stack: string;
  rows: { label: string; a: string; b: string }[];
  same: string;
  friction: string;
}

export interface ComparacoesContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  comparator: {
    hint: string;
    dimensionLabel: string;
    intjStack: string;
    sameLabel: string;
    frictionLabel: string;
    items: Comparison[];
  };
  identity: {
    eyebrow: string;
    title: string;
    intro: string;
    variants: { kicker: string; title: string; points: string[] }[];
    note: string;
  };
  myths: {
    eyebrow: string;
    title: string;
    mythLabel: string;
    realityLabel: string;
    items: { myth: string; reality: string }[];
  };
  culture: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { title: string; names: string[]; note: string }[];
  };
  next: NextPage;
}

export interface ScoreBand {
  min: number;
  band: string;
  reading: string;
}

export interface LevelSet {
  veryStrong: string;
  strong: string;
  moderate: string;
  weak: string;
  absent: string;
}

export const DEFICIT_SCORED: readonly FnKey[] = ['Se'] as const;

export interface EspelhoContent {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  quiz: {
    notice: RichText;
    answeredTemplate: string;
    resetLabel: string;
    redoLabel: string;
    lockedNote: string;
    disagreeLabel: string;
    agreeLabel: string;
    ratingLabel: string;
    groupLabels: Record<FnKey, string>;
    groupHints: Record<FnKey, string>;
    questions: { fn: FnKey; text: string }[];
  };
  result: {
    eyebrow: string;
    emptyLabel: string;
    scoreNote: string;
    barNote: string;
    bands: ScoreBand[];
    functionNames: Record<FnKey, string>;
    levels: LevelSet;
    inverseLevels: LevelSet;
    footnote: { before: string; linkText: string; after: string };
  };
  closing: { quote: string; ctaHome: string; ctaBeyond: string };
}

export interface Facet<K extends string> {
  title: string;
  hint: string;
  options: Record<K, string>;
}

export interface ProfileContent {
  title: string;
  intro: string;
  openLabel: string;
  closeLabel: string;
  clearLabel: string;
  unsetLabel: string;
  applyLabel: string;
  emptyHint: string;
  identity: Facet<IdentityKey>;
  wing: Facet<WingKey>;
  tritype: Facet<TritypeKey>;
  instinct: Facet<InstinctKey>;
  temperament: Facet<TemperamentPairKey>;
}

export interface DeepSection {
  eyebrow: string;
  title: string;
  paragraphs: RichText[];
  points?: string[];
}

export interface DeepPage {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  intro: RichText;
  caveat: string;
}

export interface EnneatypeDeep {
  name: string;
  centre: CentreKey;
  motto: string;
  asIntj: RichText[];
  engine: string;
  want: string;
  fear: string;
  look: string;
  grow: string;
}

export interface VariantDeep {
  lede: RichText;
  sections: DeepSection[];
  strengths: TitledText[];
  traps: TitledText[];
  stress: RichText;
  growth: TitledText[];
  misread: string;
  versus: string;
  sources: SourceId[];
}

export interface EnneagramDeepContent extends DeepPage {
  centreLabels: Record<CentreKey, string>;
  labels: {
    want: string;
    fear: string;
    look: string;
    grow: string;
    engine: string;
    wings: string;
    asIntj: string;
  };
  types: Record<EnneatypeKey, EnneatypeDeep>;
  wings: Record<WingKey, { name: string; text: string; deep: VariantDeep }>;
  focus: FocusLabels;
}

export interface FocusLabels {
  title: string;
  note: string;
  backLabel: string;
  strengths: string;
  traps: string;
  stress: string;
  growth: string;
  misread: string;
  versus: string;
}

export interface TritypesContent extends DeepPage {
  centreLabels: Record<CentreKey, string>;
  labels: {
    archetype: string;
    asIntj: string;
    centres: string;
    orderNote: string;
    filterAll: string;
    filterMine: string;
  };
  tritypes: Record<TritypeKey, { name: string; text: string; asIntj: string; deep: VariantDeep }>;
  focus: FocusLabels;
}

export interface TemperamentsContent extends DeepPage {
  history: DeepSection;
  labels: { risk: string; atWork: string; asIntj: string; blends: string; singles: string };
  singles: Record<TemperamentKey, { name: string; text: string }>;
  blends: Record<
    TemperamentPairKey,
    {
      name: string;
      summary: string;
      asIntj: RichText[];
      risk: string;
      atWork: string;
      deep: VariantDeep;
    }
  >;
  focus: FocusLabels;
}

export interface InstinctsContent extends DeepPage {
  labels: { asIntj: string; stress: string; grow: string; withType: string };
  focus: FocusLabels;
  instincts: Record<
    InstinctKey,
    {
      code: string;
      name: string;
      text: string;
      asIntj: RichText[];
      stress: string;
      grow: string;
      deep: VariantDeep;
    }
  >;
  withType: Record<EnneatypeKey, Record<InstinctKey, string>>;
}

export interface ModelPageContent extends DeepPage {
  sections: DeepSection[];
  verdict: { title: string; text: string; weight: string };
}

export interface BigFiveDeepContent extends ModelPageContent {
  traits: {
    name: string;
    width: string;
    level: string;
    text: string;
    asIntj: string;
  }[];
}

export interface GeneroContent extends DeepPage {
  premise: DeepSection;
  stats: { value: string; label: string }[];
  sides: Record<
    GenderKey,
    {
      title: string;
      lede: RichText;
      paragraphs: RichText[];
      frictions: TitledText[];
      strengths: string[];
    }
  >;
  shared: DeepSection;
}

export interface ArticlePageContent extends DeepPage {
  sections: DeepSection[];
  closing: { title: string; text: RichText };
}

export interface CompatibilityRule {
  label: string;
  delta: string;
  note: string;
}

export interface CompatibilityEntry {
  stack: string;
  breakdown: { pair: string; sign: '+' | '−' | '·'; note: string }[];
  attracts: string;
  friction: string;
  theyNeed: string;
  youNeed: string;
  failure: string;
}

export interface CompatibilityContent extends DeepPage {
  formula: {
    eyebrow: string;
    title: string;
    intro: RichText;
    rules: CompatibilityRule[];
    disclaimer: string;
  };
  evidence: DeepSection;
  traditions: {
    eyebrow: string;
    title: string;
    intro: RichText;
    items: { name: string; pick: string; claim: string; note: string }[];
    verdict: string;
  };
  axes: {
    combined: { label: string; note: string };
    recognition: { label: string; note: string };
    complement: { label: string; note: string };
    livability: { label: string; note: string };
  };
  labels: {
    index: string;
    stack: string;
    breakdown: string;
    attracts: string;
    friction: string;
    theyNeed: string;
    youNeed: string;
    failure: string;
  };
  types: Record<MbtiType, CompatibilityEntry>;
}

export interface GlossaryEntry {
  term: string;
  system: string;
  short: string;
  long: RichText;
  sources: SourceId[];
}

export interface GlossaryContent extends DeepPage {
  systems: string[];
  allLabel: string;
  entries: GlossaryEntry[];
}

export interface SiteContent {
  shell: ShellContent;
  profile: ProfileContent;
}
