import type { SourceId } from '../sources';
import type { CompatibilityContent } from '../types';

export const COMPATIBILIDADE_EN: CompatibilityContent = {
  meta: {
    title: 'Compatibility — three axes, the rule and what the research says | INTJ',
    description:
      'Recognition, complement and livability measured separately for the INTJ against all ' +
      'sixteen types, with the rule printed on top — and the three traditions that name three ' +
      'different ideal partners, none of them measured.',
  },

  sources: [
    'dyrenforth-2010',
    'montoya-2008-similarity',
    'montoya-horton-2013',
    'kong-2010-mbti-couples',
    'keirsey-1998',
    'keirsey-bates-1978',
    'wikisocion-ili',
    'wikipedia-socionics',
    'augustinaviciute-1998',
    'grant-1983',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-ethics',
    'myers-briggs-company',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 10 — Compatibility',
    title: 'Three axes, and the rule\nthat produces them',
    lede:
      'You came for the percentage. It does not exist — pairing four-letter codes and following ' +
      'what happens to the couples has been done, it is very little, and it supports no ranking ' +
      'at all; anyone publishing a round number per pairing is making it up. This page has been ' +
      'wrong twice, and both corrections are here. The first version used a single index of ' +
      'function overlap, and an overlap index rewards sameness: first place was always ' +
      '<strong>another INTJ</strong>. The second split the ruler in two — ' +
      '<strong>recognition</strong>, how easily you are understood without translating, and ' +
      '<strong>complement</strong>, how much the other person supplies that your stack does not ' +
      'generate alone — and fell into the symmetrical error: with nothing measuring what daily ' +
      'life costs, it recommended your opposite on all four letters. Hence the third axis. ' +
      '<strong>Livability</strong> measures how much of ordinary life needs no negotiating.',
  },

  intro:
    'The rules are published before the numbers and recomputable by hand in a minute: it is the ' +
    'only honest way to build a page like this. No type occupies all three corners at once, and ' +
    'that is not a defect in the arithmetic — it is the shape of the sixteen stacks. The mirror ' +
    'understands you without translating and shares every one of your preferences, and still ' +
    'lands mid-table, because it extends you in nothing. The ESFP holds your four functions in ' +
    'nearly inverted order and is your opposite on all four letters: it comes last. And the ' +
    'ENFP, which the entire internet sold you as destiny, is not first, or near it. <strong>The ' +
    'order is a reading order, not a verdict.</strong> The evidence section, which comes before ' +
    'the table on purpose, explains why none of it predicts anything about your life.',

  caveat:
    'These three axes are a construction of this site. They measure nothing. Pairing MBTI types to ' +
    'predict the satisfaction, duration or quality of a relationship has been attempted, and the ' +
    'little that exists supports no ranking at all: in a study of 62 couples in clinical care, ' +
    'type similarity between spouses produced no significant difference in marital satisfaction, ' +
    'positive affect or conflict regulation (Kong, 2010). The foundation that safeguards the use ' +
    'of the instrument — which is not the company that publishes it — is explicit that it was not ' +
    'designed to select people and that it does not measure ability, competence or skill. ' +
    'The four-function stacks the rules operate ' +
    'on come from Grant, Thompson and Clarke (1983): they are one model’s convention, not an ' +
    'experimental finding, and type dynamics is precisely the part of the MBTI with the weakest ' +
    'evidential record. Read recognition as vocabulary overlap between two heads, and complement ' +
    'as a theoretical bet about what is missing from yours. It is not a prediction, it is not ' +
    'advice, and it is not permission to end anything.',

  formula: {
    eyebrow: 'The rules',
    title: 'How each number was produced',
    intro:
      'The rules operate on the four-function stacks — <strong>Ni · Te · Fi · Se</strong> in your ' +
      'case — following Grant, Thompson and Clarke’s convention. Two properties of those stacks ' +
      'make the sum simple and checkable. First: <strong>every type carries exactly one function ' +
      'from each axis</strong> — one intuition, one sensing, one thinking, one feeling. Second: ' +
      'the two perceiving functions in a stack always hold opposite attitudes, which means ' +
      '<strong>no type carries Se and Ne at the same time</strong>. Recognition walks your four ' +
      'functions and asks where each one sits in the other stack. Complement walks three things ' +
      'your stack does not supply and asks how much of each the other person has. Livability ' +
      'does not look at functions at all: it looks at the four letters, which is where the cost ' +
      'of a Tuesday lives. All three run 0 to 100, and no type leads more than one.',
    rules: [
      {
        label: 'Starting point, on all three axes',
        delta: '0',
        note: 'Nothing is given. An earlier version of this page opened every pair at 40 so the table would sit inside a tidy range, and that was cosmetics: three zeroes tell the truth.',
      },
      {
        label: 'Recognition · weight of each of your functions',
        delta: 'Ni 40 · Te 30 · Fi 20 · Se 10',
        note: 'The axis asks how much of you the other person also runs, and your four functions are not worth the same: Ni is the command and Se is the remainder. The weights sum to exactly 100, which is the ceiling of the axis.',
      },
      {
        label: 'Recognition · discount for positional distance',
        delta: '×1 · ×0.7 · ×0.4 · ×0.1',
        note: 'Same position in the stack pays the full weight; one place apart pays 70%; two, 40%; three, 10%. Te second in both is the same criterion at the same moment of the decision; Te second against Te fourth is the same tool with one of them nearly mute.',
      },
      {
        label: 'Recognition · function of inverted attitude',
        delta: '×0.35',
        note: 'Ne is not Ni and Ti is not Te — but neither is it absence, and this line used to pay ×0. Zeroing it put INTP, ENTP, ISFJ and ESFJ on exactly the same figure, which claimed an INTP is as unrecognisable to you as an ESFJ. Nobody believes that. A third of the weight: reasoning from internal consistency and reasoning from effectiveness are both still reasoning, in a way neither shares with somebody reading the room.',
      },
      {
        label: 'Complement · Se, the body and the now',
        delta: '30 · 50 · 28 · 6',
        note: 'Your inferior function, by where it sits in their stack — and <strong>the peak is the auxiliary, not the dominant</strong>. This line used to pay most for the person who leads with your inferior, and that was the page’s central error: theory calls it maximum complement; a shared kitchen calls it translating every day. Se in second place gets you out of the house on a Saturday. Se in first place lives there, and you are the visitor.',
      },
      {
        label: 'Complement · Ne, the option kept open',
        delta: '18 · 30 · 17 · 4',
        note: 'Applies to the stacks that carry Ne instead of Se — the two never coexist. Ne substitutes for part of the service: it reopens the plan Ni has closed, but it returns nobody to their body. Same curve, lower ceiling.',
      },
      {
        label: 'Complement · Fe, warmth said outward',
        delta: '18 · 30 · 17 · 4',
        note: 'The one judging function your stack holds in no version at all. Zero for anyone running Fi: you already have Fi, and more Fi solves nobody’s problem of nothing being said out loud.',
      },
      {
        label: 'Complement · extroverted dominant',
        delta: '+10',
        note: 'Flat, no scale. Somebody has to go towards the world first, and your stack opens with an introverted function that only moves once it has converged. It paid +20 and was cut for the same reason as the Se curve: going first helps, going always exhausts.',
      },
      {
        label: 'Livability · preferences in common',
        delta: 'I/E 30 · J/P 30 · N/S 25 · T/F 15',
        note: 'The axis that was missing. The other two answer "does this person understand me" and "does this person extend me"; neither answers "what is a Tuesday like", and a ranking built from those two alone recommended your opposite on all four letters. The weights are what each preference costs an INTJ, not symmetry: introversion decides how much of the week is recovery, J/P decides whether a plan is a plan. T/F last, the most negotiable of the four.',
      },
      {
        label: 'The combined figure',
        delta: 'mean − 0.45 × (highest − lowest)',
        note: 'The mean of the three axes, less almost half the distance between the best and the worst. The deduction is what stops the mean recommending you to yourself: the mirror scores 100 · 6 · 100 and would ride up on two of them. A pairing has to be worth something on all three. <strong>It is a reading order, not a verdict</strong> — and nobody on the table clears 45.',
      },
    ],
    disclaimer:
      'The weights were chosen, not derived. They came from no data at all: they came from what ' +
      'type theory claims about awareness and control at each position in the stack — and that ' +
      'theory is, within the MBTI, exactly the part with the least empirical support. Try it: ' +
      'swap the 0.7 rung for 0.5 and the ENTJ falls from 70 to 50, level with the ISTJ, and half ' +
      'the reading of this page changes meaning. Two further things deserve saying out loud, ' +
      'because they are the rule confessing what it is. First: recognition reaches 100 exactly ' +
      'once in sixteen, and it does so in the mirror — the ceiling of that axis is a warning, not ' +
      'a prize. Second: complement never reaches 100, and the real maximum is 82, at the ESTP. ' +
      'That is not a compressed scale; it is structure. A dominant Se and a dominant Fe do not ' +
      'fit in the same stack, so the thing you most lack and the second thing you most lack will ' +
      'never be delivered by the same person. No four-letter code solves you.',
  },

  evidence: {
    eyebrow: 'What the research shows',
    title: 'The best news on this page is that the numbers do not matter',
    paragraphs: [
      'There is one study large enough to settle the argument, and it is not about the MBTI — it ' +
        'is about personality in general, which is where the data live. Dyrenforth, Kashy, ' +
        'Donnellan and Lucas (2010) used nationally representative samples of married couples in ' +
        'Australia, the United Kingdom and Germany — 23,250 people, around eleven thousand six ' +
        'hundred couples — to separate three things that almost always ' +
        'arrive tangled: the effect of a person’s own traits, the effect of the partner’s traits, ' +
        'and the effect of the <em>similarity</em> between the two. The third is what pages like ' +
        'this one sell. With the first two accounted for, it explained <strong>less than 0.5% of ' +
        'the variance</strong> — in relationship satisfaction and in life satisfaction too. Less ' +
        'than half of one per cent. What predicted satisfaction was each person’s own traits: ' +
        'a person’s own accounted for around 6% of the variance in relationship satisfaction; the ' +
        'partner’s, for 1% to 3% — and there the heaviest were agreeableness, conscientiousness ' +
        'and emotional stability.',
      'Notice what that does to the recognition axis in particular. It is, by construction, a ' +
        'measure of similarity — and similarity is precisely the variable that barely showed up. ' +
        'The complement axis fares no better: nobody has measured that either, and the notion ' +
        'that opposites complete each other has, in the literature, even less support than the ' +
        'notion that likes understand each other. Both axes on this page are in the same boat, ' +
        'and the boat is a theoretical construction.',
      'The nuance comes from Montoya, Horton and Kirchner (2008), a meta-analysis of similarity ' +
        'and attraction. It does attract: the effect is robust when what is measured is ' +
        '<strong>initial attraction</strong>, especially in designs where one person rates ' +
        'another they have not really met. In existing relationships, the effect of <em>actual</em> ' +
        'similarity stops showing up, and what goes on predicting there is <em>perceived</em> ' +
        'similarity. Which is to say: similarity predicts well who you will find interesting in ' +
        'the first conversation, and badly how the two of you will be doing in year three. The ' +
        'table below, and every compatibility list ever handed to you as an INTJ, measures the ' +
        'first thing and sells it as the second.',
      'Translated into your life, without hedging: <strong>you do not need to find an ' +
        'ENFP.</strong> There is no right person waiting with the correct four letters, and you ' +
        'owe nobody an explanation for having fallen for an ISFJ. The useful question was never ' +
        'which letters — it is whether both people are mature enough, and maturity here has a ' +
        'practical, uncomfortable definition: knowing what you feel before anyone asks, saying it ' +
        'before it turns into filed resentment, and changing the plan when the data change. None ' +
        'of those three is a function of a four-letter code. All three are a function of work ' +
        'done — which is, point for point, what the Journey page is about.',
      'And to close the circle honestly: almost none of this tested type. What exists is little, ' +
        'small and unreplicated, and nothing in it supports a ranking by four-letter code. Anyone ' +
        'trying to do better would hit an earlier problem ' +
        'first: readministered a few weeks apart, the instrument returns at least one different ' +
        'letter for close to half of people in the classic studies, and type dynamics — the very ' +
        'basis both of this page’s rules are built on — has never assembled consistent evidence. ' +
        'The Myers & Briggs Foundation is explicit: the instrument was not designed to select ' +
        'people and does not measure ability or competence. A compatibility page is precisely ' +
        'that, selection and ' +
        'prediction. Which is why it appears here with the rules printed over the top of it, ' +
        'rather than as a lone number on a screen.',
    ],
    points: [
      'Dyrenforth et al. (2010), 23,250 married people in Australia, the United Kingdom and ' +
        'Germany: with each person’s own traits accounted for, similarity between partners ' +
        'explains less than 0.5% of the variance in relationship satisfaction — and in life ' +
        'satisfaction.',
      'What predicted satisfaction was each person’s own traits: their own, around 6% of the ' +
        'variance; the partner’s, 1% to 3% — the latter largest for agreeableness, ' +
        'conscientiousness and emotional stability.',
      'Montoya, Horton & Kirchner (2008): actual similarity predicts initial attraction and stops ' +
        'predicting in existing relationships — there, only perceived similarity holds up.',
      'The few studies that have paired MBTI types and measured satisfaction support no ranking ' +
        'at all. These two axes measure nothing either.',
      'The Myers & Briggs Foundation: the instrument was not designed to select people and does ' +
        'not measure ability, competence or skill.',
    ],
  },

  traditions: {
    eyebrow: 'Who has already answered this',
    title: 'Three traditions, three ideal partners, and no measurement',
    intro:
      'The question “what is the INTJ’s ideal match” has been answered confidently by several ' +
      'models, and this is where it gets interesting: <strong>they do not agree with each ' +
      'other</strong>. They do not disagree over detail — they disagree over the middle letter. ' +
      'If three formalised systems point at three different people, the question does not have an ' +
      'answer hidden somewhere: the question is malformed. The disagreement is worth looking at ' +
      'closely, because it dissolves the subject better than any footnote could.',
    items: [
      {
        name: 'Keirsey',
        pick: 'ENFP — any Idealist',
        claim:
          'Keirsey works with four temperaments rather than function stacks, and the INTJ is ' +
          'always a Rational (NT). The pairing advice in Please Understand Me II (1998), ' +
          'inherited from Please Understand Me (1978), is that Rationals do best with Idealists ' +
          '(NF) — the same abstraction, the opposite handling of people. That is, ultimately, ' +
          'where almost all of the fame of INTJ × ENFP comes from.',
        note:
          'It is one author’s clinical hunch, presented as the fruit of decades of counselling ' +
          'and never submitted to an outcome test. Keirsey, incidentally, is also the one who ' +
          'warns hardest about the arrangement: he named the “Pygmalion project” after the ' +
          'tendency of each partner to reform the other in their own image, which is exactly what ' +
          'an INTJ does to an ENFP once the enthusiasm becomes an item on the audit.',
      },
      {
        name: 'Socionics',
        pick: 'ESFP — the SEE',
        claim:
          'Socionics has the most formalised duality theory of any of them, assembled by Aušra ' +
          'Augustinavičiūtė from the 1970s on an eight-function structure. And it does not agree ' +
          'with Keirsey. The INTJ’s functional analogue is the <strong>ILI</strong> — introverted ' +
          'intuition in the base position, extraverted logic as the creative function, the same ' +
          'Ni–Te pair — and the ILI’s dual is the <strong>SEE</strong>, the sensory-ethical ' +
          'extratim, the ESFP analogue. Not the ENFP: the ESFP. The ideal partner, in that ' +
          'tradition, is the person who lives in their body and says what they feel on the spot.',
        note:
          'And there is a disagreement inside the disagreement, worth knowing before citing this ' +
          'anywhere: the correspondence between socionics and the MBTI is disputed, and the J/P ' +
          'letters mean different things in the two systems. Mapped by stack, the INTJ becomes ' +
          'ILI and the dual is SEE (ESFP). Mapped by letters, the INTJ becomes LII, whose dual is ' +
          'ESE — the ESFJ analogue. Two routes inside one model, two different ideal partners, ' +
          'and the ENFP appears in neither. Duality has never been tested on real couples in a ' +
          'controlled design; the correspondence between the systems itself is estimated at ' +
          'something near 30% of cases.',
      },
      {
        name: 'Community consensus',
        pick: 'ENFP',
        claim:
          'In forums, subreddits and MBTI videos, INTJ × ENFP circulates as the “golden pair” ' +
          'with a technical-sounding argument: the two supposedly share the same functions in ' +
          'swapped order. It is worth checking that claim against the stacks, because it is ' +
          'false. You are Ni · Te · Fi · Se; the ENFP is Ne · Fi · Te · Si. The shared functions ' +
          'are two, Te and Fi, with their priorities reversed — and the perceiving axis, where ' +
          'each of you is strongest, is inverted in attitude.',
        note:
          'Folklore, and it should be treated as such: there is no publication, no data and no ' +
          'instrument behind it. Where the genealogy is traceable it runs back to Keirsey by way ' +
          'of the internet — NT with NF — and not to any measurement. One true thing survives in ' +
          'the middle of it: with Fi second, the ENFP genuinely is one of the few types who read ' +
          'your flat tone correctly. That is an observation about mechanism, not evidence about ' +
          'outcomes.',
      },
      {
        name: 'Official MBTI',
        pick: 'None',
        claim:
          'The tradition with the strongest claim to the acronym is the one that refuses to ' +
          'answer. Myers published no table of couples in Gifts Differing (1980); the 1998 manual ' +
          'carries no compatibility coefficient between types; and the Myers & Briggs Foundation ' +
          'states explicitly that all types are equally valuable, that results are never to be ' +
          'used to limit anyone, and that the instrument was not designed to select people, ' +
          'because it does not measure ability, competence or skill.',
        note:
          'It is the dullest of the four positions and the only defensible one. What the official ' +
          'literature offers is vocabulary for describing friction after it shows up — not a ' +
          'criterion for choosing somebody beforehand. And Pittenger’s (2005) warning closes the ' +
          'subject: the more generic the description of a pairing, the truer it reads to whoever ' +
          'is already in one.',
      },
    ],
    verdict:
      'Three models, three different ideal partners — ENFP, ESFP and, inside the same socionics ' +
      'by the other mapping route, ESFJ — plus a fourth tradition that refuses to name anyone. ' +
      'None of the three guesses has been measured: no cohort, no follow-up, no outcome. When ' +
      'independent models disagree like that about a question none of them has tested, the ' +
      'disagreement is the finding. That, and not the table below, is what you should take away ' +
      'from this page.',
  },

  axes: {
    combined: {
      label: 'Combined',
      note: 'The mean of the three axes, less almost half the distance between the highest and the lowest — you can check the arithmetic against the three figures on the same row. The deduction is the reason there are three axes: <strong>recognition without complement is a mirror, complement without livability is a daily effort</strong>, and neither is a match. Nobody comes near 100, and nobody scores zero.',
    },
    recognition: {
      label: 'Recognition',
      note:
        'How much of your stack the other person also runs — how far you are understood without ' +
        'translating. It saturates at 100 exactly once, in the mirror, and the mirror is one of ' +
        'the worst pairings on the page. That is the reason the axis stands on its own.',
    },
    complement: {
      label: 'Complement',
      note:
        'How much the other person supplies that a Ni–Te–Fi–Se stack does not generate alone: the ' +
        'physical present of inferior Se, the outward warmth Fe produces and you do not have, the ' +
        'reopened plan, somebody who goes first. The real ceiling is 82, and nobody delivers ' +
        'everything.',
    },
    livability: {
      label: 'Livability',
      note: 'How much of daily life needs no negotiating, measured by the preferences you hold in common. It is the axis that was missing, and the one that changed the table most: the ESFP is your opposite on all four letters, scores 0 here, and drops from second place to last. Note that the mirror scores 100 — and still lands ninth, because it extends you in nothing.',
    },
  },

  labels: {
    index: 'The two axes, type by type',
    stack: 'Stack',
    breakdown: 'How the two numbers were made',
    attracts: 'What draws you in',
    friction: 'Where it grinds',
    theyNeed: 'What they need from you',
    youNeed: 'What you need from them',
    failure: 'How this pairing usually fails',
  },

  types: {
    INTP: {
      stack: 'Ti · Ne · Si · Fe',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 2nd',
          sign: '−',
          note: 'Intuition of inverted attitude: you converge on one exit, they open twenty.',
        },
        {
          pair: 'Te 2nd ↔ Ti 1st',
          sign: '−',
          note:
            'A logic of effectiveness against a logic of internal coherence. The argument is ' +
            'about what counts as “solved”.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 4th',
          sign: '−',
          note: 'Private value against the mood of the room.',
        },
        {
          pair: 'Se 4th ↔ Si 3rd',
          sign: '−',
          note: 'The physical present against the body’s memory. No Se, no complement on this line.',
        },
        {
          pair: 'Dominant Ti — introverted',
          sign: '·',
          note: 'Nobody in this pairing goes towards the world first.',
        },
      ],
      attracts:
        'The conversation. Worth saying out loud, because the whole page depends on your taking ' +
        'the numbers without taking them as a verdict: the INTP scores zero recognition and 24 ' +
        'complement — on paper the poorest pairing in the table — and is still probably the best ' +
        'conversation you will ever have. They follow your entire model without asking for a ' +
        'summary and then find the hole you had not seen, with no agenda and no wish to win, ' +
        'simply because the hole was there.',
      friction:
        'Ne opens, Ni closes. Ti wants the impeccable argument, Te wants the argument delivered. ' +
        'You present a conclusion and they start examining premise three, which for you had been ' +
        'settled half an hour earlier. Neither of you is wrong; both are doing exactly what their ' +
        'own stack demands.',
      theyNeed:
        'That their unfinished thinking is not treated as indecision. They think aloud and revise ' +
        'in public; if every draft is received as a proposal to be evaluated, they stop showing ' +
        'the drafts — and what remains is silence, not agreement.',
      youNeed:
        'Somebody who tests your certainty without contesting anything. The INTP is the only type ' +
        'who takes your conclusion apart for intellectual pleasure rather than for position, and ' +
        'Ni desperately needs that service.',
      failure:
        'Nothing gets decided. Two introverts who consider logistics a lesser task talk for six ' +
        'hours and nobody books the ticket. Then you start executing alone, and they experience ' +
        'that as being steamrollered; they raise an objection of principle to something you have ' +
        'already set in motion, and you experience that as obstruction. The pairing does not end ' +
        'in a row: it ends in two people who love talking to each other and could not build a ' +
        'life together.',
    },

    ENTJ: {
      stack: 'Te · Ni · Se · Fi',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 2nd',
          sign: '+',
          note: 'The same long-range vision, running second for them.',
        },
        {
          pair: 'Te 2nd ↔ Te 1st',
          sign: '+',
          note: 'The same criterion of effectiveness, in their command seat.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 4th',
          sign: '+',
          note: 'The same private compass, even more mute in them.',
        },
        {
          pair: 'Se 4th ↔ Se 3rd',
          sign: '+',
          note: 'Your inferior is their tertiary, one rung less blind.',
        },
        {
          pair: 'Dominant Te — extraverted',
          sign: '+',
          note: 'They go towards the world first. But no Fe: nobody here manages the temperature of the room.',
        },
      ],
      attracts:
        'There is no translation to do. You say something hard at full speed and it lands as ' +
        'information, not as aggression. It is the specific relief of not having to wrap anything ' +
        '— and of watching somebody take your half-finished idea and already be moving people ' +
        'with it.',
      friction:
        'Command. Two people who have already decided, and the same function in first and second ' +
        'place means you arrive at the same place along routes with swapped priorities: you want ' +
        'the model closed before moving, they want to move in order to discover the model. Each ' +
        'reads the other as reckless, for different reasons.',
      theyNeed:
        'To know the plan exists before you have finished it. The ENTJ reads silence as a vacuum ' +
        'and a vacuum as an invitation — if you do not say you are thinking, they will already ' +
        'have decided for two, and not out of bad faith: out of horror at stalled time.',
      youNeed:
        'Their willingness to start with the model at seventy per cent, which is the exact ' +
        'antidote to your habit of losing years perfecting the plan. And the social front they ' +
        'run for free, which would cost you the entire day.',
      failure:
        'It turns into a company rather than a relationship. Two competent operators, a full ' +
        'diary, a clean division of responsibilities — and Fi third in one and fourth in the ' +
        'other, which means <em>nobody</em> in this pairing holds the function that says the ' +
        'feeling part. The years pass with remarkable efficiency and one day one of you notices ' +
        'that the last conversation about the relationship itself was in the previous decade.',
    },

    ENTP: {
      stack: 'Ne · Ti · Fe · Si',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 1st',
          sign: '−',
          note: 'Two intuitive dominants pointing opposite ways: one branches, one narrows.',
        },
        {
          pair: 'Te 2nd ↔ Ti 2nd',
          sign: '−',
          note: 'Same position, inverted logic: delivering against proving.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 3rd',
          sign: '−',
          note: 'Own value against the harmony of the room.',
        },
        {
          pair: 'Se 4th ↔ Si 4th',
          sign: '−',
          note:
            'Each inferior is the other’s function inverted. Neither returns the other to their ' +
            'body.',
        },
        {
          pair: 'Dominant Ne — extraverted',
          sign: '+',
          note: 'They start the sentence, always.',
        },
      ],
      attracts:
        'The most enjoyable person you will ever disagree with, and the numbers say why: zero ' +
        'recognition, 62 complement. Nothing in them confirms you and almost everything in them ' +
        'reopens what you closed. The ENTP pulls you out of the house and into subjects you had ' +
        'discarded too early, and does it weightlessly — nothing about them requires you to be ' +
        'pleasant first.',
      friction:
        'They debate for sport, you debate to conclude. Four axes, four opposite attitudes: along ' +
        'with the INTP, ISFJ and ESFJ, this is one of the four profiles that share not a single ' +
        'function with you. Everything that looks like similarity here is a coincidence of ' +
        'subject matter.',
      theyNeed:
        'That the half-formed idea is not received as a proposal you now have to assess. Ne ' +
        'throws hypotheses out to see what happens; your instant feasibility verdict kills their ' +
        'process — and they will not say so, they will simply go and play with somebody else.',
      youNeed:
        'Somebody who breaks your certainty with no intention of breaking it. They do it ' +
        'naturally, and Ni gets far worse when it goes too long without contradiction from ' +
        'outside.',
      failure:
        'Erosion over unfinished subjects, and then, all at once, the red line. They keep testing ' +
        'where the boundary of what you find funny sits, because testing boundaries is their mode ' +
        'of operation and not a personal provocation. One day they cross something Fi holds ' +
        'non-negotiable. You close it silently, entirely and without a scene — and they genuinely ' +
        'did not see it coming, because to them it had been a sentence.',
    },

    INFJ: {
      stack: 'Ni · Fe · Ti · Se',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 1st',
          sign: '+',
          note:
            'The full weight of your dominant: the same certainty that arrives before the ' +
            'explanation.',
        },
        {
          pair: 'Te 2nd ↔ Ti 3rd',
          sign: '−',
          note: 'You organise the world outside, they organise coherence inside.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 2nd',
          sign: '−',
          note: 'Private value against the mood of the group.',
        },
        {
          pair: 'Se 4th ↔ Se 4th',
          sign: '+',
          note: 'The same inferior in the same place.',
        },
        {
          pair: 'Dominant Ni — introverted',
          sign: '·',
          note: 'Two silences waiting for the other to begin.',
        },
      ],
      attracts:
        'Being read correctly, which practically never happens to you. The INFJ understands the ' +
        'long silence because they run the same silence, and does not ask you to explain how you ' +
        'reached the conclusion — they arrive at conclusions by the same indefensible route. It ' +
        'is the pairing in which you justify yourself least, and the only one outside the mirror ' +
        'where your dominant pays its full weight.',
      friction:
        'Where Ni points. Your aim is systems, theirs is people. Then the judging axis: you say ' +
        'the true thing, they manage the room. They will think you were needlessly harsh; you ' +
        'will think they preferred everyone’s comfort to the correct information. Both of you ' +
        'will be right.',
      theyNeed:
        'Warning before the verdict. If you are about to say something final about somebody they ' +
        'love, say that you are about to. And when you go mute, an explicit signal that it is not ' +
        'anger — Fe reads silence as the state of the relationship, not the state of your brain.',
      youNeed:
        'Their translation service. The INFJ can tell you what a room felt, and that is ' +
        'information you simply do not collect. It is the closest thing to an extra sense you ' +
        'will get access to.',
      failure:
        'Two identical dominants sharing one blind spot: with Se fourth in both — complement 5 on ' +
        'that line, the floor of the table — nobody tends the concrete, and material life ' +
        'degrades while both heads are five years from here. And there is the silent ending: the ' +
        'INFJ absorbs your bluntness for years without presenting a bill, then takes the decision ' +
        'alone and leaves intact — the same door you would slam. Nobody fought. Both filed.',
    },

    INFP: {
      stack: 'Fi · Ne · Si · Te',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 2nd',
          sign: '−',
          note: 'One intuition closes, the other opens.',
        },
        {
          pair: 'Te 2nd ↔ Te 4th',
          sign: '+',
          note: 'The same logic of effectiveness, inferior in them — and therefore a tender spot.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 1st',
          sign: '+',
          note: 'The same kind of private value, dominant in them and nearly mute in you.',
        },
        {
          pair: 'Se 4th ↔ Si 3rd',
          sign: '−',
          note: 'The body now against the stored impression of the body. No Se, no complement.',
        },
        {
          pair: 'Dominant Fi — introverted',
          sign: '·',
          note: 'Two people who know what they feel and do not mention it.',
        },
      ],
      attracts:
        'Fi meeting Fi. The INFP says out loud, easily and without embarrassment, exactly the ' +
        'sort of thing you have carried for thirty years without managing to formulate. Hearing ' +
        'your own function dominate a conversation is a strange and good experience — and note ' +
        'that it pays only 8 points of recognition, because two places apart in the stack is a ' +
        'long way apart.',
      friction:
        'Te is your second function and their inferior. Your ordinary criticism — the kind you ' +
        'consider neutral information about the work — lands on the most fragile point of their ' +
        'stack. You are not attacking; they are not being oversensitive. The architecture is ' +
        'simply like that.',
      theyNeed:
        'That criticism of the work does not arrive as a verdict on the person. One separating ' +
        'sentence solves nearly everything here: “this is about the text, not about you.” It ' +
        'sounds redundant to you. It is not, to them.',
      youNeed:
        'Language for the inside. They have, effortlessly, the vocabulary your third function ' +
        'will take two decades to assemble — and using it nearby is the cheapest way to learn.',
      failure:
        'The division of labour turns into mutual contempt. You take on the competence of the ' +
        'pair, they take on the feelings of the pair, and each of you stops developing the ' +
        'function the other is covering. The script takes over: you are the cold one, they are ' +
        'the scattered one. Neither of you was that when it started.',
    },

    ENFJ: {
      stack: 'Fe · Ni · Se · Ti',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 2nd',
          sign: '+',
          note: 'The same intuition one rung down. They see far and move people.',
        },
        {
          pair: 'Te 2nd ↔ Ti 4th',
          sign: '−',
          note: 'External effectiveness against internal coherence, and theirs is last in the queue.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 1st',
          sign: '−',
          note: 'Their dominant is the opposite attitude of your third function.',
        },
        {
          pair: 'Se 4th ↔ Se 3rd',
          sign: '+',
          note: 'They get you out of the chair.',
        },
        {
          pair: 'Dominant Fe — extraverted',
          sign: '+',
          note: 'They go towards people first, always.',
        },
      ],
      attracts:
        'Somebody who sees the future the way you do <em>and</em> can move an entire room towards ' +
        'it. It is the largest complement in the table after the ESTP, level with the ESFP, and ' +
        'the only case where it arrives alongside high Ni: the ENFJ takes on all the social ' +
        'upkeep without your asking, and what they want in return is participation, not ' +
        'performance.',
      friction:
        'Dominant Fe measures the bond by the response it gets. Your recharging silence registers ' +
        'on that gauge as withdrawal, and they will start repairing a relationship that was not ' +
        'broken — which breaks it. You, on the other side, feel their concern as a demand and ' +
        'withdraw further.',
      theyNeed:
        'Verbal confirmation with some regularity. That is not neediness: Fe reads the state of ' +
        'the bond from what is expressed, and in the absence of expression the reading is always ' +
        'the worst one. One sentence a week does work you would otherwise spend months undoing.',
      youNeed:
        'The real-time reading of people they perform, and the physical push out of the house. ' +
        'With Se third, they are the type who can get you off the chair without it feeling like ' +
        'an assault on your diary.',
      failure:
        'They manage you. Slowly, with good intentions and no plan: it starts with editing your ' +
        'sentence for the group, moves on to editing your diary, and ends with editing you. You ' +
        'do not notice for years, because the administration is competent and the social result ' +
        'is better. Then one day you do — and Fi does not treat that as a misunderstanding, it ' +
        'treats it as a violation of autonomy. There is no repair conversation after that filing.',
    },

    ENFP: {
      stack: 'Ne · Fi · Te · Si',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 1st',
          sign: '−',
          note: 'Both dominants on the same axis, pointing opposite ways.',
        },
        {
          pair: 'Te 2nd ↔ Te 3rd',
          sign: '+',
          note: 'The same logic of execution, one rung down.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 2nd',
          sign: '+',
          note: 'The same private value, articulate in them. The real bridge of this pairing.',
        },
        {
          pair: 'Se 4th ↔ Si 4th',
          sign: '−',
          note: 'The same inferior, inverted. Nobody in the now, and no complement here.',
        },
        {
          pair: 'Dominant Ne — extraverted',
          sign: '+',
          note: 'They open the conversation. But their warmth is Fi said loudly, not Fe.',
        },
      ],
      attracts:
        'The famous pairing. The numbers are 35 and 50: respectable on both axes, record-holder ' +
        'on neither, behind the ENFJ on complement and the ENTJ on recognition. And the ' +
        'attraction is still real, and it has a mechanism. The ENFP arrives with an energy you ' +
        'would not have to generate and, with Fi second, is one of the few people who read your ' +
        'flat tone correctly: they know “ok” was not coldness. That is rare enough to explain the ' +
        'pairing’s fame without needing any theory at all.',
      friction:
        'The dominant. Ne keeps options open because closing hurts; Ni has to close because ' +
        'open-endedness hurts. You share the two middle functions and diverge exactly where each ' +
        'of you is strongest, which is the worst possible place to diverge.',
      theyNeed:
        'That every enthusiasm does not pass through a feasibility audit. And to be chosen ' +
        'visibly: the ENFP needs to hear that they are the person, not deduce it from the fact ' +
        'that you have stayed around for four years.',
      youNeed:
        'Somebody who tears you away from the plan. It is the service they perform better than ' +
        'any other type, and the only reason you accept it is that they can do it without making ' +
        'you feel managed.',
      failure:
        'The commonest mode of all: you become the adult. They start things, you finish them; the ' +
        'accounting migrates to your side, the deadlines too, and the tiredness accumulates in ' +
        'Fi, where nobody sees it. You do not complain, because complaining would be admitting ' +
        'the arrangement is not working. And then, on a Tuesday, you end it in one sentence — and ' +
        'they are devastated, because the bill was totted up entirely in silence and they never ' +
        'had access to the statement.',
    },

    ISTJ: {
      stack: 'Si · Te · Fi · Ne',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 4th',
          sign: '−',
          note:
            'The intuition axis in opposite attitudes: you close the future down to one exit, and ' +
            'in them the branching sits at the bottom of the stack, where it only surfaces as ' +
            'imagined catastrophe.',
        },
        {
          pair: 'Te 2nd ↔ Te 2nd',
          sign: '+',
          note: 'The full weight: same function, same position. You decide by the same criterion.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 3rd',
          sign: '+',
          note: 'The full weight again. You value by the same criterion.',
        },
        {
          pair: 'Se 4th ↔ Si 1st',
          sign: '−',
          note:
            'The sensing axis inverted and at opposite ends: the physical present you barely ' +
            'register against the body’s memory that runs their whole life. The two perceptions ' +
            'face opposite ends of time.',
        },
        {
          pair: 'Dominant Si — introverted',
          sign: '·',
          note: 'Nobody goes first, and there is neither Fe nor Se. The thinnest complement on the page: two planners each waiting for the other to propose the weekend.',
        },
      ],
      attracts:
        'The judging axis is identical, position for position — 50 points of recognition coming ' +
        'entirely from Te and Fi, without a single point of intuition. There is nothing to ' +
        'translate about a promise, a time, a standard of finish, or what it means when somebody ' +
        'says they will do a thing. For a type who spends a life explaining its own criterion, ' +
        'finding somebody who already shares it is a rest that does not describe well.',
      friction:
        'Perception. They trust what has worked, you trust what will work. Every proposal of ' +
        'yours to redo the process arrives as an accusation against the process they built, and ' +
        'every defence of theirs arrives as a refusal to think.',
      theyNeed:
        'Evidence, not vision. Show the route, not the conclusion — and accept that “I am not ' +
        'convinced yet” is a legitimate and frequently sensible answer, not obstruction. Half ' +
        'your plans do deserve that degree of scepticism.',
      youNeed:
        'Somebody who executes unsupervised and holds all the detail you drop. The ISTJ is the ' +
        'reason half your ambitious plans reach the world instead of dying in a notebook. What ' +
        'they will not do is get you out of the house: complement 3, the lowest on the page.',
      failure:
        'It works so well operationally that nobody ever raises a question of meaning. Twenty ' +
        'years of a well-run house, bills paid, obligations met, and no conversation inside it. ' +
        'Then there is the slow mode: your proposals for reform, accumulated decade after decade, ' +
        'become for them a permanent verdict of insufficiency — and they will never say so out ' +
        'loud, because saying is not part of their repertoire.',
    },

    ISTP: {
      stack: 'Ti · Se · Ni · Fe',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 3rd',
          sign: '+',
          note: 'The same intuition two rungs down. They recognise it and cannot run it on demand.',
        },
        {
          pair: 'Te 2nd ↔ Ti 1st',
          sign: '−',
          note: 'Delivering against understanding. It makes for long arguments.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 4th',
          sign: '−',
          note: 'Two inverted valuing functions.',
        },
        {
          pair: 'Se 4th ↔ Se 2nd',
          sign: '+',
          note: 'Your inferior is their auxiliary — the second rung of the Se line.',
        },
        {
          pair: 'Dominant Ti — introverted',
          sign: '·',
          note: 'They will not invite you out; they will simply go out.',
        },
      ],
      attracts:
        'Total self-sufficiency. The ISTP asks for no upkeep, does not interpret silence, does ' +
        'not demand presence — and is competent with real objects in a way you admire without ' +
        'being able to imitate. The silence beside them is one of the very few genuinely ' +
        'comfortable silences available to your type.',
      friction:
        'They live in the present, you live five years out. Any plan you make for their weekend ' +
        'sounds like an imposition; any improvisation they propose for your Wednesday sounds like ' +
        'chaos.',
      theyNeed:
        'No plan imposed on the week. And their competence not to be appraised out loud — Ti ' +
        'solves alone and shows the result; commentary during the process is noise.',
      youNeed:
        'Their Se, which supplies 35 of this pairing’s 38 complement points. It is the weakest ' +
        'function in your stack running in second place right in front of you, every day, and ' +
        'watching it work is the most efficient way you will find to learn it.',
      failure:
        'Two people who never ask for anything gradually run out of things to say. Neither will ' +
        'start the difficult conversation, because neither considers it necessary — and the ' +
        'relationship does not end, it cools. It becomes an efficient arrangement between two ' +
        'independents, and only when one of them meets somebody else does it become clear how ' +
        'long it had been over.',
    },

    ESTJ: {
      stack: 'Te · Si · Ne · Fi',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 3rd',
          sign: '−',
          note: 'Your dominant corresponds, in them, to a tertiary and inverted function.',
        },
        {
          pair: 'Te 2nd ↔ Te 1st',
          sign: '+',
          note: 'The same criterion of effectiveness, in their command seat.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 4th',
          sign: '+',
          note: 'The same private compass, quieter still in them.',
        },
        {
          pair: 'Se 4th ↔ Si 2nd',
          sign: '−',
          note: 'The physical present against precedent. No Se, no complement on this line.',
        },
        {
          pair: 'Dominant Te — extraverted',
          sign: '+',
          note: 'They go first. But no Fe: the bluntness circulates, the warmth does not.',
        },
      ],
      attracts:
        'Nobody has to be diplomatic. Decisions get taken, written down and executed, and ' +
        'bluntness travels in both directions without anyone taking offence. For you, who spend a ' +
        'life calibrating tone, that is a considerable saving of energy.',
      friction:
        'Te first against Te second: it is a jurisdictional dispute, not a dispute about ideas. ' +
        'And their perception is Si — the proven procedure — while yours is Ni, the redesign. ' +
        'Every meeting between you has a moment when the discussion stops being about what to do ' +
        'and becomes about who decides.',
      theyNeed:
        'Respect for what already works, and the argument translated into outcome rather than ' +
        'elegance of model. “This cuts three weeks of rework” persuades; “this is structurally ' +
        'superior” persuades nobody who already has a system running.',
      youNeed:
        'Somebody who converts a plan into a schedule without being reminded, and who does not ' +
        'mistake your dryness for hostility because they run on the same frequency.',
      failure:
        'It becomes an administration. Two people defending positions instead of examining them, ' +
        'and every divergence escalates into a question of authority. With Fi third in one and ' +
        'fourth in the other, nothing gets repaired — only judged. The grievances sit filed in ' +
        'two different places, none of them ever read aloud, and the pairing dissolves with the ' +
        'logistics impeccable to the last day.',
    },

    ESTP: {
      stack: 'Se · Ti · Fe · Ni',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 4th',
          sign: '+',
          note: 'Your dominant is their inferior, and they experience it as a vague foreboding.',
        },
        {
          pair: 'Te 2nd ↔ Ti 2nd',
          sign: '−',
          note: 'Same position, inverted logic.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 3rd',
          sign: '−',
          note: 'Own value against the mood of the room.',
        },
        {
          pair: 'Se 4th ↔ Se 1st',
          sign: '+',
          note: 'Your inferior in their command seat and theirs in yours: the smallest recognition this line can produce.',
        },
        {
          pair: 'Dominant Se — extraverted',
          sign: '+',
          note: 'They start everything. It is the highest complement on the page — and it is worth reading the column beside it before drawing a conclusion from that.',
        },
      ],
      attracts:
        'The corner opposite yours, and the whole page points here: 5 recognition, 82 complement ' +
        '— no type delivers more of what you lack and none understands less of what you are. For ' +
        'the first few months that is hypnotic. The ESTP solves in fifteen minutes, in the ' +
        'physical world, with their body and without a model, a problem you would have planned ' +
        'for three weeks.',
      friction:
        'Everything after the first few months. They cannot wait and you cannot move, and neither ' +
        'is pretending. The argument is never about the subject of the argument: it is about ' +
        'time, always.',
      theyNeed:
        'Not to be treated as shallow for being fast. Se in first place is a high-precision ' +
        'function aimed at the real, and your tendency to confuse speed with a lack of depth is a ' +
        'prejudice of your own stack, not an observation about them.',
      youNeed:
        'Their Se in small doses. The structural problem of the pairing is that they only know ' +
        'how to offer it as a flood — and you absorb a flood of Se the way you absorb stress: ' +
        'badly, and late.',
      failure:
        'The maximum complement is expensive precisely because it is the maximum. Each is fluent ' +
        'exactly where the other is blind, which produces three electric months and then a ' +
        'currency that runs out. Neither can <em>hand over</em> their own strength to the other; ' +
        'they can only demonstrate it, which in time stops being admiration and becomes an ' +
        'accusation. It ends with both saying the same sentence in different versions: “you are ' +
        'never here.”',
    },

    ISFJ: {
      stack: 'Si · Fe · Ti · Ne',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 4th',
          sign: '−',
          note:
            'The intuition axis in opposite attitudes: you close the future down to one exit, and ' +
            'in them the branching sits at the bottom of the stack, where it only surfaces as ' +
            'imagined catastrophe.',
        },
        {
          pair: 'Te 2nd ↔ Ti 3rd',
          sign: '−',
          note: 'External effectiveness against internal coherence.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 2nd',
          sign: '−',
          note: 'Private value against expressed care, the most badly translated axis in the pairing.',
        },
        {
          pair: 'Se 4th ↔ Si 1st',
          sign: '−',
          note:
            'The sensing axis inverted and at opposite ends: the physical present you barely ' +
            'register against the body’s memory that runs their whole life. The two perceptions ' +
            'face opposite ends of time.',
        },
        {
          pair: 'Dominant Si — introverted',
          sign: '·',
          note: 'Zero shared functions: all four axes run in the opposite attitude.',
        },
      ],
      attracts:
        'Being cared for in concrete, unrequested acts — which is, by exact coincidence, the only ' +
        'language of affection you decode without effort, because it is the one you use yourself. ' +
        'Somebody notices you have not eaten. Somebody kept the document you were going to need. ' +
        'Recognition is zero and none of that stops being true.',
      friction:
        'Zero shared functions: all four axes run in the opposite attitude. They read your ' +
        'silence as displeasure and set about fixing it; you read their care as pressure and back ' +
        'away. Every repair movement aggravates exactly what it meant to solve.',
      theyNeed:
        'Recognition said, not implied. The ISFJ holds up the invisible structure of everything ' +
        'and will never claim credit; if you do not name what they do, they conclude they are not ' +
        'seen — and conclude it silently, for years.',
      youNeed:
        'To notice that somebody is keeping you alive. This is, without irony, the most useful ' +
        'item on the page for an INTJ who has spent a life convinced they depend on nobody.',
      failure:
        'They absorb, absorb, absorb and never formulate a request — and you, who act only on ' +
        'formulated requests, never act. Ten years later an entire list of grievances arrives, ' +
        'with dates, about things you would have corrected in a week if anyone had mentioned ' +
        'them. And worse: you will find that unfair, and they will find it obvious. It was ' +
        'obvious in their language.',
    },

    ISFP: {
      stack: 'Fi · Se · Ni · Te',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 3rd',
          sign: '+',
          note: 'Your dominant is their tertiary — they follow you, late and without control.',
        },
        {
          pair: 'Te 2nd ↔ Te 4th',
          sign: '+',
          note: 'The same logic of effectiveness, inferior in them. The tender spot of the pairing.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 1st',
          sign: '+',
          note: 'The same private value, in their command seat.',
        },
        {
          pair: 'Se 4th ↔ Se 2nd',
          sign: '+',
          note: 'Body, present, matter — the second rung of the Se line.',
        },
        {
          pair: 'Dominant Fi — introverted',
          sign: '·',
          note: 'Nobody goes first, and there is no Fe. The same four functions you hold, in nearly inverted order.',
        },
      ],
      attracts:
        'The same four functions, in nearly inverted order of importance — hence the two almost ' +
        'equal numbers, 40 and 35, with no peak on either axis. That means something specific and ' +
        'rare: nothing about them needs decoding, because everything they use you use too, only ' +
        'they begin at the end of your queue. They live in value and in the body; you live in the ' +
        'pattern and the plan. It is not attraction to difference: it is recognition in swapped ' +
        'order.',
      friction:
        'Te is their inferior. Your default register — evaluative, comparative, improvement-' +
        'oriented — lands on the most fragile place in the ISFP’s stack every time you open your ' +
        'mouth about their work. You call it feedback. They receive it as sentencing.',
      theyNeed:
        'No unrequested appraisal. None. If they show you something they made, the right answer ' +
        'is about what it is, never about what it could be — and you will have to hold that ' +
        'second sentence back by force, because it will already have formed.',
      youNeed:
        'Somebody who makes the present habitable. With Se second and Fi in command, the ISFP is ' +
        'the type who can return you to your body without turning it into a personal development ' +
        'project.',
      failure:
        'You organise their life and call it love — which, in your language, is exactly what it ' +
        'is. They experience it as being managed. Then they withdraw without announcing it, ' +
        'because Fi dominants withdraw before explaining, and you interpret the withdrawal as a ' +
        'problem to be solved and solve it harder. Every round of solution increases the ' +
        'distance. The pairing does not die of conflict: it dies of excess help.',
    },

    ESFJ: {
      stack: 'Fe · Si · Ne · Ti',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ne 3rd',
          sign: '−',
          note: 'Intuition inverted and buried: they will not follow you into the long term.',
        },
        {
          pair: 'Te 2nd ↔ Ti 4th',
          sign: '−',
          note: 'Your second function is their weakest.',
        },
        {
          pair: 'Fi 3rd ↔ Fe 1st',
          sign: '−',
          note: 'Their dominant is the opposite attitude of your third.',
        },
        {
          pair: 'Se 4th ↔ Si 2nd',
          sign: '−',
          note: 'The physical now against lived precedent. No Se.',
        },
        {
          pair: 'Dominant Fe — extraverted',
          sign: '+',
          note:
            'They go towards people first. The portrait of somebody who understands very little ' +
            'about you and holds you up anyway.',
        },
      ],
      attracts:
        'Competent, tireless warmth aimed at the material facts of your life. The ESFJ organises ' +
        'the birthday, remembers the medication, notices you have lost weight. It is care ' +
        'delivered in acts — your language — wrapped in a tone your entire stack finds foreign.',
      friction:
        'No shared function, and the collision concentrates on one axis: dominant Fe wants the ' +
        'group harmonious and visible; Fi wants to be left alone with what it believes. They ' +
        'measure the bond by presence; you measure it by loyalty. Each thinks the other is ' +
        'measuring wrongly.',
      theyNeed:
        'Presence at the gatherings and the confirmation said out loud. It is no use your finding ' +
        'it obvious: Fe reads the bond from what is expressed, and your economy of expression ' +
        'reads as cooling with every week that passes.',
      youNeed:
        'To admit that being fed, remembered and received is not a lesser contribution — and that ' +
        'you would be considerably worse off without somebody doing it. That is literally what ' +
        'the complement axis is measuring when it returns 62 for somebody who shares not one ' +
        'function with you.',
      failure:
        'It becomes an obligation. They arrange, you decline, they read the decline as a refusal ' +
        'of them, you read the arranging as coercion, and the whole relationship reduces to a ' +
        'permanent negotiation about attendance. Nobody is wrong and nobody can concede, because ' +
        'for both of you the point in dispute is the thing each calls love.',
    },

    ESFP: {
      stack: 'Se · Fi · Te · Ni',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 4th',
          sign: '+',
          note: 'Your dominant is their inferior.',
        },
        {
          pair: 'Te 2nd ↔ Te 3rd',
          sign: '+',
          note: 'The same practical logic. You agree on what solving means.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 2nd',
          sign: '+',
          note: 'The same private value, articulate and immediate in them.',
        },
        {
          pair: 'Se 4th ↔ Se 1st',
          sign: '+',
          note: 'Your inferior in their command seat, the maximum of the line.',
        },
        {
          pair: 'Dominant Se — extraverted',
          sign: '+',
          note:
            'They start the sentence. And their warmth is Fi said on the spot, which is a ' +
            'language you speak.',
        },
      ],
      attracts:
        'They say the feeling part out loud, on the spot, without ceremony — and it is Fi, the ' +
        'same kind of private, non-negotiable conviction you hold, only not buried in third ' +
        'place. Watching your own function work with a two-year head start is an experience worth ' +
        'a course of therapy. Note also where they land on the map: 40 and 70 — level with the ' +
        'ENFJ on complement, ahead of them on recognition, and this is the pairing socionics ' +
        'calls a dual.',
      friction:
        'Ni is their inferior. Everything you do by default — implying rather than saying, ' +
        'planning rather than deciding now, treating the five-year horizon as though it were ' +
        'today — is exactly what they cannot follow on demand.',
      theyNeed:
        'The present, and you inside it. Beyond that: the plan said as a plan. If the arrangement ' +
        'exists only in your head, then for the ESFP it does not exist — and that is not ' +
        'inattention, it is the function at the end of the queue.',
      youNeed:
        'Your body back, and permission for an evening with no purpose. You will not enjoy the ' +
        'first one.',
      failure:
        'Fi against Fi, with no referee: two people who know exactly what they feel and consider ' +
        'it non-negotiable, and neither holding a harmonising function to concede first. Add the ' +
        'fracture in time — they cannot wait, you cannot improvise — and the argument stops ' +
        'having a subject. It becomes a dispute about the pace of a life, and pace is the one ' +
        'thing neither of you can give up out of love.',
    },

    INTJ: {
      stack: 'Ni · Te · Fi · Se',
      breakdown: [
        {
          pair: 'Ni 1st ↔ Ni 1st',
          sign: '+',
          note: 'The same certainty arriving before the sentence.',
        },
        {
          pair: 'Te 2nd ↔ Te 2nd',
          sign: '+',
          note: 'The same criterion, at the same moment of the decision.',
        },
        {
          pair: 'Fi 3rd ↔ Fi 3rd',
          sign: '+',
          note: 'The same compass, equally wordless.',
        },
        {
          pair: 'Se 4th ↔ Se 4th',
          sign: '+',
          note: 'The same blind spot, at the same depth.',
        },
        {
          pair: 'Dominant Ni — introverted',
          sign: '·',
          note: 'Nobody goes first, and there is neither Fe nor Ne. The page’s highest recognition pressed against its lowest complement: that is the whole reading of this pairing.',
        },
      ],
      attracts:
        'Recognition, in the dose you never received — literally 100, the only time the ruler ' +
        'saturates across sixteen types. Nobody asks you to explain the silence, nobody ' +
        'interprets the bluntness, nobody needs the plan translated into feeling before it can be ' +
        'assessed. You say three words and the person is already in the same place. It is one of ' +
        'the most accurate descriptions of relief available to your type, and it is exactly why ' +
        'this page has two axes: the number beside it is 5.',
      friction:
        'Two identical machines have identical blind spots. Se fourth in both means nobody ' +
        'notices the house falling apart; Fi third in both means nobody says the feeling part ' +
        'first. And when the two models of the future diverge, there is no third function in the ' +
        'pairing willing to give way — only two certainties built in silence.',
      theyNeed:
        'Exactly what you need, and that is the problem: both are waiting for the other to go ' +
        'first, and waiting is the skill both of you excel at. Somebody has to break the ' +
        'symmetry. Naming that the silence is not distance, saying that the thing matters, ' +
        'starting the conversation both of you concluded alone weeks ago.',
      youNeed:
        'The same. And it is worth knowing that this is asymmetric in practice: whoever breaks ' +
        'the symmetry first is the one carrying the pairing. If your reading is “they should ' +
        'too”, the reading is correct and changes nothing.',
      failure:
        'The only 100 on this page is also one of the most efficient routes to loneliness, and ' +
        'the complement of 5 explains why: there is not one thing missing in you that the other ' +
        'can supply. Two people who conclude alone, file the grievance in Fi and never open the ' +
        'file. It does not end in a row — it ends in a diary: two efficient lives running in ' +
        'parallel in the same flat, with a mutual respect neither of them ever converted into a ' +
        'sentence. And when one decides to end it, the decision was taken months earlier, in ' +
        'silence, with no appeal. The other will ask why they were not told. And the honest ' +
        'answer — <em>because you would have done the same</em> — helps nobody.',
    },
  },
};
