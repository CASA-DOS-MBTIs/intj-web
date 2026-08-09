import type { SourceId } from '../sources';
import type { ComparacoesContent } from '../types';

export const COMPARACOES_EN: ComparacoesContent = {
  meta: {
    title: 'Comparisons — INTJ beside its neighbours',
    description:
      'INTJ compared with INTP, ENTJ, INFJ, ENTP and ISTJ, the difference between assertive and ' +
      'turbulent, and the stereotypes that can already be retired.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-ethics',
    'saunders-1991',
    'grant-1983',
    'neris-our-theory',
    'mccrae-costa-1989',
    'schurr-1988',
    'kaufman-1996',
    'davis-1983',
    'melchers-2016',
    'howes-carskadon-1979',
    'bess-harvey-2002',
    'reynierse-2009',
    'stein-swan-2019',
    'boyle-1995',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 07 — Comparisons',
    title: 'INTJ beside\nits neighbours',
    lede:
      'One letter of difference can rebuild the whole cognitive stack — or barely touch it. Swap ' +
      'J for P and INTJ becomes INTP, with not a single function left in common; swap I for E ' +
      'and all four survive, only the order changes; INTJ and ISTJ, apparently so far apart, ' +
      'share half the engine. Compare them side by side, understand the difference between ' +
      'assertive and turbulent, and see which stereotypes can already be retired.',
  },

  comparator: {
    hint: 'Compare INTJ with',
    dimensionLabel: 'Dimension',
    intjStack: 'Ni · Te · Fi · Se',
    sameLabel: 'What brings them together',
    frictionLabel: 'Typical friction',
    items: [
      {
        code: 'INTP',
        stack: 'Ti · Ne · Si · Fe',
        rows: [
          {
            label: 'Focus',
            a: 'Converge: reach the best conclusion and act on it.',
            b: 'Diverge: explore however many explanations exist, in no hurry to close.',
          },
          {
            label: 'Decision',
            a: 'Fast, aimed at an external result and a deadline.',
            b: 'Postponed, because there is almost always one more consideration missing.',
          },
          {
            label: 'Relationship with plans',
            a: 'Makes a plan and executes it; drawn-out ambiguity grates.',
            b: 'Prefers to keep options open; a closed plan feels like prison.',
          },
          {
            label: 'Logic',
            a: 'Te — effectiveness in the world, what works and delivers.',
            b: 'Ti — internal consistency, what is logically flawless.',
          },
          {
            label: 'Outward appearance',
            a: 'Determined, sometimes intimidating.',
            b: 'Loose, curious, apparently untroubled.',
          },
        ],
        same:
          'Both are introverts and intuitives in the four letters — but the INTJ’s intuition is ' +
          'introverted (Ni) and the INTP’s is extraverted (Ne). The love of abstract systems is ' +
          'the same: conversations between an INTJ and an INTP tend to be the most satisfying ' +
          'either of them ever has.',
        friction:
          'The INTJ thinks the INTP never concludes anything; the INTP thinks the INTJ closes ' +
          'the question before examining it completely. Both are right.',
      },
      {
        code: 'ENTJ',
        stack: 'Te · Ni · Se · Fi',
        rows: [
          {
            label: 'Order of the functions',
            a: 'Thinks first, acts after — vision is in command.',
            b: 'Acts first, adjusts after — execution is in command.',
          },
          {
            label: 'Social energy',
            a: 'Leads from backstage, with few words.',
            b: 'Leads from the front, owns the room, speaks in public at no cost.',
          },
          {
            label: 'Pace',
            a: 'Needs silence to think before moving.',
            b: 'Thinks in motion; stopping costs more than being wrong.',
          },
          {
            label: 'Need',
            a: 'Time alone to reorganise the internal model.',
            b: 'Constant interaction and challenge to stay lit.',
          },
          {
            label: 'Risk',
            a: 'Planning too much and acting too late.',
            b: 'Acting too much and running over whoever is nearby.',
          },
        ],
        same:
          'Strategy, bluntness, a high standard and zero patience for incompetence. They work ' +
          'very well together when the roles are clear.',
        friction:
          'A fight over command. The ENTJ finds the INTJ slow and distant; the INTJ finds the ' +
          'ENTJ hurried and loud.',
      },
      {
        code: 'INFJ',
        stack: 'Ni · Fe · Ti · Se',
        rows: [
          {
            label: 'Same dominant',
            a: 'Ni pointed at systems, structures and results.',
            b: 'Ni pointed at people, motives and meanings.',
          },
          {
            label: 'Second function',
            a: 'Te — organises the outer world with objective logic.',
            b: 'Fe — tunes into the emotional weather of the group and answers it.',
          },
          {
            label: 'In conflict',
            a: 'Goes straight to the point, however uncomfortable.',
            b: 'Looks for harmony and suffers under open friction.',
          },
          {
            label: 'Motivation',
            a: 'That the thing work as well as it possibly can.',
            b: 'That the people involved grow and be seen.',
          },
          {
            label: 'How they are read',
            a: 'Cold and assertive — even with no intention of it.',
            b: 'Warm and welcoming — even when exhausted.',
          },
        ],
        same:
          'Identical Introverted Intuition creates instant recognition: the two of them see the ' +
          'future in the same silent way.',
        friction:
          'The INTJ underestimates the emotional cost of their own words; the INFJ avoids the ' +
          'hard conversation the INTJ considers necessary.',
      },
      {
        code: 'ENTP',
        stack: 'Ne · Ti · Fe · Si',
        rows: [
          {
            label: 'Way of thinking',
            a: 'One likely direction, taken all the way down.',
            b: 'Twenty possible directions, every one of them tested out loud.',
          },
          {
            label: 'Debate',
            a: 'Argues to arrive at the correct conclusion.',
            b: 'Argues to find out what they have not thought of yet — and for sport.',
          },
          {
            label: 'Constancy',
            a: 'Finishes what they start, even without enthusiasm.',
            b: 'Loses interest the moment the problem stops being new.',
          },
          {
            label: 'Structure',
            a: 'Builds and maintains systems.',
            b: 'Finds the flaw in any system that already exists.',
          },
          {
            label: 'Contribution',
            a: 'Depth and execution.',
            b: 'Breadth and reinvention.',
          },
        ],
        same: 'Both live on ideas and detest triviality. Their conversations swallow whole nights.',
        friction:
          'The ENTP’s creative chaos scrambles the INTJ’s plan; the INTJ’s firmness sounds ' +
          'dogmatic to the ENTP.',
      },
      {
        code: 'ISTJ',
        stack: 'Si · Te · Fi · Ne',
        rows: [
          {
            label: 'Source of confidence',
            a: 'The internal model of what is likely to happen.',
            b:
              'The inner impression, vivid and entirely their own, of what has already happened ' +
              'and worked.',
          },
          {
            label: 'Change',
            a: 'Welcome when it improves the system.',
            b: 'Suspect until proven — which is usually sensible.',
          },
          {
            label: 'Detail',
            a: 'Only what matters to the structure.',
            b: 'All of them, with impressive precision and memory.',
          },
          {
            label: 'Time',
            a: 'The future in the foreground.',
            b: 'The past as the ground of everything.',
          },
          {
            label: 'Shared ground',
            a: 'Strong Te: efficiency, bluntness, a sense of duty to what was agreed.',
            b: 'Strong Te: efficiency, bluntness, a sense of duty to what was agreed.',
          },
        ],
        same:
          'Reliability, independence and a mutual contempt for drama. They make extremely solid ' +
          'execution pairs.',
        friction:
          'The INTJ wants to rebuild the process that works; the ISTJ wants to preserve the ' +
          'process that has already proved it works.',
      },
    ],
  },

  identity: {
    eyebrow: 'Identity variants',
    title: 'INTJ-A and INTJ-T',
    intro:
      'The four-function stacks with fixed attitudes — Ni·Te·Fi·Se and the rest — come from ' +
      'Grant, Thompson and Clarke (1983), not from Myers, who left the attitude of the third ' +
      'function open. It is the most widely used convention and the most useful one for reading ' +
      'differences; it is neither official doctrine nor experimental finding. The final letter ' +
      'does not come from the MBTI. It is the Identity scale of 16Personalities — the NERIS ' +
      'model, which discards the cognitive functions and rebuilds the four letters on top of the ' +
      'Big Five, with assertive/turbulent taking the place of neuroticism, precisely the trait ' +
      'the MBTI never measured. That is how they designed it, not something an independent ' +
      'study has confirmed. Outside that model the suffix does not exist. As vocabulary it ' +
      'works: two INTJs with the same reasoning and very different internal temperatures.',
    variants: [
      {
        kicker: 'INTJ-A · ASSERTIVE',
        title: 'Steady confidence',
        points: [
          'Sure of their own decisions, with little rumination afterwards',
          'Stress bites less into mood and sleep',
          'Genuine indifference to other people’s opinions',
          'Less self-criticism — sometimes less self-criticism than would be useful',
          'Risk: underestimating their own impact on people and ignoring feedback',
        ],
      },
      {
        kicker: 'INTJ-T · TURBULENT',
        title: 'Restless perfectionism',
        points: [
          'Constant mental review of decisions already made',
          'Greater sensitivity to criticism, even when it never shows',
          'Very high self-demand and an urgent sense of needing to improve',
          'More attention to the effect of their own words — which is self-awareness, not ' +
            'necessarily empathy',
          'Risk: anxiety, perfectionist procrastination and silent burnout',
        ],
      },
    ],
    note:
      'Neither one is the superior version of the type. The assertive tends to execute with more ' +
      'peace; the turbulent tends to refine with more depth. Maturity brings the two closer. ' +
      'Worth remembering where this comes from: the Identity scale is a proprietary description ' +
      'by 16Personalities, with no published independent validation.',
  },

  myths: {
    eyebrow: 'Stereotypes',
    title: 'Seven myths that can be retired',
    mythLabel: 'Myth',
    realityLabel: 'Reality',
    items: [
      {
        myth: '“INTJs have no emotions.”',
        reality:
          'They have Fi — Introverted Feeling, deep and private. The emotion is intense and badly ' +
          'translated into words, not absent. It is what the model predicts and what most INTJs ' +
          'report about themselves; nobody has ever counted how many cry alone, and the number ' +
          'would change nothing.',
      },
      {
        myth: '“They are all evil geniuses.”',
        reality:
          'Fiction loves casting the profile as the villain because cold strategy makes good ' +
          'plot. In real life, Fi works as a private code: the red lines are few, self-made and ' +
          'hard to move. That makes nobody more ethical than average — no type carries that ' +
          'advantage, and no measure has ever shown one. It makes you harder to buy, which is ' +
          'not the same thing.',
      },
      {
        myth: '“Being INTJ means being intelligent.”',
        reality:
          'Type describes a processing preference, not capacity. Intuition turns up slightly ' +
          'more often among high marks and aptitude tests — a weak correlation, which explains ' +
          'little and supports no diploma at all. There are brilliant INTJs and average INTJs, ' +
          'as in any type, and treating the four letters as proof of intelligence is the fastest ' +
          'shortcut to arrogance.',
      },
      {
        myth: '“They do not like people.”',
        reality:
          'They like people in small quantities and at great depth. What tires them is not the ' +
          'person: it is shallow interaction with no purpose.',
      },
      {
        myth: '“They are always organised and disciplined.”',
        reality:
          'The organisation is mental, not necessarily physical. Plenty of INTJs live in chaotic ' +
          'rooms with impeccable internal systems — and put off any task they consider irrelevant.',
      },
      {
        myth: '“It is a fixed type — you are born and die like this.”',
        reality:
          'Type is less stable than the four letters suggest: taken again a few weeks later, the ' +
          'MBTI hands back at least one different letter to close to half the people in the ' +
          'classic studies — because it cuts continuous traits into two halves, and whoever ' +
          'sits near the middle changes sides with their mood. What really changes over the ' +
          'years is the repertoire: a 45-year-old INTJ with developed Fi and Se is practically ' +
          'another person in behaviour — same engine, far greater reach.',
      },
      {
        myth: '“The MBTI is a validated test like the ones in academic psychology.”',
        reality:
          'It is not, and pretending otherwise is what discredits the rest. Taken again, it ' +
          'changes a letter for close to half of people; the dichotomies do not show up in the ' +
          'distribution of the data, which is centre-weighted rather than bimodal; type dynamics ' +
          'never gathered consistent evidence. None of that makes the vocabulary useless — it ' +
          'makes it vocabulary. Good for describing, never for measuring, predicting performance ' +
          'or selecting people.',
      },
    ],
  },

  culture: {
    eyebrow: 'Cultural references',
    title: 'INTJs by attribution — with one important caveat',
    intro:
      'Nobody can type another person accurately from the outside, and public figures least of ' +
      'all — the MBTI’s own code of ethics requires that type be verified by the person, never ' +
      'assigned by a third party. The lists below are popular attributions in typology ' +
      'communities — useful as an illustration of the pattern, useless as a statement of fact.',
    groups: [
      {
        title: 'Fictional characters',
        names: [
          'Sherlock Holmes',
          'Michael Corleone',
          'Lisbeth Salander',
          'Bruce Wayne',
          'Walter White',
          'Thomas Shelby',
          'Elrond',
          'Ellen Ripley',
        ],
        note:
          'Notice the narrative pattern: long-range strategists, calm in a crisis, hard to read ' +
          '— and frequently alone by choice.',
      },
      {
        title: 'Historical and public figures',
        names: [
          'Friedrich Nietzsche',
          'Isaac Newton',
          'Nikola Tesla',
          'Jane Austen',
          'Ada Lovelace',
          'Marie Curie',
          'Hannah Arendt',
          'Stanley Kubrick',
        ],
        note:
          'Everyone on this list is dead, and that is a rule rather than an accident. Typing a ' +
          'living person is a claim about somebody who is entitled to disagree with it, and ' +
          'there is no way to check. These attributions are read from work and biography — ' +
          'never from an administered test, and most of them died before the MBTI existed at ' +
          'all. Treat them as an interesting hypothesis, not as data.',
      },
    ],
  },

  next: {
    label: 'Last page',
    title: 'Mirror: thirty-two statements about you',
    index: '08 →',
    key: 'espelho',
  },
};
