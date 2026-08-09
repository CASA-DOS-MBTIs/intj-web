import type { MenteContent } from '../types';
import type { SourceId } from '../sources';

export const MENTE_EN: MenteContent = {
  meta: {
    title: 'INTJ — The cognitive stack',
    description:
      'Ni, Te, Fi and Se explained one by one: the INTJ’s cognitive engine, the Ni–Te axis and ' +
      'what all of it looks like from the inside.',
  },

  sources: [
    'rebar-2015',
    'reynierse-2009',
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-type-dynamics',
    'quenk-1993-beside',
    'quenk-2002-grip',
    'grant-1983',
    'thomson-1998',
    'beebe-2017',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 01 — The Mind',
    title: 'The cognitive stack',
    lede:
      'An MBTI type is born of four preferences — but the reading that explains the most is the ' +
      'dynamic one, which translates those preferences into an order among mental processes. In ' +
      'that reading, today the most widespread, the INTJ is <strong>Ni · Te · Fi · Se</strong> ' +
      '— and it organises what follows well, though with no empirical support of its own ' +
      '(Reynierse, 2009): why you trust hunches you can hardly justify, why ' +
      'you organise the world into systems, why your values are non-negotiable, and why the ' +
      'body is always the last thing you remember.',
  },

  selectorHint: 'Click a function',
  meterNote:
    'The bar illustrates the order; it does not measure it. No MBTI instrument measures the ' +
    'strength of a function — it sorts preferences and stops there. What the bar shows is the ' +
    'awareness and control the theory predicts. The inferior function is weak in mastery, never ' +
    'in impact. The ages follow Harold Grant’s type-development schema (1983) — a hypothesis ' +
    'about when each function matures, never verified in a cohort. A map, not a calendar.',

  signsLabel: 'How it shows up day to day',
  shadowLabel: 'When it misfires',
  growLabel: 'How to strengthen it',

  functions: [
    {
      abbr: 'Ni',
      name: 'Introverted Intuition',
      pos: 'Dominant',
      age: 'from childhood',
      strength: '96%',
      oneLine: 'The conclusion arrives whole, before the explanation.',
      motto: 'I don’t know how I know. I only know that is where this is going.',
      desc:
        'Ni is a process of convergence: it takes everything you have seen, read and lived ' +
        'through and distils it into a single thread of meaning. It does not work with many ' +
        'possibilities at once — it works with the possibility that looks inevitable. That is ' +
        'why the INTJ’s intuition arrives as certainty, not as a guess.',
      desc2:
        'Because it is an introverted function, it runs far from anyone else’s eyes and without ' +
        'language. You register the pattern long before you can translate it — and it is ' +
        'exactly that lag between knowing and explaining that breeds the misunderstanding ' +
        'people call arrogance.',
      signs: [
        'Predicting how a situation will end while it is still beginning.',
        'Losing interest the moment the idea is clear in your head — execution feels redundant.',
        'Needing long stretches of silence for the insight to form; being interrupted genuinely ' +
          'hurts.',
        'Feeling physical discomfort at incoherence, even when you cannot point to where it is.',
      ],
      shadow:
        'It turns into closed certainty: a single vision of the future treated as fact, new ' +
        'data discarded, and ever more elaborate theories about other people’s intentions.',
      grow:
        'Write down the prediction and the date. Come back later and check. Calibrating Ni ' +
        'against reality turns intuition into a skill you can verify.',
    },
    {
      abbr: 'Te',
      name: 'Extraverted Thinking',
      pos: 'Auxiliary',
      age: 'adolescence and your 20s',
      strength: '78%',
      oneLine: 'Turns the vision into a plan, a criterion and a result.',
      motto: 'If it cannot be measured, organised or delivered, it is still just a pretty idea.',
      desc:
        'Te is the function that operates in the outside world with objective logic: it sets ' +
        'scope, strips out redundancy, builds processes, decides on the basis of what works. It ' +
        'is the hand that builds what Ni saw — and the voice that cuts a forty-minute meeting ' +
        'down to four sentences.',
      desc2:
        'It is also the most visible part of the INTJ, which is why so many people confuse ' +
        'competence with harshness. Well-developed Te is not rigidity: it is the ability to ' +
        'change the plan quickly when the data changes, without any attachment to your own ego.',
      signs: [
        'Mentally reorganising any badly designed system that crosses your path.',
        'Communicating in conclusions rather than in process — which sounds abrupt to people ' +
          'who think by talking.',
        'An almost physical impatience with meetings, bureaucracy and decorative work.',
        'Learning fast on your own, because the structure of a subject shows up before the ' +
          'details do.',
      ],
      shadow:
        'It turns into control: dry criticism, optimisation of things that never needed ' +
        'optimising, and people treated as resources inside the plan.',
      grow:
        "Before you correct, ask. A 'tell me how you got there' preserves the result and the " +
        'bond at the same time.',
    },
    {
      abbr: 'Fi',
      name: 'Introverted Feeling',
      pos: 'Tertiary',
      age: 'from 20 to 40',
      strength: '48%',
      oneLine: 'The private moral compass — intense and almost wordless.',
      motto: 'I feel far more than I can say, and what I value is not up for negotiation.',
      desc:
        'Contrary to the stereotype, the INTJ is not a person without emotion: it is a person ' +
        'whose emotion is badly translated. Fi holds a set of deep, highly personal values — ' +
        'about integrity, justice, loyalty — that work as an absolute red line.',
      desc2:
        'Being tertiary, it is strong in intensity and weak in articulation — and it is worth ' +
        'knowing that the introverted orientation of that third function is a convention of ' +
        'Grant’s model, not a consensus: Myers left the point open. The feeling shows up as ' +
        'inner pressure, tiredness or irritation before it shows up as a sentence. When it ' +
        'matures, it gives the INTJ something rare: an ethic that needs no outside approval.',
      signs: [
        'Cutting people off for good when a core value is violated — no drama, no way back.',
        'Working out what you felt hours or days after it happened.',
        'Silent, disproportionate loyalty to very few people.',
        'A hidden sensitivity to rejection, denied even to yourself.',
      ],
      shadow:
        'In cycles of stress, Fi pulls the INTJ into what the typology community calls a loop ' +
        'with Ni: endless self-analysis, accumulated resentment, old grievances revisited and a ' +
        'moralised withdrawal. The term is community vocabulary, not an official MBTI concept — ' +
        'but it describes what happens well.',
      grow:
        'Name the feeling out loud or in writing, even badly phrased. Precision comes later; ' +
        'what matters is giving language to something that is already there.',
    },
    {
      abbr: 'Se',
      name: 'Extraverted Sensing',
      pos: 'Inferior',
      age: 'midlife onwards',
      strength: '22%',
      oneLine: 'Body, present, physical world — the blind spot.',
      motto: 'There is a now, and I almost always forget to live in it.',
      desc:
        'Se is the function that registers the concrete world in real time: taste, sound, ' +
        'tiredness, surroundings, the body itself. In the INTJ it is last in the queue — hence ' +
        'the tendency to skip meals, ignore the signals of exhaustion and live a few ' +
        'centimetres ahead of or behind the present moment.',
      desc2:
        'But the inferior function is not the enemy: Jung and von Franz treated it as the ' +
        'doorway into what has not yet been lived. Cultivating Se on purpose — physical ' +
        'training, music, cooking, nature, work with the hands — has no per-type study behind ' +
        'it; what it has is the well-measured effect of movement and sleep on mood and clarity. ' +
        'That is argument enough.',
      signs: [
        'Noticing hunger, pain or exhaustion only once they are already at a high level.',
        'Discomfort with improvisation, chaotic settings and sudden physical change.',
        'Unexpected relief in very concrete, repetitive activities.',
        'Under extreme stress, flipping to the opposite: excess with food, shopping, series or ' +
          'exercise.',
      ],
      shadow:
        "This is what Naomi Quenk named the 'grip': when Ni–Te runs dry, the INTJ drops into " +
        'inferior Se — sensory impulsiveness, hyperfocus on irrelevant detail and the feeling ' +
        'of losing control. Accumulated clinical description, not a laboratory finding.',
      grow:
        'Small, regular doses rather than large ones: twenty minutes of movement, one meal ' +
        'without a screen, five minutes of attention to the body. Se is trained by repetition, ' +
        'not by intensity.',
    },
  ],

  axis: {
    eyebrow: 'The main axis',
    title: 'Ni sees the destination. Te builds the road.',
    paragraphs: [
      'The Ni–Te pair is the heart of the INTJ. Introverted Intuition works in silence, fusing ' +
        'everything you have ever seen into a single long-range hunch. Extraverted Thinking ' +
        'takes that hunch and breaks it into criteria, deadlines, metrics and stages — turning ' +
        'vision into something that exists in the world.',
      'When the axis is healthy, you have a rare thing: someone who sees far ahead <em>and</em> ' +
        'delivers. When it tips towards Ni, you get years of theory without execution. When it ' +
        'tips towards Te, you get years of efficient execution in the wrong direction. The work ' +
        'of a lifetime is keeping the two in conversation.',
    ],
  },

  inside: {
    eyebrow: 'What this looks like from the inside',
    cards: [
      {
        title: 'Thinking in systems',
        text:
          'You do not see isolated tasks — you see gears. Before acting, you assemble the whole ' +
          'mechanism in your head and test where it breaks.',
      },
      {
        title: 'A long horizon',
        text:
          'Five years feel close; next week feels like a detail. That gives you direction — and ' +
          'makes you underestimate the cost of the present.',
      },
      {
        title: 'Certainty before speech',
        text:
          'You speak once the thought is closed. It looks like absolute confidence; in practice ' +
          'it is only internal editing done before the words.',
      },
      {
        title: 'Autonomy as oxygen',
        text:
          'Being micromanaged is not annoying: it is suffocating. You take authority gladly ' +
          'when it is competent and explains why.',
      },
    ],
  },

  next: {
    label: 'Next page',
    title: 'Light & Shadow: strengths, faults and burnout',
    index: '02 →',
    key: 'luz-e-sombra',
  },
};
