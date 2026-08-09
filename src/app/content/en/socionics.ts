import type { ModelPageContent } from '../types';

export const SOCIONICS_EN: ModelPageContent = {
  meta: {
    title: 'Socionics — the INTJ is ILI, not LII',
    description:
      'Augustinavičiūtė, information metabolism, Model A and intertype relations: why the ' +
      'correct conversion of INTJ is ILI (Ni–Te), where the LII error comes from, and why even ' +
      'the right conversion is not an equivalence.',
  },

  sources: [
    'augustinaviciute-1998',
    'wikisocion-ili',
    'wikipedia-socionics',
    'jung-1921',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Beyond MBTI — Socionics',
    title: 'Socionics: the INTJ is ILI,\nnot LII',
    lede:
      'A system built in Vilnius in the 1970s out of Jung and a Polish psychiatrist, with ' +
      'sixteen types, eight positions inside each type and a closed catalogue of relations ' +
      'between them. Almost everything written in English about the INTJ’s counterpart here is ' +
      'wrong at the same point — and the error fits entirely inside one letter.',
  },

  intro:
    'Socionics is what happens when someone reads <em>Psychological Types</em> without going ' +
    'through Myers. It arrived at sixteen types by a completely different road from the ' +
    'American one: more formal, more rigid, and far more interested in what happens ' +
    '<em>between</em> two types than inside one. The INTJ’s counterpart in that system is ' +
    '<strong>ILI</strong> — Ni leading, Te creative. Not LII, which is Ti–Ne and corresponds to ' +
    'the INTP.',

  caveat:
    'Socionics has no standing in academic psychology: no peer-reviewed validation, no ' +
    'published samples, almost no presence in the international literature. And the INTJ → ILI ' +
    'conversion is a translation convention between two maps that define their elements ' +
    'differently — not an identity. Read this page as an alternative vocabulary, never as ' +
    'confirmation.',

  sections: [
    {
      eyebrow: 'Origin · Vilnius, 1970s',
      title: 'An economist, Jung and information metabolism',
      paragraphs: [
        'Aušra Augustinavičiūtė (1927–2005) was an economist and sociologist, and headed the ' +
          'family science faculty at the Vilnius Pedagogical Institute when she crossed two ' +
          'readings: Jung’s <em>Psychological Types</em> and the Polish psychiatrist Antoni ' +
          'Kępiński’s notion of information metabolism — the idea that the psyche feeds on ' +
          'information as the body feeds on food, and sickens when the diet does not match what ' +
          'it can digest.',
        'What came out of the fusion is not a Soviet version of MBTI. Jung’s eight ' +
          'function-attitudes became eight <em>information elements</em>: slices of reality ' +
          'rather than mental habits. A type stops being a preference and becomes architecture — ' +
          'a fixed order of eight positions, identical in every representative of the type, ' +
          'stating what the person digests well, what they digest badly and what they cannot ' +
          'digest at all.',
        'The name comes from “socion”, the set of all sixteen types. From the start the object ' +
          'of study is the set and not the individual: socionics was built to describe relations, ' +
          'and the typology is only the means. The texts circulated in typescript for over a ' +
          'decade before any printed edition existed — the volume now cited as the foundation is ' +
          'dated 1998 and was written between the 1970s and the 1980s.',
      ],
    },
    {
      eyebrow: 'The eight elements',
      title: 'Not every “Te” means the same thing',
      paragraphs: [
        'Socionics uses the same two-letter notation MBTI uses for functions, and that is where ' +
          'the confusion starts: the symbols coincide, the definitions do not. Each element has ' +
          'its own name and its own content, inherited from Jung but rewritten to describe an ' +
          'aspect of the world rather than an operation of the mind.',
      ],
      points: [
        'Ni — “intuition of time”: sequence, trend, the outcome of a process already under way. ' +
          'The element closest to Myers’ Ni, and still more about time than about meaning.',
        'Te — “logic of facts”: efficiency, procedure, work that functions, numbers that close. ' +
          'Considerably more concrete than Myers’ Te, which also covers abstract criteria.',
        'Se — “volitional sensing”: force, pressure, taking up space, will imposed on the ' +
          'environment. Myers’ Se carries no such charge of power; here it is the core of it.',
        'Fi — “ethics of relations”: the correct distance between two people, who is inside and ' +
          'who is outside. Myers’ Fi is personal value; the socionics one is always relational.',
        'Ti is “structural logic”, Fe “ethics of emotions”, Ne “intuition of possibilities”, Si ' +
          '“sensory comfort” — the four that remain for the ILI, and that come back below.',
      ],
    },
    {
      eyebrow: 'The j/p inversion',
      title: 'Where the LII error comes from',
      paragraphs: [
        'Socionics also writes its types in four letters, with the last one lower-case: INTj, ' +
          'INTp. It looks like the MBTI code and it is not. In socionics the final letter ' +
          'describes the <strong>dominant function</strong>: if that function is rational — logic ' +
          'or ethics — the type is j; if it is irrational — intuition or sensing — the type is p.',
        'In MBTI the rule is a different one. The final letter describes the first ' +
          '<strong>extraverted</strong> function in the stack: if it judges you are J, if it ' +
          'perceives you are P. In extraverts both rules point at the same function and agree. In ' +
          'introverts the dominant is introverted and the extraverted function is the auxiliary — ' +
          'so the rules point at different functions and the final letter always inverts.',
        'Apply it to the INTJ. The dominant is Ni, irrational: in socionics, therefore, ' +
          '<strong>p</strong>. The first extraverted function is Te, which judges: in MBTI, ' +
          'therefore, <strong>J</strong>. The same person, opposite final letters, no ' +
          'contradiction — just two conventions reading the same stack.',
      ],
      points: [
        'INTJ (Ni–Te) → INTp → ILI, Intuitive-Logical Introvert, nicknamed “Balzac” — ' +
          'Augustinavičiūtė named her types after historical and literary figures.',
        'INTP (Ti–Ne) → INTj → LII, Logical-Intuitive Introvert, “Robespierre”.',
        'Short rule: for introverts, swap the last letter when crossing the border. For ' +
          'extraverts, swap nothing.',
      ],
    },
    {
      eyebrow: 'Why the error matters',
      title: 'LII hands you the INTP’s architecture',
      paragraphs: [
        'If the swap were cosmetic it would not be worth a section. But every socionics type ' +
          'comes with a declared blind spot and a declared hunger, and the LII’s are the exact ' +
          'inverse of the ILI’s. The LII has Se as its vulnerable function and Fe as its ' +
          'suggestive one: the text will tell you your weak heel is brute force and that what you ' +
          'need supplied is a warm emotional climate.',
        'The ILI says the opposite. The vulnerable function is <strong>Fe</strong> — the ' +
          'emotional weather of a group, which you neither read nor produce — and the suggestive ' +
          'one is <strong>Se</strong>: physical presence, pace, pressure, the shove into the ' +
          'concrete world that you gladly accept from someone else and cannot generate alone. ' +
          'Which is, word for word, what MBTI already says about inferior Se in an INTJ.',
        'Even so: getting the conversion right does not turn it into an equivalence. A good part ' +
          'of the socionics community rejects cross-system conversion altogether, because the ' +
          'elements are not Myers’ functions and because typing is done by incomparable ' +
          'procedures — a self-administered questionnaire on one side, interview and observation ' +
          'on the other. You are translating, not measuring the same thing twice.',
      ],
    },
    {
      eyebrow: 'Model A',
      title: 'Eight positions instead of four',
      paragraphs: [
        'Model A distributes the eight elements across eight positions, grouped into four blocks ' +
          'defined by two questions: are you strong at this, and do you want this. Ego (1–2) is ' +
          'strong and wanted; Super-Ego (3–4) weak and unwanted; Super-Id (5–6) weak and wanted; ' +
          'Id (7–8) strong and unwanted. It is that second axis — wanting — that MBTI does not ' +
          'have.',
      ],
      points: [
        '1 · base, Ni — the usual convergence: the outcome arrives whole, ahead of the ' +
          'justification.',
        '2 · creative, Te — the tool you operate the world with: criteria, cuts, delivery.',
        '3 · role, Si — comfort, health, a cared-for environment. You can hold it up for an ' +
          'hour, badly, and it leaves you drained.',
        '4 · vulnerable, Fe — the collective emotional weather. You do not read it, do not ' +
          'produce it, and criticism here lands as personal aggression.',
        '5 · suggestive, Se — force, pace, physical presence. You do not generate it and you ' +
          'receive it with relief from whoever does.',
        '6 · mobilising, Fi — personal loyalties. Clumsy, valued, and energising when somebody ' +
          'switches it on.',
        '7 · ignoring, Ne — you can open ten alternatives and refuse to live in them.',
        '8 · demonstrative, Ti — you can build a flawless formal system and see no point ' +
          'whatsoever in talking about it.',
      ],
    },
    {
      eyebrow: 'Intertype relations',
      title: 'This is what the system was built for',
      paragraphs: [
        'By comparing two Model As position by position, socionics derives sixteen fixed ' +
          'relations — and this is the part Augustinavičiūtė actually cared about. The central ' +
          'prediction is duality: your ideal partner is whoever leads with what sits in your ' +
          'positions 5 and 6. For the ILI that is the <strong>SEE</strong> (Se–Fi, “Napoleon”), ' +
          'who delivers force and personal attachment exactly where you are weak and hungry.',
        'At the other end, your conflictor is whoever leads with your vulnerable function: for ' +
          'the ILI, the <strong>ESE</strong> (Fe–Si), who lives off precisely the group warmth ' +
          'you cannot process. Your mirror is the <strong>LIE</strong> (Te–Ni, the same pair ' +
          'reversed) and your activity partner the <strong>ESI</strong> (Fi–Se). The four ' +
          'together form the Gamma quadra.',
        'One detail worth recording without making a noise about it: the elements valued by the ' +
          'Gamma quadra are Ni, Se, Te and Fi — letter for letter, the four functions of the ' +
          'MBTI INTJ stack. That is a meeting of conventions, not a convergent discovery; two ' +
          'systems derived from Jung rediscovering the same quartet prove nothing about each ' +
          'other. But it is elegant, and worth knowing that the elegance comes from common ' +
          'ancestry.',
        'None of it has been tested. There is no controlled study showing that dual couples last ' +
          'longer, that conflicting pairs fight more, or that two independent typings of the same ' +
          'person agree. Duality is a prediction the model makes and nobody has checked.',
      ],
    },
    {
      eyebrow: 'What does not hold',
      title: 'Where socionics stops',
      paragraphs: [
        'Such peer review as exists is endogenous: the journals were founded by the field ' +
          'itself, and the system is absent from the international literature. No published ' +
          'samples, no norms, no reliability ' +
          'coefficients, no predictive validity study. Outside the post-Soviet space the system ' +
          'is practically unknown, and where it is known it is not accepted as psychology. The ' +
          'standing encyclopaedia entry records this without hedging.',
        'Internally the field is fragmented: schools disagree about the structural model, about ' +
          'Reinin’s fifteen dichotomies, about the dimensionality theory of the functions — ' +
          'elaborations built on elaborations, none of them anchored to data. And typing is done ' +
          'by interview and observation with no established inter-rater reliability: two ' +
          'socionists can type the same person differently and there is no referee.',
        'There is also a foundation problem. Converting INTJ into ILI presupposes that Myers’ ' +
          'stack is correct, and Myers’ stack is itself a theoretical construction with weak ' +
          'evidence behind it. You are laying one unvalidated map over another unvalidated map. ' +
          'The precision of the notation — eight positions, sixteen relations, four quadras — is ' +
          'not evidence of anything; it is only precise notation.',
      ],
    },
  ],

  verdict: {
    title: 'What socionics adds',
    text:
      'Resolution, and nothing else — but the resolution is real. Where the four-slot stack ' +
      'calls everything in the cellar “inferior”, Model A separates two things that are not the ' +
      'same: the weak-and-wanted (Se — presence, pace, physical force, which you gladly accept ' +
      'from whoever has it) and the weak-and-painful (Fe — the emotional weather of a group, ' +
      'where any criticism lands as an attack). The INTJ who confuses the two spends years ' +
      'trying to develop warm sociability when what was missing was body, pace and presence. And ' +
      'socionics risks a relational prediction that MBTI refuses to make — which is an ' +
      'intellectual virtue even when the prediction is wrong, because a wrong prediction is ' +
      'falsifiable and a vague description is not.',
    weight:
      'Low, and not for being foreign: for being untested. No peer review, no samples, no ' +
      'inter-rater reliability, no study of duality. Use it as vocabulary — the distinction ' +
      'between weak-wanted and weak-painful stays useful even if the whole system is wrong. ' +
      'Never use it as confirmation of a type, and distrust any text that presents ILI and INTJ ' +
      'as the same thing said in two languages.',
  },
};
