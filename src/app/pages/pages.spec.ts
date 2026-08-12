import { type Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../core/language.service';
import { ProfileService } from '../core/profile.service';
import { LANGS, PAGE_PATH, type Lang } from '../content/types';
import { SOURCE_IDS } from '../content/sources';
import {
  INSTINCT_KEYS,
  MBTI_TYPES,
  TEMPERAMENT_PAIR_KEYS,
  TRITYPE_KEYS,
  WING_KEYS,
} from '../content/profile-keys';
import { facetsForUrl } from '../content/profile-scope';
import { axesFor, rankedPairings } from '../content/compatibility-model';
import { PRIVACIDADE_EN } from '../content/en/privacidade';
import { PRIVACIDADE_PT } from '../content/pt/privacidade';
import { Privacidade } from './privacidade/privacidade';

import { ALEM_DO_MBTI_EN } from '../content/en/alem-do-mbti';
import { ALEM_DO_MBTI_PT } from '../content/pt/alem-do-mbti';
import { AMIZADES_EN } from '../content/en/amizades';
import { AMIZADES_PT } from '../content/pt/amizades';
import { COMBINACOES_EN } from '../content/en/combinacoes';
import { COMBINACOES_PT } from '../content/pt/combinacoes';
import { COMPATIBILIDADE_EN } from '../content/en/compatibilidade';
import { COMPATIBILIDADE_PT } from '../content/pt/compatibilidade';
import { FAMILIA_EN } from '../content/en/familia';
import { FAMILIA_PT } from '../content/pt/familia';
import { GLOSSARIO_EN } from '../content/en/glossario';
import { GLOSSARIO_PT } from '../content/pt/glossario';
import { INFANCIA_EN } from '../content/en/infancia';
import { INFANCIA_PT } from '../content/pt/infancia';
import { O_QUE_NINGUEM_DIZ_EN } from '../content/en/o-que-ninguem-diz';
import { O_QUE_NINGUEM_DIZ_PT } from '../content/pt/o-que-ninguem-diz';
import { PARA_QUEM_AMA_EN } from '../content/en/para-quem-ama';
import { PARA_QUEM_AMA_PT } from '../content/pt/para-quem-ama';
import { SAUDE_EN } from '../content/en/saude';
import { SAUDE_PT } from '../content/pt/saude';
import { BIG_FIVE_EN } from '../content/en/big-five';
import { BIG_FIVE_PT } from '../content/pt/big-five';
import { COMPARACOES_EN } from '../content/en/comparacoes';
import { COMPARACOES_PT } from '../content/pt/comparacoes';
import { DISC_EN } from '../content/en/disc';
import { DISC_PT } from '../content/pt/disc';
import { ENEAGRAMA_EN } from '../content/en/eneagrama';
import { ENEAGRAMA_PT } from '../content/pt/eneagrama';
import { ESPELHO_EN } from '../content/en/espelho';
import { ESPELHO_PT } from '../content/pt/espelho';
import { GENERO_EN } from '../content/en/genero';
import { GENERO_PT } from '../content/pt/genero';
import { HOME_EN } from '../content/en/home';
import { HOME_PT } from '../content/pt/home';
import { JORNADA_EN } from '../content/en/jornada';
import { JORNADA_PT } from '../content/pt/jornada';
import { JUNG_EN } from '../content/en/jung';
import { JUNG_PT } from '../content/pt/jung';
import { LUZ_E_SOMBRA_EN } from '../content/en/luz-e-sombra';
import { LUZ_E_SOMBRA_PT } from '../content/pt/luz-e-sombra';
import { MENTE_EN } from '../content/en/mente';
import { MENTE_PT } from '../content/pt/mente';
import { SOCIONICS_EN } from '../content/en/socionics';
import { SOCIONICS_PT } from '../content/pt/socionics';
import { SUBTIPOS_EN } from '../content/en/subtipos';
import { SUBTIPOS_PT } from '../content/pt/subtipos';
import { TEMPERAMENTOS_EN } from '../content/en/temperamentos';
import { TEMPERAMENTOS_PT } from '../content/pt/temperamentos';
import { TRABALHO_EN } from '../content/en/trabalho';
import { TRABALHO_PT } from '../content/pt/trabalho';
import { TRITIPOS_EN } from '../content/en/tritipos';
import { TRITIPOS_PT } from '../content/pt/tritipos';
import { VINCULOS_EN } from '../content/en/vinculos';
import { VINCULOS_PT } from '../content/pt/vinculos';

import { AlemDoMbti } from './alem-do-mbti/alem-do-mbti';
import { Amizades } from './amizades/amizades';
import { BigFive } from './big-five/big-five';
import { Combinacoes } from './combinacoes/combinacoes';
import { Compatibilidade } from './compatibilidade/compatibilidade';
import { Familia } from './familia/familia';
import { Glossario } from './glossario/glossario';
import { Infancia } from './infancia/infancia';
import { OQueNinguemDiz } from './o-que-ninguem-diz/o-que-ninguem-diz';
import { ParaQuemAma } from './para-quem-ama/para-quem-ama';
import { Saude } from './saude/saude';
import { Comparacoes } from './comparacoes/comparacoes';
import { Disc } from './disc/disc';
import { Eneagrama } from './eneagrama/eneagrama';
import { Espelho } from './espelho/espelho';
import { Genero } from './genero/genero';
import { Home } from './home/home';
import { Jornada } from './jornada/jornada';
import { Jung } from './jung/jung';
import { LuzESombra } from './luz-e-sombra/luz-e-sombra';
import { Mente } from './mente/mente';
import { Socionics } from './socionics/socionics';
import { Subtipos } from './subtipos/subtipos';
import { Temperamentos } from './temperamentos/temperamentos';
import { Trabalho } from './trabalho/trabalho';
import { Tritipos } from './tritipos/tritipos';
import { Vinculos } from './vinculos/vinculos';

const PAGES: { name: string; type: Type<unknown>; markers: Record<Lang, string> }[] = [
  {
    name: 'home',
    type: Home,
    markers: { pt: HOME_PT.hero.subtitle, en: HOME_EN.hero.subtitle },
  },
  {
    name: 'mente',
    type: Mente,
    markers: { pt: MENTE_PT.header.eyebrow, en: MENTE_EN.header.eyebrow },
  },
  {
    name: 'luz-e-sombra',
    type: LuzESombra,
    markers: { pt: LUZ_E_SOMBRA_PT.header.eyebrow, en: LUZ_E_SOMBRA_EN.header.eyebrow },
  },
  {
    name: 'trabalho',
    type: Trabalho,
    markers: { pt: TRABALHO_PT.header.eyebrow, en: TRABALHO_EN.header.eyebrow },
  },
  {
    name: 'vinculos',
    type: Vinculos,
    markers: { pt: VINCULOS_PT.header.eyebrow, en: VINCULOS_EN.header.eyebrow },
  },
  {
    name: 'jornada',
    type: Jornada,
    markers: { pt: JORNADA_PT.header.eyebrow, en: JORNADA_EN.header.eyebrow },
  },
  {
    name: 'alem-do-mbti',
    type: AlemDoMbti,
    markers: { pt: ALEM_DO_MBTI_PT.header.eyebrow, en: ALEM_DO_MBTI_EN.header.eyebrow },
  },
  {
    name: 'comparacoes',
    type: Comparacoes,
    markers: { pt: COMPARACOES_PT.header.eyebrow, en: COMPARACOES_EN.header.eyebrow },
  },
  {
    name: 'espelho',
    type: Espelho,
    markers: { pt: ESPELHO_PT.header.eyebrow, en: ESPELHO_EN.header.eyebrow },
  },
  {
    name: 'privacidade',
    type: Privacidade,
    markers: { pt: PRIVACIDADE_PT.header.eyebrow, en: PRIVACIDADE_EN.header.eyebrow },
  },
  {
    name: 'genero',
    type: Genero,
    markers: { pt: GENERO_PT.header.eyebrow, en: GENERO_EN.header.eyebrow },
  },
  {
    name: 'eneagrama',
    type: Eneagrama,
    markers: { pt: ENEAGRAMA_PT.header.eyebrow, en: ENEAGRAMA_EN.header.eyebrow },
  },
  {
    name: 'tritipos',
    type: Tritipos,
    markers: { pt: TRITIPOS_PT.header.eyebrow, en: TRITIPOS_EN.header.eyebrow },
  },
  {
    name: 'temperamentos',
    type: Temperamentos,
    markers: { pt: TEMPERAMENTOS_PT.header.eyebrow, en: TEMPERAMENTOS_EN.header.eyebrow },
  },
  {
    name: 'subtipos',
    type: Subtipos,
    markers: { pt: SUBTIPOS_PT.header.eyebrow, en: SUBTIPOS_EN.header.eyebrow },
  },
  {
    name: 'big-five',
    type: BigFive,
    markers: { pt: BIG_FIVE_PT.header.eyebrow, en: BIG_FIVE_EN.header.eyebrow },
  },
  {
    name: 'socionics',
    type: Socionics,
    markers: { pt: SOCIONICS_PT.header.eyebrow, en: SOCIONICS_EN.header.eyebrow },
  },
  {
    name: 'disc',
    type: Disc,
    markers: { pt: DISC_PT.header.eyebrow, en: DISC_EN.header.eyebrow },
  },
  {
    name: 'jung',
    type: Jung,
    markers: { pt: JUNG_PT.header.eyebrow, en: JUNG_EN.header.eyebrow },
  },
  {
    name: 'combinacoes',
    type: Combinacoes,
    markers: { pt: COMBINACOES_PT.header.eyebrow, en: COMBINACOES_EN.header.eyebrow },
  },
  {
    name: 'compatibilidade',
    type: Compatibilidade,
    markers: { pt: COMPATIBILIDADE_PT.header.eyebrow, en: COMPATIBILIDADE_EN.header.eyebrow },
  },
  {
    name: 'amizades',
    type: Amizades,
    markers: { pt: AMIZADES_PT.header.eyebrow, en: AMIZADES_EN.header.eyebrow },
  },
  {
    name: 'familia',
    type: Familia,
    markers: { pt: FAMILIA_PT.header.eyebrow, en: FAMILIA_EN.header.eyebrow },
  },
  {
    name: 'infancia',
    type: Infancia,
    markers: { pt: INFANCIA_PT.header.eyebrow, en: INFANCIA_EN.header.eyebrow },
  },
  {
    name: 'saude',
    type: Saude,
    markers: { pt: SAUDE_PT.header.eyebrow, en: SAUDE_EN.header.eyebrow },
  },
  {
    name: 'glossario',
    type: Glossario,
    markers: { pt: GLOSSARIO_PT.header.eyebrow, en: GLOSSARIO_EN.header.eyebrow },
  },
  {
    name: 'para-quem-ama',
    type: ParaQuemAma,
    markers: { pt: PARA_QUEM_AMA_PT.header.eyebrow, en: PARA_QUEM_AMA_EN.header.eyebrow },
  },
  {
    name: 'o-que-ninguem-diz',
    type: OQueNinguemDiz,
    markers: { pt: O_QUE_NINGUEM_DIZ_PT.header.eyebrow, en: O_QUE_NINGUEM_DIZ_EN.header.eyebrow },
  },
];

function setup(lang: Lang = 'pt'): void {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  TestBed.inject(LanguageService).set(lang);
}

async function render(type: Type<unknown>): Promise<string> {
  const fixture = TestBed.createComponent(type);
  await fixture.whenStable();
  return (fixture.nativeElement as HTMLElement).textContent ?? '';
}

describe('pages', () => {
  beforeEach(() => localStorage.clear());

  for (const lang of LANGS) {
    describe(`in ${lang}`, () => {
      for (const page of PAGES) {
        it(`renders ${page.name}`, async () => {
          setup(lang);

          const text = await render(page.type);

          expect(text).toContain(page.markers[lang]);
        });
      }
    });
  }

  it('gives every page a bibliography', () => {
    const bundles = [
      HOME_PT,
      MENTE_PT,
      LUZ_E_SOMBRA_PT,
      TRABALHO_PT,
      VINCULOS_PT,
      JORNADA_PT,
      ALEM_DO_MBTI_PT,
      COMPARACOES_PT,
      ESPELHO_PT,
      GENERO_PT,
      ENEAGRAMA_PT,
      TRITIPOS_PT,
      TEMPERAMENTOS_PT,
      SUBTIPOS_PT,
      BIG_FIVE_PT,
      SOCIONICS_PT,
      DISC_PT,
      JUNG_PT,
      COMBINACOES_PT,
      COMPATIBILIDADE_PT,
      AMIZADES_PT,
      FAMILIA_PT,
      INFANCIA_PT,
      SAUDE_PT,
      GLOSSARIO_PT,
      PARA_QUEM_AMA_PT,
      O_QUE_NINGUEM_DIZ_PT,
    ];

    for (const bundle of bundles) {
      expect(bundle.sources.length).toBeGreaterThan(0);
    }
  });

  it('cites only works that exist in the registry', () => {
    const known = new Set<string>(SOURCE_IDS);
    const bundles = [
      HOME_PT,
      MENTE_PT,
      LUZ_E_SOMBRA_PT,
      COMPATIBILIDADE_PT,
      COMBINACOES_PT,
      SAUDE_PT,
      GLOSSARIO_PT,
      GENERO_PT,
    ];

    for (const bundle of bundles) {
      for (const id of bundle.sources) {
        expect(known.has(id)).toBe(true);
      }
    }
  });
});

describe('focused analysis', () => {
  const CASES = [
    { name: 'wings', keys: WING_KEYS, get: (k: string) => ENEAGRAMA_PT.wings[k as never] },
    { name: 'tritypes', keys: TRITYPE_KEYS, get: (k: string) => TRITIPOS_PT.tritypes[k as never] },
    {
      name: 'temperament blends',
      keys: TEMPERAMENT_PAIR_KEYS,
      get: (k: string) => TEMPERAMENTOS_PT.blends[k as never],
    },
    {
      name: 'instincts',
      keys: INSTINCT_KEYS,
      get: (k: string) => SUBTIPOS_PT.instincts[k as never],
    },
  ];

  for (const group of CASES) {
    it(`gives all ${group.keys.length} ${group.name} a deep analysis`, () => {
      for (const key of group.keys) {
        const entry = group.get(key) as { deep?: { sections?: unknown[]; sources?: unknown[] } };
        expect(entry).toBeDefined();
        expect(entry.deep).toBeDefined();
        expect(entry.deep?.sections?.length ?? 0).toBeGreaterThan(0);
        expect(entry.deep?.sources?.length ?? 0).toBeGreaterThan(0);
      }
    });
  }

  it('goes deeper than the general view it replaces', () => {
    for (const key of WING_KEYS) {
      const wing = ENEAGRAMA_PT.wings[key];
      const deepLength = wing.deep.sections.flatMap((s) => s.paragraphs).join(' ').length;
      expect(deepLength).toBeGreaterThan(wing.text.length * 3);
    }
  });

  it('labels the focused view on every page that has one', () => {
    for (const focus of [
      ENEAGRAMA_PT.focus,
      TRITIPOS_PT.focus,
      TEMPERAMENTOS_PT.focus,
      SUBTIPOS_PT.focus,
    ]) {
      expect(focus.title.length).toBeGreaterThan(0);
      expect(focus.backLabel.length).toBeGreaterThan(0);
      expect(focus.note.length).toBeGreaterThan(0);
    }
  });
});

describe('profile scope', () => {
  it('offers the profile only on pages that read it', () => {
    expect(facetsForUrl(PAGE_PATH['eneagrama'])).toContain('wing');
    expect(facetsForUrl(PAGE_PATH['temperamentos'])).toContain('temperament');

    expect(facetsForUrl(PAGE_PATH['genero'])).toHaveLength(0);
    expect(facetsForUrl(PAGE_PATH['home'])).toHaveLength(0);
    expect(facetsForUrl(PAGE_PATH['saude'])).toHaveLength(0);
  });

  it('does not let the overview path swallow its own children', () => {
    expect(facetsForUrl(PAGE_PATH['alem-do-mbti'])).toHaveLength(0);
    expect(facetsForUrl(PAGE_PATH['tritipos'])).toContain('tritype');
  });

  it('ignores query strings and trailing slashes', () => {
    expect(facetsForUrl('/alem-do-mbti/eneagrama?from=nav')).toContain('wing');
    expect(facetsForUrl('/alem-do-mbti/eneagrama/')).toContain('wing');
  });
});

describe('compatibility index', () => {
  it('covers all sixteen types, INTJ included', () => {
    expect(Object.keys(COMPATIBILIDADE_PT.types).sort()).toEqual([...MBTI_TYPES].sort());
  });

  it('keeps all three axes inside the published scale', () => {
    for (const code of MBTI_TYPES) {
      const axes = axesFor(code);
      for (const value of [axes.recognition, axes.complement, axes.livability]) {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(100);
      }
      expect(COMPATIBILIDADE_PT.types[code].breakdown.length).toBeGreaterThan(0);
    }
  });

  it('carries no arithmetic in the prose, which is what let it drift', () => {
    for (const bundle of [COMPATIBILIDADE_PT, COMPATIBILIDADE_EN]) {
      for (const entry of Object.values(bundle.types)) {
        for (const line of entry.breakdown) {
          expect(line.note).not.toMatch(/\d/);
        }
      }
    }
  });

  it('puts the mirror at the top of recognition and nowhere near the top overall', () => {
    const ranked = rankedPairings();
    const byRecognition = [...ranked].sort((a, b) => b.axes.recognition - a.axes.recognition);

    expect(byRecognition[0].code).toBe('INTJ');
    expect(axesFor('INTJ').complement).toBeLessThan(20);
    expect(axesFor('INTJ').livability).toBe(100);
    expect(ranked.findIndex((row) => row.code === 'INTJ')).toBeGreaterThan(4);
  });

  it('no longer scores any type as unrecognisable', () => {
    for (const code of MBTI_TYPES) {
      expect(axesFor(code).recognition).toBeGreaterThan(0);
    }
    expect(axesFor('INTP').recognition).not.toBe(axesFor('ESFJ').recognition);
  });

  it('does not put the reader’s opposite on all four letters near the top', () => {
    const ranked = rankedPairings();

    expect(axesFor('ESFP').livability).toBe(0);
    expect(ranked.findIndex((row) => row.code === 'ESFP')).toBeGreaterThan(9);
  });

  it('names more than one tradition, because they disagree', () => {
    expect(COMPATIBILIDADE_PT.traditions.items.length).toBeGreaterThanOrEqual(3);
    const picks = new Set(COMPATIBILIDADE_PT.traditions.items.map((i) => i.pick));
    expect(picks.size).toBeGreaterThan(1);
  });

  it('publishes the rule that produced the scores', () => {
    expect(COMPATIBILIDADE_PT.formula.rules.length).toBeGreaterThan(0);
    expect(COMPATIBILIDADE_PT.formula.disclaimer.length).toBeGreaterThan(0);
  });
});

describe('Espelho', () => {
  const TOTAL = ESPELHO_PT.quiz.questions.length;

  beforeEach(() => localStorage.clear());

  it('offers eight statements for each cognitive function', () => {
    for (const fn of ['Ni', 'Te', 'Fi', 'Se'] as const) {
      expect(ESPELHO_PT.quiz.questions.filter((q) => q.fn === fn).length).toBe(8);
      expect(ESPELHO_EN.quiz.questions.filter((q) => q.fn === fn).length).toBe(8);
    }
  });

  it('shows no reading until every statement is answered', async () => {
    setup();

    const text = await render(Espelho);

    expect(text).toContain(ESPELHO_PT.result.emptyLabel);
  });

  it('closes the questionnaire and scores it once complete', async () => {
    localStorage.setItem('intj-espelho-v2', JSON.stringify(Array<number>(TOTAL).fill(5)));
    setup();

    const text = await render(Espelho);

    expect(text).toContain('100%');
    expect(text).toContain(ESPELHO_PT.result.bands[0].band);
    expect(text).toContain(ESPELHO_PT.quiz.lockedNote);
    expect(text).not.toContain(ESPELHO_PT.result.emptyLabel);
  });

  it('labels a full Se bar as a blind spot, never as a strong function', async () => {
    localStorage.setItem('intj-espelho-v2', JSON.stringify(Array<number>(TOTAL).fill(5)));
    setup();

    const text = await render(Espelho);

    expect(text).toContain(ESPELHO_PT.result.inverseLevels.veryStrong);
    expect(ESPELHO_PT.result.inverseLevels.veryStrong).not.toBe(
      ESPELHO_PT.result.levels.veryStrong,
    );
  });

  it('discards a stored run whose length no longer matches the quiz', async () => {
    localStorage.setItem('intj-espelho-v2', JSON.stringify(Array<number>(12).fill(5)));
    setup();

    const text = await render(Espelho);

    expect(text).toContain(ESPELHO_PT.result.emptyLabel);
  });
});

describe('ProfileService', () => {
  beforeEach(() => localStorage.clear());

  it('starts empty', () => {
    setup();
    const profiles = TestBed.inject(ProfileService);

    expect(profiles.hasAny()).toBe(false);
    expect(profiles.enneatype()).toBeNull();
  });

  it('derives the core enneatype from the chosen wing', () => {
    setup();
    const profiles = TestBed.inject(ProfileService);

    profiles.set('wing', '3w4');

    expect(profiles.enneatype()).toBe('3');
    expect(profiles.filledCount()).toBe(1);
  });

  it('treats setting the current value again as clearing it', () => {
    setup();
    const profiles = TestBed.inject(ProfileService);

    profiles.set('instinct', 'sp');
    profiles.set('instinct', 'sp');

    expect(profiles.profile().instinct).toBeNull();
  });

  it('survives a stored profile written by an older version', () => {
    localStorage.setItem(
      'intj-profile',
      JSON.stringify({ wing: '3w4', tritype: 'not-a-tritype', extinct: 'x' }),
    );
    setup();

    const profiles = TestBed.inject(ProfileService);

    expect(profiles.profile().wing).toBe('3w4');
    expect(profiles.profile().tritype).toBeNull();
  });
});

describe('Compatibility ranking', () => {
  beforeEach(() => localStorage.clear());

  async function rankedCodes(): Promise<string[]> {
    setup();
    const fixture = TestBed.createComponent(Compatibilidade);
    await fixture.whenStable();

    return Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.rank__code'),
      (node) => node.textContent?.trim() ?? '',
    );
  }

  it('keeps the mirror out of the top of the combined ranking', async () => {
    const codes = await rankedCodes();

    expect(codes.slice(0, 5)).not.toContain('INTJ');
    expect(codes.indexOf('INTJ')).toBeGreaterThan(4);
  });

  it('opens on the highest-scoring pairing rather than a hardcoded one', async () => {
    setup();
    const fixture = TestBed.createComponent(Compatibilidade);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const first = element.querySelector('.rank__code')?.textContent?.trim();

    expect(first).toBeTruthy();
    expect(element.querySelector('.detail__title')?.textContent).toContain(first!);
    expect(element.querySelector('.rank.is-on .rank__code')?.textContent?.trim()).toBe(first);
  });

  it('scores every pairing above zero', () => {
    for (const { combined } of rankedPairings()) {
      expect(combined).toBeGreaterThan(0);
    }
  });
});

describe('Espelho, restarting', () => {
  const TOTAL = ESPELHO_PT.quiz.questions.length;

  beforeEach(() => localStorage.clear());

  it('clears the run when the reader asks to redo it', async () => {
    localStorage.setItem('intj-espelho-v2', JSON.stringify(Array<number>(TOTAL).fill(5)));
    setup();

    const fixture = TestBed.createComponent(Espelho);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain(ESPELHO_PT.quiz.lockedNote);

    element.querySelector<HTMLButtonElement>('.quiz__closed .btn')?.click();
    await fixture.whenStable();

    expect(element.textContent).not.toContain(ESPELHO_PT.quiz.lockedNote);
    expect(element.textContent).toContain(ESPELHO_PT.result.emptyLabel);
    expect(JSON.parse(localStorage.getItem('intj-espelho-v2') ?? '[]')).toEqual(
      Array<number | null>(TOTAL).fill(null),
    );
  });
});
