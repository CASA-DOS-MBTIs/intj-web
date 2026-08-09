import type { EspelhoContent } from '../types';
import type { SourceId } from '../sources';

export const ESPELHO_EN: EspelhoContent = {
  meta: {
    title: 'Mirror — Thirty-two statements · INTJ',
    description:
      'Thirty-two statements — eight per function — measuring how much the INTJ traits resonate ' +
      'with you. No verdict, just a reading.',
  },

  sources: [
    'aera-2014-standards',
    'nunnally-bernstein-1994',
    'quenk-2002-grip',
    'mbf-basics',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 08 — Mirror',
    title: 'Thirty-two statements',
    lede:
      'This is not an MBTI test and it will not tell you your type — no thirty-two-item ' +
      'questionnaire could do that honestly. What it measures is <em>how much the traits ' +
      'described on this site resonate with you</em>, function by function. Answer with your ' +
      'habitual pattern in mind, not the day you are having today.',
  },

  quiz: {
    notice:
      '<strong>This is not a psychological assessment.</strong> In Brazil, where this site is ' +
      'written, psychological assessment is restricted to registered psychologists, regulated ' +
      'by the Federal Council of Psychology, and carried out with instruments validated and ' +
      'approved for the purpose. This questionnaire is not one of them: it has not been ' +
      'validated, it measures no construct to any known precision, and it is no basis for a ' +
      'diagnosis, a report, or any decision about selection, hiring or treatment. If a real ' +
      'assessment is what you want, see a qualified psychologist.',
    answeredTemplate: '{n} of {total} answered',
    resetLabel: 'Clear',
    redoLabel: 'Redo',
    lockedNote:
      'All thirty-two are answered and the questionnaire closed itself, so that it stops ' +
      'inviting you to nudge the ratings until the result comes out the way you wanted — use ' +
      '“Redo” if you want it reopened and something changed.',
    disagreeLabel: 'Disagree',
    agreeLabel: 'Agree',
    ratingLabel: 'Rating {n} of 5',

    groupLabels: {
      Ni: 'Ni · Introverted Intuition — the dominant',
      Te: 'Te · Extraverted Thinking — the auxiliary',
      Fi: 'Fi · Introverted Feeling — the tertiary',
      Se: 'Se · Extraverted Sensing — the inferior',
    },

    groupHints: {
      Ni:
        'Eight statements about the conclusion that arrives before the explanation, and about ' +
        'what it demands of you in order to form.',
      Te:
        'Eight statements about what you do to the outside world when it is badly organised — ' +
        'and about the price of that.',
      Fi:
        'Eight statements about the private measure: the part of the INTJ that feels a great ' +
        'deal, translates little, and almost never on time.',
      Se:
        'These eight describe a lack, not a strength. Agreeing hard here means a larger blind ' +
        'spot — and that is how the bar will be read at the end, inverted.',
    },

    questions: [
      {
        fn: 'Ni',
        text: 'I usually know how a situation will end long before I can explain why.',
      },
      {
        fn: 'Ni',
        text:
          'I need long stretches alone and in silence to think properly — being interrupted ' +
          'disorganises me.',
      },
      {
        fn: 'Ni',
        text: 'I lose interest in a project the moment it becomes clear in my head.',
      },
      {
        fn: 'Ni',
        text:
          'I recognise the same pattern repeating in situations that, to everyone else, have ' +
          'nothing to do with each other.',
      },
      {
        fn: 'Ni',
        text: 'Five years ahead look sharper to me than next week does.',
      },
      {
        fn: 'Ni',
        text:
          'Incoherence in an argument bothers me almost physically, before I have even located ' +
          'where it is.',
      },
      {
        fn: 'Ni',
        text: 'I arrive at a single conclusion, not at a range of options to choose from later.',
      },
      {
        fn: 'Ni',
        text: 'Solutions turn up when I stop looking for them — in the shower, on a walk, on waking.',
      },

      {
        fn: 'Te',
        text:
          'When I see a badly designed process, I reorganise it in my head without anyone ' +
          'having asked.',
      },
      {
        fn: 'Te',
        text:
          'I hand over conclusions instead of walking through the whole reasoning — which ' +
          'sometimes lands as abrupt.',
      },
      {
        fn: 'Te',
        text: 'Long meetings and purely ceremonial work drain me more than difficult work does.',
      },
      {
        fn: 'Te',
        text: 'Before starting, I want to know by which criterion we will know it worked.',
      },
      {
        fn: 'Te',
        text:
          'I teach myself easily, because the structure of a subject shows up before the details ' +
          'do.',
      },
      {
        fn: 'Te',
        text: 'I point out the error before I think about how the person will take it.',
      },
      {
        fn: 'Te',
        text: 'When the data change, I change plan without feeling I lost anything on the way.',
      },
      {
        fn: 'Te',
        text:
          'Delegating costs me: doing it myself looks faster than explaining the pattern behind ' +
          'it.',
      },

      {
        fn: 'Fi',
        text:
          'I hold values I do not negotiate, even when that costs me an opportunity or a ' +
          'relationship.',
      },
      { fn: 'Fi', text: 'I work out what I felt hours or days after the event.' },
      {
        fn: 'Fi',
        text: 'I am deeply loyal to very few people and almost indifferent to everyone else.',
      },
      {
        fn: 'Fi',
        text: 'When someone crosses a line of mine, I cut them off quietly and do not go back.',
      },
      {
        fn: 'Fi',
        text: 'I hate being asked how I am feeling, because I rarely have the answer ready.',
      },
      {
        fn: 'Fi',
        text:
          'I keep what I feel to myself, and that strikes me as a matter of privacy rather than ' +
          'coldness.',
      },
      {
        fn: 'Fi',
        text: 'Rejection hits me harder than I admit, including to myself.',
      },
      {
        fn: 'Fi',
        text: 'Other people’s approval barely moves my own assessment of what I did.',
      },

      { fn: 'Se', text: 'I notice hunger, pain or exhaustion only once they are already severe.' },
      {
        fn: 'Se',
        text: 'Having to improvise with no time to think first leaves me uncomfortable.',
      },
      {
        fn: 'Se',
        text: 'Under heavy stress I fall into concrete excess: food, shopping, screens or training.',
      },
      {
        fn: 'Se',
        text:
          'I am rarely actually in the present moment — I am always a step ahead of it or behind ' +
          'it.',
      },
      {
        fn: 'Se',
        text: 'I do not register where I put things, and hunt for objects I used minutes ago.',
      },
      {
        fn: 'Se',
        text: 'Looking after my body is the first thing off the calendar when work tightens.',
      },
      {
        fn: 'Se',
        text: 'Noise, crowds and harsh light wear me down faster than the people around me.',
      },
      {
        fn: 'Se',
        text:
          'Changes right in front of me escape me: a haircut, a piece of furniture in a new ' +
          'place.',
      },
    ],
  },

  result: {
    eyebrow: 'Your reading',
    emptyLabel: 'Answer the thirty-two statements to see the reading',
    scoreNote:
      'These boundaries are blurred on purpose. Each answer is worth less than a point of the ' +
      'total, but four answers moved by one — the ordinary difference between a good day and a ' +
      'bad one — shift the total by three, enough to drop you into the neighbouring band if you ' +
      'are near one. The number here is a coarse thermometer, not a grade.',
    barNote:
      'Each bar rests on eight statements. That is better than three and still too few to ' +
      'compare one function against another: one answer moved by a point shifts the bar by ' +
      'three. Read their relative heights, not the number on any one of them.',
    bands: [
      {
        min: 82,
        band: 'a very close portrait',
        reading:
          'Practically everything described here describes you. If you already thought of ' +
          'yourself as an INTJ, this result only confirms what you recognise — and the useful ' +
          'part now is not the confirmation, it is the bottom of the stack: Fi and Se are where ' +
          'your available growth sits. Watch for the one real risk of identifying this closely: ' +
          'using the type as an explanation for everything, including what deserved to change.',
      },
      {
        min: 64,
        band: 'strong resonance',
        reading:
          'The INTJ pattern describes how you work rather well, with clear variation in a few ' +
          'areas — which is entirely normal: nobody embodies a type whole. The bars below rest ' +
          'on eight statements each, which is something and is still too little: one answer ' +
          'moved by a point shifts the bar by three. Read the lowest one as a question worth ' +
          'investigating, never as a measurement. If it surprised you, the value is in the ' +
          'surprise, not in the number.',
      },
      {
        min: 45,
        band: 'traits present, not dominant',
        reading:
          'You recognise part of the portrait, but not the whole of it. That can mean three ' +
          'things: a neighbouring type describes you better (the Comparisons page is worth a ' +
          'read, especially INTP and INFJ), you are a young INTJ whose functions are still ' +
          'forming, or you are a mature INTJ whose Fi and Se have already softened the pattern ' +
          'considerably. None of the three is a problem.',
      },
      {
        min: 0,
        band: 'probably another portrait',
        reading:
          'Most of these statements do not describe you — which is valuable information, not a ' +
          'failure. Perhaps you arrived here out of curiosity, or to understand an INTJ in your ' +
          'life better. In that case, the Bonds page and the Comparisons page will serve you ' +
          'more than any score.',
      },
    ],
    functionNames: {
      Ni: 'Introverted Intuition',
      Te: 'Extraverted Thinking',
      Fi: 'Introverted Feeling',
      Se:
        'Extraverted Sensing — the blind spot (a full bar means a more pronounced blind spot, ' +
        'not strong Se)',
    },
    levels: {
      veryStrong: 'very strong',
      strong: 'strong',
      moderate: 'moderate',
      weak: 'weak',
      absent: 'almost absent',
    },
    inverseLevels: {
      veryStrong: 'very pronounced',
      strong: 'pronounced',
      moderate: 'moderate',
      weak: 'slight',
      absent: 'almost non-existent',
    },
    footnote: {
      before:
        'A reminder: no score here confirms or rules out a type. If you want to take this ' +
        'seriously, read the ',
      linkText: 'cognitive stack',
      after:
        ' page and watch which functional description explains your life best — recognition is ' +
        'worth more than a numerical result.',
    },
  },

  closing: {
    quote:
      '“You have spent your life being called difficult. Maybe you were only running on a ' +
      'different clock from the rest of the room.”',
    ctaHome: 'Back to the start',
    ctaBeyond: 'See the enneagram and temperaments',
  },
};
