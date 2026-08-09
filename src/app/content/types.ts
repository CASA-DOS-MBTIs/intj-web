/**
 * The shape of the site's copy.
 *
 * Every locale must satisfy `SiteContent`, so a missing or renamed string is a
 * compile error rather than a blank space on the page. Nothing here is
 * language-specific: the Portuguese and English bundles are interchangeable.
 */

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

/** Stable identifier for a page, independent of its URL and its title. */
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
  // Deep pages sitting under Além do MBTI.
  | 'combinacoes'
  | 'eneagrama'
  | 'tritipos'
  | 'temperamentos'
  | 'subtipos'
  | 'big-five'
  | 'socionics'
  | 'disc'
  | 'jung';

/** Router path for each page. Slugs are the same in every language. */
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

/**
 * The same paths under their language prefix, which is what every link in the
 * app actually points at.
 *
 * Language lives in the URL because search engines have no other way to learn
 * that the English text exists: one address per page would mean one prerendered
 * document per page, in one language, and `hreflang` would have no second
 * target to name. Prefixing costs a segment and buys an indexable half of the
 * site.
 *
 * Slugs stay Portuguese in both trees. Translating them would double the route
 * table and break every link shared across the language boundary, and a word in
 * the path is a weak ranking signal next to the title and the prose.
 */
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

/**
 * Strips a leading language segment, so callers that match on a page's identity
 * do not have to care which tree the reader is in.
 */
const LANG_PREFIX = new RegExp(`^/(${LANGS.join('|')})(?=/|$)`);

export function stripLangPrefix(url: string): string {
  const match = LANG_PREFIX.exec(url);
  return match === null ? url : url.slice(match[0].length) || '/';
}

/** The language a URL addresses, or null for the language-neutral entry page. */
export function langFromUrl(url: string): Lang | null {
  const match = LANG_PREFIX.exec(url.split('?')[0].split('#')[0]);
  return match === null ? null : (match[1] as Lang);
}

/** The deep pages, in reading order — drives the Além do MBTI dropdown. */
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

/**
 * A string that may carry inline `<strong>` / `<em>` markup and is rendered
 * with `[innerHTML]`. Angular sanitises it on the way in; keep it to inline
 * emphasis, and never put links here — those need `routerLink`, so model them
 * as separate fields instead.
 */
export type RichText = string;

/** The four cognitive functions, used as keys for the Espelho scoring. */
export type FnKey = 'Ni' | 'Te' | 'Fi' | 'Se';

export const FN_KEYS: readonly FnKey[] = ['Ni', 'Te', 'Fi', 'Se'] as const;

/* -------------------------------------------------------------------------- */
/* Shared fragments                                                            */
/* -------------------------------------------------------------------------- */

/** The masthead every inner page opens with. */
export interface PageHeader {
  /** e.g. "Página 01 — Mente" */
  eyebrow: string;
  /** May contain a single "\n" where the design breaks the line. */
  title: string;
  lede: RichText;
}

/** The full-width card that closes each page. */
export interface NextPage {
  /** e.g. "Próxima página" — or "Última página" on the last one. */
  label: string;
  title: string;
  /** e.g. "02 →" */
  index: string;
  key: PageKey;
}

export interface TitledText {
  title: string;
  text: string;
}

/** A titled block preceded by a small monospaced kicker. */
export interface KickerCard {
  kicker: string;
  title: string;
  text: string;
}

/** A numbered block, e.g. "01 · Visão estratégica". */
export interface NumberedCard {
  n: string;
  title: string;
  text: string;
}

/* -------------------------------------------------------------------------- */
/* Shell                                                                       */
/* -------------------------------------------------------------------------- */

export interface NavLink {
  key: PageKey;
  label: string;
}

/** A grouped dropdown in the header. `key` lets a page find its own group. */
export interface NavMenu {
  key: string;
  label: string;
  items: NavLink[];
}

export interface ShellContent {
  references: {
    title: string;
    /** Why the site labels each work by the kind of authority it carries. */
    note: string;
    kinds: Record<SourceKind, string>;
  };
  nav: {
    brandLabel: string;
    items: NavLink[];
    /** Accessible name for the language switcher. */
    languageLabel: string;
    /** Keyboard shortcut past the nav links. */
    skipToContent: string;
    /** Accessible name for the small-screen menu toggle. */
    menuLabel: string;
    /** Grouped dropdowns — the site outgrew a flat bar at about twelve pages. */
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
    /** The community band, carried on every page so it is not something only a
        reader who reaches the contact page ever discovers. */
    community: { kicker: string; text: string; cta: string };
    /**
     * Trademark attribution.
     *
     * Naming a mark to talk about the thing it names is ordinary descriptive
     * use, and there is no way to write about the MBTI without writing "MBTI".
     * What descriptive use does not survive is the appearance of endorsement,
     * so the site says outright that there is none.
     */
    trademarks: string;
    /** Fine-print links that belong with the trademark line rather than with
        the content columns. */
    legal: NavLink[];
  };
  /**
   * The language door at `/` and the not-found page. Both are chrome rather
   * than articles, so their copy lives here instead of in a page bundle.
   */
  entry: {
    meta: PageMeta;
    /** Shown in this language's own words, beside its own link. */
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

/** What goes in `<title>` and the description meta tag for one page. */
export interface PageMeta {
  title: string;
  description: string;
}

/** Each language's name in itself — never translated, so not part of a bundle. */
export const LANG_NAME: Record<Lang, string> = { pt: 'Português', en: 'English' };

/* -------------------------------------------------------------------------- */
/* Privacy                                                                     */
/* -------------------------------------------------------------------------- */

export interface PrivacyContent {
  meta: PageMeta;
  header: PageHeader;
  /** The short answer, before any of the detail. */
  summary: RichText;
  sections: { title: string; body: RichText[] }[];
  /** What the browser keeps locally, item by item. */
  storage: {
    title: string;
    intro: RichText;
    items: { key: string; what: string; why: string }[];
    note: string;
  };
  contact: { title: string; text: RichText };
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export interface ContactContent {
  meta: PageMeta;
  header: PageHeader;
  /** Above the address itself. */
  emailKicker: string;
  emailNote: string;
  /** One card per reason someone might write: a correction, help, support. */
  reasons: { kicker: string; title: string; text: RichText }[];
  author: {
    kicker: string;
    title: string;
    text: RichText;
    linkLabel: string;
  };
  /** The MBTI community the site sits alongside. */
  community: {
    kicker: string;
    title: string;
    text: RichText;
    linkLabel: string;
  };
  closing: string;
}

/* -------------------------------------------------------------------------- */
/* Home                                                                        */
/* -------------------------------------------------------------------------- */

export interface HomeContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
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
    /** e.g. "I · INTROVERSÃO" */
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
      /** e.g. "01 · MENTE" */
      kicker: string;
      title: string;
      text: string;
    }[];
  };
  quote: { eyebrow: string; quote: string; text: string };
  disclaimer: { eyebrow: string; title: string; paragraphs: string[] };
}

/* -------------------------------------------------------------------------- */
/* Mente                                                                       */
/* -------------------------------------------------------------------------- */

export interface CognitiveFunction {
  abbr: string;
  name: string;
  /** Dominant / auxiliary / tertiary / inferior. */
  pos: string;
  age: string;
  /** CSS width for the strength meter, e.g. "96%". */
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
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Luz e sombra                                                                */
/* -------------------------------------------------------------------------- */

export interface LuzESombraContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Trabalho                                                                    */
/* -------------------------------------------------------------------------- */

export interface TrabalhoContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Vínculos                                                                    */
/* -------------------------------------------------------------------------- */

export interface VinculosContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Jornada                                                                     */
/* -------------------------------------------------------------------------- */

export interface Phase {
  /** e.g. "20–30" */
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
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Além do MBTI                                                                */
/* -------------------------------------------------------------------------- */

export interface Enneatype {
  /** e.g. "5w4" */
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
  /** Works cited anywhere on this page, rendered by <app-references>. */
  sources: SourceId[];
  header: PageHeader;
  enneagram: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Prefix shown on each selector chip, e.g. "INTJ". */
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
  /**
   * Each summary section closes with a link to the page that carries it in
   * full. This page is a map, not a destination: it shows the shape of each
   * system and hands off.
   *
   * Worded separately per section rather than four identical "read more" links,
   * which is a page read out loud as "link, link, link, link".
   */
  more: {
    enneagram: string;
    instincts: string;
    temperaments: string;
    bigFive: string;
  };
  next: NextPage;
}

/* -------------------------------------------------------------------------- */
/* Comparações                                                                 */
/* -------------------------------------------------------------------------- */

export interface Comparison {
  code: string;
  stack: string;
  rows: { label: string; a: string; b: string }[];
  same: string;
  friction: string;
}

export interface ComparacoesContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
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

/* -------------------------------------------------------------------------- */
/* Espelho                                                                     */
/* -------------------------------------------------------------------------- */

/** A scoring band, selected by the highest `min` the score reaches. */
export interface ScoreBand {
  min: number;
  band: string;
  reading: string;
}

/** Wording for the five bands of a single function bar. */
export interface LevelSet {
  veryStrong: string;
  strong: string;
  moderate: string;
  weak: string;
  absent: string;
}

/**
 * Functions whose statements describe a *deficit* rather than a capability.
 *
 * Every Se item on the quiz asks about missing something — hunger noticed late,
 * discomfort with improvisation, sensory excess under stress. Agreeing hard
 * means a larger blind spot, so a full Se bar must never be labelled "very
 * strong Extraverted Sensing": that is the opposite of what the answers said.
 */
export const DEFICIT_SCORED: readonly FnKey[] = ['Se'] as const;

export interface EspelhoContent {
  meta: { title: string; description: string };
  /** Works cited anywhere on this page, rendered by <app-references>. */
  sources: SourceId[];
  header: PageHeader;
  quiz: {
    /**
     * What this questionnaire is not, said before the first statement.
     *
     * The page already says it will not tell you your type. This says the other
     * half: psychological assessment is a regulated act in Brazil, performed by
     * registered psychologists with instruments approved for it, and a
     * thirty-two-item questionnaire on a website is not one of those. Stating
     * the line is what keeps the page on the right side of it.
     */
    notice: RichText;
    /** Contains "{n}" and "{total}". */
    answeredTemplate: string;
    resetLabel: string;
    /** Reopens a completed questionnaire for editing. */
    redoLabel: string;
    /** Explains that the quiz closed because every statement was answered. */
    lockedNote: string;
    disagreeLabel: string;
    agreeLabel: string;
    /** Accessible name for one rating button; contains "{n}". */
    ratingLabel: string;
    /** Heading above each function's block of statements. */
    groupLabels: Record<FnKey, string>;
    /** Sub-heading explaining what that block is probing. */
    groupHints: Record<FnKey, string>;
    questions: { fn: FnKey; text: string }[];
  };
  result: {
    eyebrow: string;
    emptyLabel: string;
    /** Warns that the cut-points sit inside measurement error. */
    scoreNote: string;
    /** Warns how few items each bar rests on. */
    barNote: string;
    bands: ScoreBand[];
    functionNames: Record<FnKey, string>;
    /** Wording for functions scored as capabilities. */
    levels: LevelSet;
    /** Wording for functions in DEFICIT_SCORED, where a full bar is a blind spot. */
    inverseLevels: LevelSet;
    /** Split around the inline link so it can use routerLink. */
    footnote: { before: string; linkText: string; after: string };
  };
  closing: { quote: string; ctaHome: string; ctaBeyond: string };
}

/* -------------------------------------------------------------------------- */
/* Profile lens                                                                */
/* -------------------------------------------------------------------------- */

/** One selectable facet of the reader's own variant of the type. */
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
  /** Shown on a lens control while the relevant facet is still unset. */
  unsetLabel: string;
  /** Prompt above an inline lens selector, e.g. "Aplicar ao meu perfil". */
  applyLabel: string;
  /** Shown where variant-specific copy would go but the reader has chosen nothing. */
  emptyHint: string;
  identity: Facet<IdentityKey>;
  wing: Facet<WingKey>;
  tritype: Facet<TritypeKey>;
  instinct: Facet<InstinctKey>;
  temperament: Facet<TemperamentPairKey>;
}

/* -------------------------------------------------------------------------- */
/* Deep pages — the unabridged material behind the Além do MBTI overview       */
/* -------------------------------------------------------------------------- */

/** A titled block of prose, optionally with a list under it. */
export interface DeepSection {
  eyebrow: string;
  title: string;
  paragraphs: RichText[];
  points?: string[];
}

/** Fields every deep page carries. */
export interface DeepPage {
  meta: { title: string; description: string };
  sources: SourceId[];
  header: PageHeader;
  intro: RichText;
  /** What this model can and cannot claim — stated before the detail, not after. */
  caveat: string;
}

export interface EnneatypeDeep {
  name: string;
  centre: CentreKey;
  motto: string;
  /** How this motivation actually looks running on a Ni–Te engine. */
  asIntj: RichText[];
  /** One line on what the type does to the engine itself. */
  engine: string;
  want: string;
  fear: string;
  look: string;
  grow: string;
}

/**
 * The unabridged analysis of one variant, shown only once the reader has named
 * that variant as theirs.
 *
 * The general view of a page describes all the options at a readable depth. The
 * moment someone says "this one is me", breadth stops being useful and depth
 * starts — so the page drops the other options entirely and renders this
 * instead. One shape serves wings, tritypes, temperament blends and instincts,
 * which keeps a single renderer for all four.
 */
export interface VariantDeep {
  lede: RichText;
  sections: DeepSection[];
  strengths: TitledText[];
  traps: TitledText[];
  /** What this specific variant does when it comes apart. */
  stress: RichText;
  growth: TitledText[];
  /** What people habitually mistake this variant for. */
  misread: string;
  /** How it differs from the variant next to it, which is the usual confusion. */
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
  /** Copy for the focused view, shared by every page that has one. */
  focus: FocusLabels;
}

/** Chrome around a focused analysis — the same on every page that offers one. */
export interface FocusLabels {
  /** e.g. "Análise completa do seu perfil" */
  title: string;
  /** Explains that the page has narrowed to them and how to widen it again. */
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
    /** Explains that a person's own tritype is written core-type first. */
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
  /** The 27 subtypes: what each instinct does to each enneatype, in an INTJ. */
  withType: Record<EnneatypeKey, Record<InstinctKey, string>>;
}

/** Shape shared by the single-model pages: Socionics, DISC, Jung. */
export interface ModelPageContent extends DeepPage {
  sections: DeepSection[];
  verdict: { title: string; text: string; weight: string };
}

export interface BigFiveDeepContent extends ModelPageContent {
  traits: {
    name: string;
    /** Bar width. Direction, never a measured percentile. */
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

/**
 * A long-form page that is just prose: intro, caveat, sections, closing card.
 * Shared by friendship, family, childhood, health, the "if you love an INTJ"
 * page and the combinations argument — they differ in copy, not in shape.
 */
export interface ArticlePageContent extends DeepPage {
  sections: DeepSection[];
  closing: { title: string; text: RichText };
}

/* -------------------------------------------------------------------------- */
/* Compatibility                                                               */
/* -------------------------------------------------------------------------- */

/** One line of the published scoring rule. */
export interface CompatibilityRule {
  label: string;
  /** e.g. "+12", "−8", "0" — printed verbatim. */
  delta: string;
  note: string;
}

export interface CompatibilityEntry {
  stack: string;
  /**
   * Two axes rather than one ranking.
   *
   * A single similarity index rewards sameness — its top result is a mirror,
   * which is not what anyone means by compatibility, and is the opposite of
   * what the research on similarity and satisfaction supports. Splitting it
   * makes "you would be marrying a mirror" a visible corner of the map instead
   * of first place, and gives each axis a reachable maximum.
   */
  /**
   * Why each function pair lands where it does — the part a figure cannot say.
   *
   * Deliberately carries no arithmetic. The figures used to be written in here
   * by hand, a hundred and sixty times, and the first time the rule moved every
   * one of those sentences became a false statement without anything failing.
   * They are computed now, in content/compatibility-model.ts, and rendered
   * beside this prose.
   */
  breakdown: { pair: string; sign: '+' | '−' | '·'; note: string }[];
  attracts: string;
  friction: string;
  theyNeed: string;
  youNeed: string;
  failure: string;
}

export interface CompatibilityContent extends DeepPage {
  /** The rule, printed so a reader can check the arithmetic themselves. */
  formula: {
    eyebrow: string;
    title: string;
    intro: RichText;
    rules: CompatibilityRule[];
    disclaimer: string;
  };
  /** What the research actually says about matching — the honest headline. */
  evidence: DeepSection;
  /**
   * The rival traditions that each name a different "ideal" partner for the
   * INTJ. They disagree with each other, and showing that is worth more than
   * any single number: Keirsey pairs NT with NF, socionics gives the INTJ's
   * analogue a sensing dual, and the community consensus is a third answer.
   */
  traditions: {
    eyebrow: string;
    title: string;
    intro: RichText;
    items: { name: string; pick: string; claim: string; note: string }[];
    verdict: string;
  };
  axes: {
    /** The three folded into one, which is the order the list opens in. */
    combined: { label: string; note: string };
    recognition: { label: string; note: string };
    complement: { label: string; note: string };
    /** What daily life costs — the axis the first two could not see. */
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

/* -------------------------------------------------------------------------- */
/* Glossary                                                                    */
/* -------------------------------------------------------------------------- */

export interface GlossaryEntry {
  term: string;
  /** Which system the term belongs to — the thing readers most often confuse. */
  system: string;
  short: string;
  long: RichText;
  sources: SourceId[];
}

export interface GlossaryContent extends DeepPage {
  /** Filter chips, keyed by the `system` values used above. */
  systems: string[];
  allLabel: string;
  entries: GlossaryEntry[];
}

/* -------------------------------------------------------------------------- */
/* Bundle                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Only genuinely site-wide copy lives here.
 *
 * Page copy is deliberately *not* in this object. Each page imports its own two
 * locale bundles through `usePageContent`, which is what lets the bundler put a
 * page's prose in that page's lazy chunk. Collecting all nineteen pages here
 * made every route eager in practice — the components split, the copy did not,
 * and the initial download was roughly five times what it needed to be.
 */
export interface SiteContent {
  shell: ShellContent;
  profile: ProfileContent;
}
