import type { BigFiveDeepContent } from '../types';

export const BIG_FIVE_EN: BigFiveDeepContent = {
  meta: {
    title: 'Big Five — the one model with real research behind it',
    description:
      'The five factors applied to the INTJ: what McCrae and Costa’s 1989 correlations actually ' +
      'imply, why no MBTI scale corresponds to neuroticism, and where the -A/-T suffix came from.',
  },

  sources: [
    'jung-1921',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'neris-our-theory',
    'pittenger-1993',
    'pittenger-2005',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Beyond MBTI · Big Five',
    title: 'Five rulers,\nand one that is missing',
    lede:
      'This is the only model in this section that academic psychology takes seriously: five ' +
      'continuous factors, with norms, measurement error, and a structure that keeps reappearing ' +
      'sample after sample. It does not hand you a name. It hands you a position on five rulers ' +
      '— and one of them your four-letter code <strong>simply does not measure</strong>.',
  },

  intro:
    'The bars on this page indicate <strong>direction, not measurement</strong>. They are ' +
    'derived from the correlations between the MBTI’s continuous scales and the five-factor ' +
    'scales, published by McCrae and Costa in 1989 with 468 adults — not from a sample of INTJs ' +
    'given the NEO-PI-R, which nobody has collected. “Openness 92%” here means “the N pole pulls ' +
    'towards the high end of this ruler”; never “the INTJ sits at the 92nd percentile”. The ' +
    'distance between those two readings is the distance between a map and a measurement.',

  caveat:
    'The Big Five is the only model in this section with a real research base: a five-factor ' +
    'structure that reappears across large samples and several languages, with published norms, ' +
    'reliability and measurement error (Costa & McCrae, 1992). That holds for the model. The ' +
    'bridge between it and your four-letter code is another matter altogether: one study, 1989, ' +
    'N = 468, two self-report questionnaires correlated with each other. Firm enough to steer ' +
    'by, fragile enough not to become a verdict.',

  traits: [
    {
      name: 'Openness to experience',
      width: '92%',
      level: 'VERY HIGH · r = .72',
      text:
        'In the NEO-PI-R, openness is the breadth and permeability of mental life, measured ' +
        'across six facets: fantasy, aesthetics, feelings, actions, ideas and values. It is ' +
        'neither intelligence nor accumulated culture — it is appetite for new inner ' +
        'experience, and that appetite tends to show on all six fronts at once (Costa & McCrae, ' +
        '1992).',
      asIntj:
        'This is the cleanest correspondence between the two models: the S–N scale, scored ' +
        'towards N, correlates .72 with openness. The N in your code and this factor are ' +
        'measuring nearly the same ground — and the ground is Ni: hunger for pattern, for ' +
        'theory, for a system nobody has formulated yet. Be careful, though, with the ' +
        'comfortable myth that intuitives run high on ideas and low on aesthetics. The ' +
        'correlation runs across the facets, aesthetics included; nothing in the data carves ' +
        'beauty out of your profile. What sits outside is not beauty — it is the now, the ' +
        'immediate sensory world that inferior Se registers late and badly. You can listen to ' +
        'Bach for three hours and still forget to have dinner.',
    },
    {
      name: 'Conscientiousness',
      width: '84%',
      level: 'HIGH · r = −.49',
      text:
        'Conscientiousness is impulse control in the service of goals: competence, order, ' +
        'dutifulness, achievement striving, self-discipline and deliberation (Costa & McCrae, ' +
        '1992). It measures how much you plan, persist and resist the detour — not how well you ' +
        'work, and certainly not how much you are worth.',
      asIntj:
        'The J–P scale, scored towards P, correlates −.49 with conscientiousness: the J pole ' +
        'goes with the upper half of the ruler, but with a wide margin. Roughly a quarter of the ' +
        'variance is shared, and the other three quarters are exactly where the INTJ with a ' +
        'chaotic desk and a met deadline lives. In your case conscientiousness is manufactured ' +
        'by Te and pointed inward: achievement striving and self-discipline against a plan you ' +
        'wrote yourself, not dutifulness towards somebody else’s rule. The J promises no order ' +
        'in the room. It promises order in the plan.',
    },
    {
      name: 'Extraversion',
      width: '18%',
      level: 'LOW · r ≈ −.7',
      text:
        'Extraversion, in the NEO-PI-R, is the quantity and intensity of interpersonal ' +
        'engagement plus activity level and positive affect: warmth, gregariousness, ' +
        'assertiveness, activity, excitement seeking and positive emotions (Costa & McCrae, ' +
        '1992). The low pole describes appetite, not capacity — someone scoring low is not ' +
        'incapable of company, they simply do not go looking for it.',
      asIntj:
        'The strongest correspondence of the four: the E–I scale, scored towards I, correlates ' +
        'about −.7 with extraversion (−.69 in women, −.74 in men). The I in your code and this ' +
        'factor are nearly the same measurement under two names. And this is where almost every ' +
        'INTJ description ties itself in a knot: assertiveness is a facet of extraversion, the ' +
        'third of the six. “Low extraversion with high assertiveness” only sounds contradictory ' +
        'if you treat the domain as one thing; it is the average of six, and an average is ' +
        'where disagreement between the parts goes to hide. Assertiveness is the facet through ' +
        'which the quiet INTJ still takes command of a room they never wanted to enter. Note ' +
        'what that is and what it is not: nobody has published a facet profile for INTJs. The ' +
        'structure of the domain dissolves the apparent contradiction; it did not measure it.',
    },
    {
      name: 'Agreeableness',
      width: '34%',
      level: 'LOW TO MEDIUM · r = .44',
      text:
        'Agreeableness is cooperative against antagonistic interpersonal orientation, across six ' +
        'facets: trust, straightforwardness, altruism, compliance, modesty and ' +
        'tender-mindedness (Costa & McCrae, 1992). The low pole is not cruelty — it is ' +
        'scepticism, competitiveness and a willingness to disagree out loud.',
      asIntj:
        'The .44 between T–F and agreeableness is the weakest of the four correspondences: less ' +
        'than a fifth of the variance in common. That is thin, and it is precisely this thin ' +
        'correlation that common sense stretches into “thinkers are cold”. It does not stretch. ' +
        'T is a decision criterion — impersonal logic above personal value; agreeableness is a ' +
        'style of dealing with people. You can be low on compliance (never agreeing out of ' +
        'convenience, never retreating to keep the peace) and high on altruism, and the domain ' +
        'returns a lukewarm average that describes neither. Notice too the detail almost every ' +
        'INTJ text gets backwards: straightforwardness is a facet of agreeableness, and it ' +
        'measures sincerity against manipulation, not gentleness. Being blunt does not pull you ' +
        'down the ruler — it makes you hard to flatter.',
    },
    {
      name: 'Neuroticism',
      width: '50%',
      level: 'NO MBTI ANALOGUE',
      text:
        'Neuroticism is the proneness to negative affect and to dysregulation under pressure: ' +
        'anxiety, hostility, depression, self-consciousness, impulsiveness and vulnerability ' +
        '(Costa & McCrae, 1992). It is the factor the literature ties most consistently to ' +
        'psychological distress — and it has no bearing on intelligence, character or ' +
        'competence.',
      asIntj:
        'This is the most important fact on the page: no MBTI scale corresponds to neuroticism. ' +
        'In 1989 the four dichotomies were correlated with the five factors; four of them found ' +
        'a partner, and the fifth factor was left standing alone. The direct consequence is ' +
        'brutal: your four letters say absolutely nothing about how much you suffer. Two INTJs ' +
        'with the same Ni–Te–Fi–Se stack, one serene and one corroded by anxiety, are handed the ' +
        'same code — and the instrument is not failing when it does that, because it was built ' +
        'to sort preferences in a non-clinical population, not to measure adjustment (Myers et ' +
        'al., 1998). The bar beside this sits in the middle because there is no direction to ' +
        'indicate. It is the one ruler on this page where your type places you nowhere at all.',
    },
  ],

  sections: [
    {
      eyebrow: 'Shape',
      title: 'Continuous dimensions, and what that does to a four-letter code',
      paragraphs: [
        'A four-letter code is a claim about kind: you <em>are</em> an I, full stop. The Big ' +
          'Five only makes claims about degree. There is no “high-openness type”; there is a ' +
          'score, a norm to compare it against, and a band of measurement error around it. ' +
          'Swapping one for the other is swapping a map of borders for a map of altitude — and ' +
          'then wondering why the border is nowhere in the landscape.',
        'The uncomfortable detail is that the MBTI itself produces a number before it produces ' +
          'a letter. The manual reports a preference clarity index — how hard the answers pulled ' +
          'to one side — and the letter is what remains once a cut point is applied to that ' +
          'number (Myers et al., 1998). Two people separated by a single answer fall into ' +
          'different categories; two people carrying the same I can sit enormously far apart on ' +
          'the extraversion ruler.',
        'This is exactly where Pittenger’s critique bites. The scores spread out continuously, ' +
          'with most people near the middle, rather than piling into two separate humps at the ' +
          'poles; what does the categorising is the cut point, not nature (Pittenger, 1993; ' +
          '2005). That does not void type language as vocabulary — it voids treating each ' +
          'letter as a boundary found out in the world.',
      ],
      points: [
        'The letter is the sign of the number, not the number.',
        'A marginal preference and an extreme preference are handed exactly the same letter.',
        'Near the cut point, a retest changes the letter without the person having changed.',
        'In the Big Five there is no cut point to defend: the score already is the result.',
      ],
    },
    {
      eyebrow: 'Correspondences',
      title: 'What the 1989 numbers actually say',
      paragraphs: [
        'McCrae and Costa gave the MBTI and a five-factor inventory to the same 468 adults and ' +
          'correlated scale with scale (McCrae & Costa, 1989). The MBTI scales are scored ' +
          'towards the second pole — I, N, F, P — and that alone is why two of the four numbers ' +
          'come out negative: the sign is a scoring convention, not a discovery about you.',
        'Correlation is not identity. An r of .72 means roughly half the variance in common; ' +
          '.44 means less than a fifth. Saying “N is openness” is a tolerable overstatement; ' +
          'saying “T is low agreeableness” is already caricature. And both sides of the sum are ' +
          'self-report — the same person answering two questionnaires in the same mood — which ' +
          'tends to inflate this kind of correlation. The finding is solid about ' +
          'questionnaires; the agreement between the theories behind them remains your own ' +
          'inference.',
        'The authors’ own reading was economical and not especially flattering to the MBTI: the ' +
          'instrument appears to measure a subset of the five-factor model, one dimension short ' +
          'and one theoretical layer long, and in the same paper they argued that the ' +
          'continuous scores were more defensible than the categories built on top of them.',
      ],
      points: [
        'E–I × Extraversion: about −.7 (−.69 in women, −.74 in men) — the strongest.',
        'S–N × Openness: .72.',
        'J–P × Conscientiousness: −.49.',
        'T–F × Agreeableness: .44 — the weakest of the four.',
        'Neuroticism: no MBTI scale corresponds to it.',
      ],
    },
    {
      eyebrow: 'The gap',
      title: 'The -A/-T suffix was born from this hole',
      paragraphs: [
        'The fifth ruler did not slip past the study by accident: it does not exist in the ' +
          'instrument. Myers and Briggs built a sorter of <em>preferences</em> for healthy ' +
          'people, and emotional stability was never a preference — it is a trait, and a trait ' +
          'nobody chooses. The result is a system meticulous about how you decide and utterly ' +
          'silent about what it costs you.',
        'NERIS, which publishes the most widely answered sixteen-personalities test in the ' +
          'world, solved the problem the most direct way available: it added a fifth scale. The ' +
          'company states that it moved away from Jungian types and organised its questionnaire ' +
          'around five-factor traits, keeping the Myers letters as a recognisable shorthand and ' +
          'adding the Identity dimension — Assertive against Turbulent (NERIS, n.d.). The -A and ' +
          '-T you see everywhere are, in substance, the missing ruler glued onto the end of the ' +
          'code.',
        'Two consequences, neither comfortable. First: -A/-T is not a finding about INTJs, it ' +
          'is a design decision. Somebody noticed the absence and filled it, which is a ' +
          'different act from discovering that the type comes in two emotional versions. ' +
          'Second: the NERIS instrument is commercial and proprietary, without the ' +
          'peer-reviewed scrutiny the NEO-PI-R has accumulated. If you want to know where you ' +
          'sit on neuroticism, the suffix is a friendly hint, not a measurement.',
      ],
    },
    {
      eyebrow: 'Facets',
      title: 'Six facets per domain, and the average that lies',
      paragraphs: [
        'The NEO-PI-R does not measure five things: it measures thirty, grouped into five ' +
          '(Costa & McCrae, 1992). Each domain is the sum of six facets that travel together ' +
          'closely enough to form a factor and separately enough to disagree inside the same ' +
          'person. The domain score is an average — and an average is where information goes to ' +
          'die.',
        'That is why “low extraversion with high assertiveness” is no contradiction at all. ' +
          'Assertiveness measures dominance, initiative and willingness to speak first, and it ' +
          'is under no obligation to travel with gregariousness and excitement seeking. An INTJ ' +
          'can be emptied out by company, indifferent to parties and averse to sensory risk — ' +
          'and still be the person who settles the direction of the meeting before the coffee ' +
          'goes cold.',
        'What cannot be done is pretending any of that was measured. The 1989 study correlated ' +
          'domains, not facets, and no facet profile for INTJs has been published. The ' +
          'structure of the NEO-PI-R explains why the popular description does not contradict ' +
          'itself; it does not confirm it.',
      ],
      points: [
        'Neuroticism: anxiety, hostility, depression, self-consciousness, impulsiveness, ' +
          'vulnerability.',
        'Extraversion: warmth, gregariousness, assertiveness, activity, excitement seeking, ' +
          'positive emotions.',
        'Openness: fantasy, aesthetics, feelings, actions, ideas, values.',
        'Agreeableness: trust, straightforwardness, altruism, compliance, modesty, ' +
          'tender-mindedness.',
        'Conscientiousness: competence, order, dutifulness, achievement striving, ' +
          'self-discipline, deliberation.',
      ],
    },
    {
      eyebrow: 'A common misreading',
      title: 'Openness includes the aesthetic — what sits outside is the present',
      paragraphs: [
        'It circulates in the typology literature, and it circulated in the summary version of ' +
          'this section too: the idea that the intuitive runs high on ideas and low on ' +
          'aesthetics. There is no support for it. Openness correlates with intuition across ' +
          'the facets, aesthetics included; the factor exists precisely because fantasy, art, ' +
          'feeling and idea rise together in the same person.',
        'What genuinely sits outside your reach is not the beautiful — it is the immediate: the ' +
          'sensory present, the body, the raw datum arriving through the senses before it turns ' +
          'into meaning. And that is a statement about inferior Se, the vocabulary of Jung and ' +
          'Myers, not about the Big Five: the five-factor model has no sensing function to score ' +
          'at all. Two different languages, and for this particular word the translation simply ' +
          'has no equivalent.',
      ],
    },
    {
      eyebrow: 'Limits',
      title: 'What this model does not give you',
      paragraphs: [
        'In the Big Five there is no INTJ. There are five scores. “INTJ” is a category imported ' +
          'from another instrument, and everything on this page is translation — translations ' +
          'lose things, and what is lost here is the narrative. The model has no dominant ' +
          'function, no motivation, no basic fear. It tells no story about you at all, and that ' +
          'refusal is half of its value.',
        'In exchange, it delivers what no other map in this section delivers: norms to compare a ' +
          'score against, retest stability, declared measurement error, and a factor structure ' +
          'that insists on reappearing across different samples and languages (Costa & McCrae, ' +
          '1992). Unromantic and checkable, which is precisely the bargain science offers.',
        'The final warning cuts both ways. Pittenger argues that the MBTI should not steer ' +
          'consequential decisions — selection, promotion, career direction — because the ' +
          'predictive validity evidence does not support that use (Pittenger, 1993; 2005). A ' +
          'five-factor profile derived by correlation from four letters inherits that limit ' +
          'whole and adds one of its own: you are reading the estimate of an estimate.',
      ],
    },
  ],

  verdict: {
    title: 'The one model in this section that would win the argument',
    text:
      'If you keep one sentence from this page, keep this one: the Big Five is the model with ' +
      'real research behind it, and even it refuses to give you a name. It does not call you an ' +
      'INTJ, does not call you a strategist, promises you nothing — it gives five positions and ' +
      'the error on each. Use it to calibrate the rest of this site: when the enneagram, the ' +
      'tritype and the temperament are all singing in suspicious harmony, this is the model that ' +
      'interrupts to ask how much, compared with whom, measured how. And do not forget the ' +
      'missing ruler. The dimension most consistently tied to psychological distress is exactly ' +
      'the one your four letters say nothing about.',
    weight:
      'Evidence: high for the model, moderate for the bridge to the MBTI, nil for “the INTJ’s ' +
      'Big Five profile” treated as measured data.',
  },
};
