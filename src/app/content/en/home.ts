import type { SourceId } from '../sources';
import type { HomeContent } from '../types';

export const HOME_EN: HomeContent = {
  meta: {
    title: 'INTJ — The quiet strategist',
    description:
      'An honest portrait of the INTJ type: the cognitive stack, strengths and shadows, work, ' +
      'bonds and growth.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbtionline-2024',
    'capt-2003',
    'beebe-2017',
    'keirsey-1998',
    'keirsey-bates-1978',
    'neris-our-theory',
  ] satisfies SourceId[],

  hero: {
    eyebrow: 'MBTI · INTJ type · ≈2% of US adults',
    title: 'INTJ',
    subtitle: 'The quiet strategist',
    stack: 'Ni → Te → Fi → Se',
    lede:
      'If you came here looking for an honest portrait of yourself, welcome. This site is ' +
      'given over entirely to the INTJ — the mind that tends to see the ending before the ' +
      'beginning, and spends a lifetime translating invisible patterns into workable plans. ' +
      'Nothing here is meant to fit you into a cage. It is meant to give you words.',
    ctaPrimary: 'Start with the mind',
    ctaSecondary: 'Mirror — short quiz',
  },

  stats: [
    { value: '≈2%', label: 'of the US adult population' },
    { value: '≈0.8%', label: 'of women in the US — against ≈3.3% of men' },
    { value: 'NT', label: 'rational (Keirsey) · analyst (16Personalities)' },
    { value: '4', label: 'conscious functions — 8 with the shadow (Beebe)' },
  ],

  portrait: {
    eyebrow: '01 — Portrait',
    title: 'A mind that works backwards',
    paragraphs: [
      'The INTJ rarely thinks in steps. The conclusion arrives first — whole, silent, almost ' +
        'without warning — and only then comes the patient work of reconstructing the path ' +
        'that led to it. That is why you sometimes know something will go wrong months before ' +
        'you can explain why.',
      'From the outside it looks like coldness. Inside it is the opposite: a densely populated ' +
        'inner world, with deep convictions and an almost stubborn insistence that things make ' +
        'sense. You do not keep your distance out of contempt — you keep it because you need ' +
        'room to think, and because you learned early that few people have the patience for ' +
        'your pace.',
      'The good news: nearly everything that tends to weigh on being an INTJ — the impatience, ' +
        'the chosen solitude, the difficulty naming what you feel — can be developed. You do ' +
        'not become someone else. You become a version of yourself with more reach.',
      'A word about the numbers above, since rarity so readily turns into identity: they ' +
        'describe the United States, from samples compiled between 1972 and 2002. There is no ' +
        'Brazilian normative sample of the MBTI — nobody has ever counted how many INTJs there ' +
        'are in Brazil. Being rare here is an imported statistic: it is not a merit, and it is ' +
        'not what this page has to offer you.',
    ],
  },

  traits: [
    {
      kicker: 'I · INTROVERSION',
      title: 'Energy turned inward',
      text:
        'Your attention runs inward: you process before you speak, and you tire where the ' +
        'stimulus never stops. This is not shyness — it is a preference for depth over volume.',
    },
    {
      kicker: 'N · INTUITION',
      title: 'Pattern before fact',
      text:
        'What matters is the meaning behind the detail, the direction of the current — not ' +
        "today's wave.",
    },
    {
      kicker: 'T · THINKING',
      title: 'Coherence as a compass',
      text:
        'Decisions pass through the filter of what is consistent and effective. Emotion is not ' +
        'ignored — it simply arrives second.',
    },
    {
      kicker: 'J · JUDGING',
      title: 'Closure and a plan',
      text:
        'Open-ended ambiguity is tiring. You want to decide, organise and move — preferably ' +
        'with a margin for contingency.',
    },
  ],

  map: {
    eyebrow: '02 — What you will find here',
    title: 'Twelve layers, from mechanism to real life',
    intro:
      'You can read in order or jump straight to whatever hurts or fascinates right now. Each ' +
      'page stands on its own.',
    cards: [
      {
        key: 'mente',
        kicker: '01 · THE MIND',
        title: 'The cognitive stack',
        text:
          'Ni, Te, Fi and Se explained one by one, with an interactive diagram. The engine ' +
          'underneath everything.',
      },
      {
        key: 'luz-e-sombra',
        kicker: '02 · LIGHT & SHADOW',
        title: 'Strengths, faults and burnout',
        text:
          'What you do better than almost anyone, what sabotages you, and how the INTJ falls ' +
          'apart when it falls apart.',
      },
      {
        key: 'trabalho',
        kicker: '03 · WORK',
        title: 'Career and environment',
        text:
          'Where you thrive, what empties you out in three months, and how to lead without ' +
          'turning into a spreadsheet tyrant.',
      },
      {
        key: 'vinculos',
        kicker: '04 · BONDS',
        title: 'Love, friendship, family',
        text:
          'How the INTJ loves (in acts, not adjectives), what needs saying out loud, and why ' +
          'loyalty is slow to arrive.',
      },
      {
        key: 'genero',
        kicker: '05 · MEN & WOMEN',
        title: 'The same type, read differently',
        text:
          'Why the INTJ is rare among women, and why the same behaviour reads as ' +
          '“competent” in one and “difficult” in the other.',
      },
      {
        key: 'jornada',
        kicker: '06 · JOURNEY',
        title: 'Phases by age',
        text:
          'A timeline of how the functions develop — and the concrete growth practices for ' +
          'each phase.',
      },
      {
        key: 'alem-do-mbti',
        kicker: '07 · BEYOND MBTI',
        title: 'Enneagram and temperaments',
        text:
          'Two INTJs can be unrecognisable to each other. Enneatype, wing, classical ' +
          'temperament and the Big Five explain the difference.',
      },
      {
        key: 'comparacoes',
        kicker: '08 · COMPARISONS',
        title: 'Neighbours, A/T and myths',
        text:
          'INTJ beside INTP, ENTJ, INFJ and ENTP. Assertive vs. turbulent. And the stereotypes ' +
          'that have worn out their welcome.',
      },
      {
        key: 'espelho',
        kicker: '09 · MIRROR',
        title: 'A short trait quiz',
        text:
          'Thirty-two statements, eight per cognitive function, measuring how much the INTJ ' +
          'traits resonate with you — no verdict, just a reading.',
      },
      {
        key: 'saude',
        kicker: '10 · HEALTH',
        title: 'How to tell whether you are well',
        text:
          'What defines a healthy INTJ, the signs that you are not one right now, and why ' +
          '“maximise performance” and “be well” turn out to be the same question.',
      },
      {
        key: 'o-que-ninguem-diz',
        kicker: '11 · RECOGNITION',
        title: 'What nobody tells you',
        text:
          'The specific experiences INTJ descriptions consistently leave out. The page that ' +
          'exists so you recognise yourself, not so you learn theory.',
      },
      {
        key: 'para-quem-ama',
        kicker: '12 · FOR EVERYONE ELSE',
        title: 'If you love an INTJ',
        text:
          'The one page not written for you — and probably the one you will send to someone ' +
          'instead of trying to explain out loud.',
      },
    ],
  },

  quote: {
    eyebrow: 'The central paradox',
    quote: '“You deeply want to be understood — and yet you almost never explain yourself.”',
    text:
      'A good part of the INTJ’s maturing fits inside that sentence. You do not need to ' +
      'change temperament to resolve it — only to learn to say out loud a fraction of what is ' +
      'already finished inside.',
  },

  disclaimer: {
    eyebrow: 'Before you go on',
    title: 'Read this as a mirror, not a sentence',
    paragraphs: [
      'No description will be 100% right — and if one were, that would be worrying. Use what ' +
        'you recognise, question the rest, and pay particular attention to whatever bothers ' +
        'you: that is usually where the undeveloped part lives.',
      'Type does not explain trauma, upbringing, culture, health or choice. It describes ' +
        'processing preferences. Everything else is you.',
    ],
  },
};
