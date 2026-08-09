import type { ModelPageContent } from '../types';

export const DISC_EN: ModelPageContent = {
  meta: {
    title: 'DISC — the surface, not the machine',
    description:
      'Marston, 1928: two axes, four primary emotions and no instrument for thirty years. What ' +
      'D and C say about an INTJ, and what the single published study actually found — ' +
      'including a negative correlation between Thinking and Dominance.',
  },

  sources: ['jung-1921', 'kim-2025-mbti-disc', 'marston-1928', 'pittenger-2005', 'wikipedia-disc'],

  header: {
    eyebrow: 'Beyond MBTI — DISC',
    title: 'DISC: the surface,\nnot the machine',
    lede:
      'DISC does not describe how you think. It describes what the room sees when you walk into ' +
      'it — and it admits, unlike MBTI, that this changes with the room. For an INTJ that gap ' +
      'between the interior and the surface is the whole social problem, which makes DISC useful ' +
      'exactly to the extent that it is shallow.',
  },

  intro:
    'You have probably read that the INTJ is <strong>D + C</strong>: dominance plus a demand for ' +
    'technical accuracy. That is the version circulating in corporate training for decades, and ' +
    'it has never been verified. The one published study to correlate the two systems found ' +
    'Thinking associated with <em>less</em> dominance, not more — the exact opposite of the ' +
    'folklore.',

  caveat:
    'DISC does not derive from Jung, has no cognitive functions and does not describe an inner ' +
    'preference: it measures observable behaviour in a context. There is no such thing as “the” ' +
    'DISC instrument — there are dozens of commercial versions with incompatible norms and no ' +
    'common manual. And the bridge between DISC and MBTI currently rests on a single study, with ' +
    '130 students from one country.',

  sections: [
    {
      eyebrow: 'Marston · 1928',
      title: 'A book that was not a test',
      paragraphs: [
        'William Moulton Marston held a Harvard doctorate in psychology, practised law, invented ' +
          'the systolic blood-pressure component that became part of the polygraph and — under a ' +
          'pen name — created Wonder Woman. In 1928 he published <em>Emotions of Normal ' +
          'People</em>, a book about ordinary people rather than pathology, written thirteen ' +
          'years after Jung had begun drafting the types and with no relation to them whatsoever.',
        'The construction is almost geometrically simple. Two questions: is the environment in ' +
          'front of you favourable or hostile, and do you perceive yourself as stronger or weaker ' +
          'than it. Crossing them gives four primary emotions — Dominance (hostile environment, ' +
          'you stronger), Inducement (favourable, you stronger), Submission (favourable, you ' +
          'weaker) and Compliance (hostile, you weaker). D, I, S, C. Modern vendors renamed them: ' +
          'Influence, Steadiness, Conscientiousness or Compliance.',
        'Notice what this is not. There is no introversion or extraversion, no dominant ' +
          'function, no development across a lifetime, no unconscious. The unit of analysis is a ' +
          '<em>response to a situation</em>. Marston would have found the question “what is my ' +
          'DISC?” strange, because in his scheme the answer depends on which environment you are ' +
          'looking at.',
      ],
    },
    {
      eyebrow: 'Thirty years without an instrument',
      title: 'Marston never built a test',
      paragraphs: [
        'This is the fact almost every training deck leaves out: the author of the model ' +
          'produced no questionnaire, no scale, no norms, no sample. The first instrument built ' +
          'on his axes appeared in 1956, with Walter Clarke — the Activity Vector Analysis, an ' +
          'adjective checklist, not forced choice. The ' +
          'version that turned DISC into an HR product came in the 1970s, with John Geier. ' +
          'Marston had been dead since 1947.',
        'The practical consequence is that “DISC says” is not a sentence about an instrument. ' +
          'There are dozens of commercial versions today, each with its own items, its own norms ' +
          'and no obligation of comparability. Two DISC reports on the same participant, from ' +
          'different vendors, are not results from the same test — they are results from two ' +
          'tests that share four letters.',
      ],
    },
    {
      eyebrow: 'D + C',
      title: 'What the folklore says about the INTJ',
      paragraphs: [
        'The standard reading is straightforward: the D comes from the executive edge of Te — ' +
          'speed of decision, cutting, impatience with decorative process — and the C comes from ' +
          'the requirement that the model be right before it leaves your desk. High D with high C ' +
          'is a profile that signs off slowly and speaks quickly, and that is precisely the pair ' +
          'of complaints INTJs collect at work: “too blunt” and “blocks everything until it is ' +
          'perfect”.',
        'As a <em>description of the surface</em> this works well, and is worth using. It is ' +
          'probably the fastest way to explain to a team why your frankness is not hostility and ' +
          'why your slowness to approve is not obstruction. DISC gives a shared vocabulary for ' +
          'the conversation MBTI turns into jargon.',
        'But notice what the instrument has nowhere to record. The silent loyalty of Fi appears ' +
          'in none of the four letters. Nor does the convergence of Ni — the certainty that ' +
          'arrives whole and takes weeks to become an argument. DISC registers the pace and the ' +
          'tone of your conduct, not its motive. Confusing the two is like describing a car by ' +
          'the colour of its bodywork.',
      ],
    },
    {
      eyebrow: 'The one published data point',
      title: 'And it contradicts the folklore',
      paragraphs: [
        'In 2025, Kim, Lee and Hwang published a profiling system integrating MBTI and DISC in ' +
          '<em>JMIR Human Factors</em>, with 130 Korean students answering both instruments. It ' +
          'is, as far as anyone can tell, the only peer-reviewed study to correlate the two ' +
          'scales directly. Significant correlations came out on all four dichotomies; below are ' +
          'the ones for the four poles that make an INTJ.',
      ],
      points: [
        'I–S, r = .38 — Introversion went with Steadiness. The strongest of the four, and also ' +
          'the least surprising.',
        'N–I, r = −.19 — Intuition went with LESS Influence. Weak, and the only appearance of ' +
          'intuition in the entire paper.',
        'T–D, r = −.38 — Thinking went with LESS Dominance. The exact opposite of what every ' +
          'corporate deck asserts.',
        'J–C, r = .31 — Judging went with Compliance. Modest, and in the direction the folklore ' +
          'expected: people who order the outer world also demand a standard.',
      ],
    },
    {
      eyebrow: 'How to read that minus sign',
      title: 'A plausible explanation is not a verified one',
      paragraphs: [
        'An r of −.38 corresponds to roughly 14% of shared variance: not negligible, and not a ' +
          'law either. The most economical reading is that Marston’s D is not logical reasoning, ' +
          'it is <em>visible force</em> — taking up space, imposing a pace, facing down an ' +
          'environment perceived as hostile. The INTJ’s Te directs by criteria, and directing by ' +
          'criteria is perfectly compatible with saying little and never fighting for the room.',
        'There are other equally plausible readings, and that is where the caution starts. The ' +
          'sample is Korean students, and the expression of dominance is strongly shaped by ' +
          'culture and by age. Both instruments are self-report — a limitation the authors ' +
          'record themselves — and the paper never says which DISC version was used or in what ' +
          'response format, which matters because DISC instruments range from adjective ' +
          'checklists to forced choice, and forced choice produces scores that are relative ' +
          'within the person. None of that is settled by one study.',
        'So state precisely what the data licenses: it has <strong>not</strong> been established ' +
          'that INTJs score low on D. It has been established that nobody has established the ' +
          'opposite. The equation INTJ = D + C is consulting folklore — plausible, widespread, ' +
          'with no published basis, and now with one data point pointing the other way.',
      ],
    },
    {
      eyebrow: 'Natural style and adapted style',
      title: 'The methodological detail almost nobody respects',
      paragraphs: [
        'Most commercial versions hand you two graphs: the “natural” style and the style ' +
          '“adapted” to the work context. That is an honest and unusual admission — the model ' +
          'assumes the behaviour it measures depends on the environment, something MBTI never ' +
          'conceded about preferences. An INTJ who comes out as high D at the office and low D at ' +
          'home is not being inconsistent; they are confirming what the instrument claims.',
        'The problem is the format. Forced choice produces ipsative scores: they tell you which ' +
          'of your letters is highest relative to your other letters, not how much dominance you ' +
          'have relative to another person. Comparing your D with a colleague’s D — which is ' +
          'exactly what most workshops do, with a poster on the wall — is an operation the score ' +
          'format does not support.',
        'Add to that the well-documented criticisms already levelled at MBTI: dichotomising ' +
          'continuous traits, fragile test-retest reliability, weak predictive validity for job ' +
          'performance. They apply to DISC with at least equal force, and DISC has far less ' +
          'published literature with which to answer for itself.',
      ],
    },
  ],

  verdict: {
    title: 'What DISC adds',
    text:
      'One thing, which MBTI does not do: it describes the surface other people actually react ' +
      'to, and it admits that the surface moves from room to room. MBTI describes the interior ' +
      'and claims it does not change. For an INTJ, the distance between the two is the whole ' +
      'social problem — Ni and Fi on the inside, and on the outside a profile the room reads as ' +
      'coldness and control. If DISC is good for anything in your life, it is as a reception ' +
      'mirror: not what you are, but what arrives on the other side of the table.',
    weight:
      'Very low as evidence. The model dates from 1928 and went thirty years without an ' +
      'instrument; today there are dozens of instruments with no common norms; the bridge to ' +
      'MBTI rests on a single study of 130 people, in one country, in one age band — and that ' +
      'study contradicts the popular mapping at its main point. Use it as shared language in a ' +
      'team. Do not use it to select, to promote, or to explain yourself to yourself.',
  },
};
