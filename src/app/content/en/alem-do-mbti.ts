import type { SourceId } from '../sources';
import type { AlemDoMbtiContent } from '../types';

export const ALEM_DO_MBTI_EN: AlemDoMbtiContent = {
  meta: {
    title: 'Beyond MBTI — Enneagram, temperaments and the Big Five',
    description:
      'Enneatypes, wings, instinctual subtypes, classical temperaments and the Big Five: the ' +
      'maps that explain why two INTJs look like different types.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'wundt-1874',
    'eysenck-eysenck-1985',
    'virchow-1858',
    'kagan-1994',
    'rothbart-2011',
    'marston-1928',
    'kim-2025-mbti-disc',
    'keirsey-1998',
    'neris-our-theory',
    'riso-hudson-1999',
    'riso-hudson-1996',
    'naranjo-1994',
    'chestnut-2013',
    'fauvre-instincts',
    'fauvre-tritype',
    'lahaye-1984',
    'littauer-1983',
    'augustinaviciute-1998',
    'wikisocion-ili',
    'wikipedia-socionics',
    'wikipedia-disc',
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'pittenger-1993',
    'pittenger-2005',
    'hook-2021',
    'wagner-walker-1983',
    'enneagram-personality-2026',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 06 — Beyond MBTI',
    title: 'Why two INTJs\nlook like different types',
    lede:
      'MBTI describes <em>how</em> you process information. It does not describe what moves ' +
      'you, what you are afraid of, or which wound organises your life. There are other maps ' +
      'for that — and it is the crossing of one with another that explains why one INTJ can be ' +
      'a theoretical recluse and another a relentless commander.',
  },

  enneagram: {
    eyebrow: 'Enneagram · pick an enneatype',
    title: 'The same engine, different motives',
    intro:
      'If MBTI is the engine, the enneagram is the fuel: the deep motivation and the basic ' +
      'fear behind the behaviour. The vocabulary of basic desire and basic fear is Riso and ' +
      'Hudson’s. The frequencies below come from self-identified online surveys, which ' +
      'disagree with each other a good deal — the crossing of the two maps has barely been ' +
      'studied seriously. The nine enneatypes running on a Ni–Te engine are on the Enneagram ' +
      'page; the Tritype® — Katherine Fauvre’s proprietary extension, a trademark with 2020 ' +
      'filings and no peer-reviewed base — on the Tritypes page.',
    chipPrefix: 'INTJ',
    wantLabel: 'Core desire',
    fearLabel: 'Basic fear',
    lookLabel: 'What it looks like in practice',
    growLabel: 'Path of growth',
    types: [
      {
        tag: '5w4',
        num: '5',
        name: 'the eccentric investigator',
        freq: 'one of the enneatypes INTJs report most — the wing, nobody has measured',
        motto: 'If I know enough, no one will be able to reach me — or make me do anything.',
        body:
          'This is the archetypal INTJ of the popular imagination: reserved, deeply ' +
          'theoretical, with an original inner world and an almost physical relationship with ' +
          'knowledge. The 4 wing adds melancholy, aesthetics and a sense of singularity — ' +
          'usually the INTJ who writes, composes, researches obscure subjects and feels they ' +
          'have never belonged anywhere.',
        want: 'To understand the world and be competent enough to depend on no one.',
        fear: 'Being useless, helpless or incapable in the face of what life demands.',
        look:
          'Stockpiles knowledge before acting, guards energy like a scarce resource, avoids ' +
          'commitments that eat into thinking time.',
        grow:
          'Leaving theory and entering experience. The 5 grows by acting before feeling fully ' +
          'prepared — because that preparation never ends.',
      },
      {
        tag: '5w6',
        num: '5',
        name: 'the cautious analyst',
        freq: 'very common in technical fields',
        motto: 'I need to understand the whole system — and have a plan for when it fails.',
        body:
          'The 6 wing trades eccentricity for loyalty and prudence. This is the most ' +
          'methodical INTJ, oriented to risk and safety: thinks in failure scenarios, prizes ' +
          'rigour and trusts very few sources. Usually excellent in engineering, security, ' +
          'applied research and any field where being wrong is expensive.',
        want: 'Enough technical mastery to feel safe in an unpredictable world.',
        fear: 'Being caught unprepared, without resources and without backing.',
        look:
          'Checks twice, questions authority but respects competence, has a plan B for almost ' +
          'everything — and a background anxiety rarely admitted to.',
        grow:
          'Recognising that doubt is not a shortage of data. Trusting people, and yourself, ' +
          'before you are absolutely certain is the leap in this variation.',
      },
      {
        tag: '1w9',
        num: '1',
        name: 'the serene idealist',
        freq: 'frequent in the online surveys, and easy to mistake for a 5',
        motto: 'There is a right way to do this, and I will find it calmly.',
        body:
          'Here the energy is ethical and not merely intellectual: the INTJ 1 wants to improve ' +
          'things, correct what is wrong, raise standards. The 9 wing brings serenity and ' +
          'patience, producing a contained, almost professorial figure — critical inside and ' +
          'diplomatic outside. This is the INTJ many people describe as “wise”.',
        want: 'Integrity: being right, whole and consistent with your own principles.',
        fear: 'Being corrupt, defective or morally at fault.',
        look:
          'Constant, silent self-criticism, a high standard applied first of all to yourself, ' +
          'contained irritation at other people’s carelessness.',
        grow:
          'Accepting that enough is enough. The 1 is set free on discovering that a mistake is ' +
          'not a moral failing — it is information.',
      },
      {
        tag: '8w9',
        num: '8',
        name: 'the strategist of steel',
        freq: 'less frequent than the 5 in the surveys, far more visible',
        motto: 'I can see where this is going and I am not going to ask permission to act.',
        body:
          'The INTJ 8 is the one who looks least introverted: direct confrontation, dominant ' +
          'presence, absolute aversion to being controlled. The 9 wing gives an unsettling ' +
          'calm — silent pressure instead of explosion. This is the founder INTJ, the ' +
          'commander, the one who reorganises an entire company without raising their voice ' +
          'and without apologising.',
        want: 'Total autonomy and the power to protect your own territory and your own people.',
        fear: 'Being harmed or controlled by others — handed over to whoever holds power over you.',
        look:
          'Decides fast, takes responsibility without hesitating, tests people with brutal ' +
          'frankness, fiercely protects whoever is inside the circle.',
        grow:
          'Letting someone see the unarmoured part. For the 8, chosen vulnerability is ' +
          'strength — not a gap in the armour.',
      },
      {
        tag: '3w4',
        num: '3',
        name: 'the exacting achiever',
        freq: 'common in competitive careers',
        motto: 'I do not just want to understand: I want to build something that proves my worth.',
        body:
          'The INTJ 3 channels vision into concrete achievement. Extremely efficient, ' +
          'results-driven and alert to the image of competence, this is the most ambitious of ' +
          'them and the closest to the high-performance stereotype. The 4 wing adds depth, and ' +
          'the requirement that the achievement be authentic rather than generic.',
        want: 'Worth proven by achievements that are significant and recognised.',
        fear: 'Being worthless, mediocre, invisible — or recognised for something that is not you.',
        look:
          'Ambitious targets, fast adaptation, a real difficulty resting, an identity tangled ' +
          'up in what you produce.',
        grow:
          'Separating who you are from what you deliver. The classic path takes the 3 to the ' +
          '6: loyalty to people instead of to results — and rest without guilt.',
      },
      {
        tag: '4w5',
        num: '4',
        name: 'the melancholic visionary',
        freq: 'a minority in the surveys, intensely creative',
        motto: 'I feel deeply, I think far ahead, and I never fitted into either of those things.',
        body:
          'The most artistic combination: the same strategic machine, driven by identity and ' +
          'meaning instead of competence. This is the INTJ who creates a body of work, writes, ' +
          'directs, philosophises — acutely aware of their own difference and of the distance ' +
          'between what they imagine and what they manage to build.',
        want: 'An authentic identity and a meaning that is unmistakably yours.',
        fear: 'Having no identity of your own — being ordinary, replaceable, without singularity.',
        look:
          'Emotional intensity hidden behind intellectual restraint, nostalgia, a high ' +
          'aesthetic standard, a tendency to compare yourself.',
        grow:
          'Realising that meaning is built in the ordinary and the everyday, not only in the ' +
          'extraordinary. Routine does not betray your singularity.',
      },
    ],
  },

  instincts: {
    eyebrow: 'Instinctual subtypes',
    title: 'The same motive, played out in three arenas',
    intro:
      'The three instincts are Oscar Ichazo’s; Claudio Naranjo crossed them with the nine ' +
      'enneatypes and produced the 27 subtypes. Nobody “is” an instinct: all three are always ' +
      'present, in order of dominance. This is a school’s description, not a laboratory’s — ' +
      'none of it has been validated empirically. The 27 subtypes, one by one and applied to ' +
      'the INTJ, are on the Instinctual subtypes page.',
    cards: [
      {
        kicker: 'SP · SELF-PRESERVATION',
        title: 'Fortress and resources',
        text:
          'The most reclusive and practical INTJ: money, health, safety, a controlled ' +
          'environment. Builds a life proofed against the unforeseen and resists depending on ' +
          'anyone at all.',
      },
      {
        kicker: 'SO · SOCIAL',
        title: 'Position and impact',
        text:
          'The most visible INTJ: wants influence over systems and groups, accepts leadership, ' +
          'calculates reputation. Introverted, but present where the decisions happen.',
      },
      {
        kicker: 'SX · ONE-TO-ONE',
        title: 'Intensity and fusion',
        text:
          'The most intense and inwardly romantic INTJ: seeks total connection with very few ' +
          'people — one, ideally, to whom you can hand over everything you hide from the rest.',
      },
    ],
  },

  temperaments: {
    eyebrow: 'Classical temperaments · old vocabulary, not science',
    title: 'Melancholic with choleric — the pairing INTJs report most',
    intro:
      'Nobody is only one humour: you are a blend, one dominant and one secondary. The scheme ' +
      'of twelve combinations belongs to neither Hippocrates nor Galen — it comes from ' +
      'twentieth-century popular Christian psychology, from Tim LaHaye, and it is worth what ' +
      'it is worth. Among INTJs two of them dominate community accounts, and nobody has ever ' +
      'measured this: no sample crossing MBTI with classical temperament exists. Below are ' +
      'those two and a third, just to give the thing its shape — and do not confuse any of it ' +
      'with Keirsey’s temperaments, where the INTJ is always Rational (NT).',
    cards: [
      {
        kicker: 'Melancholic–choleric',
        title: 'The relentless perfectionist',
        text:
          'The melancholic’s depth feeds Ni and the sky-high standard; the choleric will hands ' +
          'Te over ready to execute. This is the INTJ who plans for months and then moves ' +
          'without hesitating — and who treats their own draft as though it were the final ' +
          'delivery. Risk: severe self-criticism, rigidity and no tolerance for your own error.',
        accent: true,
      },
      {
        kicker: 'Choleric–melancholic',
        title: 'The strategic commander',
        text:
          'Here action comes first and analysis serves the conquest: Te in command, Ni hired ' +
          'to find the shortest route. Decides fast, takes leadership without asking, tolerates ' +
          'little error in others. Risk: running people over and cutting exactly the stage of ' +
          'reflection that was your advantage.',
        accent: true,
      },
      {
        kicker: 'Phlegmatic–melancholic',
        title: 'The strategist who waits',
        text:
          'Calm comes first and depth after it: you observe a great deal, conclude in silence ' +
          'and move only when the cost of not moving gets high. Excellent for not being wrong, ' +
          'terrible for arriving early. Risk: calling postponement patience, and watching the ' +
          'window close with the plan finished in a drawer.',
        accent: false,
      },
    ],
  },

  bigFive: {
    eyebrow: 'Big Five · the model of academic psychology',
    title: 'The typical profile, trait by trait',
    intro:
      'The Big Five is the model most used in scientific research. It has no “types”, only ' +
      'five continuous dimensions. The bands below indicate direction, not measurement: they ' +
      'come from the correlations between the MBTI scales and the Big Five (McCrae and Costa, ' +
      '1989), not from percentiles measured in INTJs — and the last one varies a great deal. ' +
      'Trait by trait, with what the correlation supports and what it does not, on the Big ' +
      'Five page.',
    rows: [
      {
        name: 'Openness',
        width: '92%',
        level: 'VERY HIGH',
        text:
          'A hunger for abstract ideas, theories and new systems. The common caveat — that ' +
          'this comes with less aesthetic interest — does not hold: intuition correlates with ' +
          'openness in general, aesthetics included. What is left out is the immediate sensory.',
      },
      {
        name: 'Conscientiousness',
        width: '84%',
        level: 'HIGH',
        text:
          'Order, discipline and orientation towards long-term goals — more from internal ' +
          'self-demand than from any external sense of duty.',
      },
      {
        name: 'Extraversion',
        width: '18%',
        level: 'LOW',
        text:
          'Little appetite for social stimulation. But “extraversion” in the Big Five is a ' +
          'domain with several facets, and self-assertion — E3 in the NEO-PI-R, nothing to do ' +
          'with the “assertive” of 16Personalities just below — is one of them. That is the ' +
          'gap the quiet INTJ who takes command anyway comes through.',
      },
      {
        name: 'Agreeableness',
        width: '34%',
        level: 'LOW TO MEDIUM',
        text:
          'Frankness above harmony, and resistance to agreeing out of convenience. It does not ' +
          'mean an absence of care: it means care without automatic diplomacy.',
      },
      {
        name: 'Neuroticism',
        width: '50%',
        level: 'VARIABLE',
        text:
          'MBTI does not measure this: there is no fifth letter among the four. The INTJ-A / ' +
          'INTJ-T distinction belongs to 16Personalities, which dropped the Jungian functions, ' +
          'adopted the Big Five and renamed neuroticism “Identity” — low in the assertive, ' +
          'high in the turbulent. Neither of them is the “correct” version of the type.',
      },
    ],
    extras: [
      {
        title: 'Socionics',
        text:
          'Created in the 1970s–80s in Vilnius by the Lithuanian Aušra Augustinavičiūtė, out ' +
          'of Jung and Kępiński’s information metabolism. By the functions, the INTJ’s ' +
          'counterpart is the ILI (Ni-Te) — not the LII, which is Ti-Ne and corresponds to the ' +
          'INTP. The confusion is in the last letter: socionics’ j/p follows the dominant ' +
          'function, MBTI’s J/P follows the first extraverted function. In introverts it ' +
          'inverts, and INTJ becomes INTp. And even that is a conversion convention, not an ' +
          'equivalence: the two systems define the elements differently.',
        accent: false,
      },
      {
        title: 'DISC',
        text:
          'A model of behaviour proposed by William Moulton Marston in 1928 — unrelated to ' +
          'Jung, and with no instrument of its own until the 1950s. The INTJ = D + C mapping ' +
          'is consulting folklore: the only published study to correlate the two systems links ' +
          'J to C (rigour, precision) and finds T correlated negatively with D. A small, ' +
          'culturally narrow sample — weak evidence, not proof.',
        accent: false,
      },
      {
        title: 'Original Jung',
        text:
          'The root of it all: in Psychologische Typen (1921) Jung describes the “introverted ' +
          'intuitive” — mystic and seer on one side, fanciful eccentric on the other, someone ' +
          'whose language “is not that which is commonly spoken”. Except that this type covers ' +
          'both INTJ and INFJ: the four letters and the auxiliary-function rule are Myers’s ' +
          'invention, not Jung’s.',
        accent: false,
      },
      {
        title: 'How to use all of this',
        text:
          'Stack the maps instead of choosing one: MBTI tells you how you think, the enneagram ' +
          'why you act, the Big Five how much of each trait. None of them describes you alone. ' +
          'Just do not confuse their weight: the Big Five is the only one with a research ' +
          'base; the other two are useful languages, not measurements. Socionics, DISC and ' +
          'Jung each have a page of their own, with the history and the verdict.',
        accent: true,
      },
    ],
  },

  more: {
    enneagram: 'See the nine types and eighteen wings in full',
    instincts: 'See the 27 instinctual subtypes',
    temperaments: 'See the twelve blends in full',
    bigFive: 'See the five traits in full',
  },
  next: {
    label: 'Next page',
    title: 'Comparisons: neighbours, A/T, myths and references',
    index: '07 →',
    key: 'comparacoes',
  },
};
