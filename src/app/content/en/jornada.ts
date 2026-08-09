import type { JornadaContent } from '../types';
import type { SourceId } from '../sources';

export const JORNADA_EN: JornadaContent = {
  meta: {
    title: 'Journey — The phases of the INTJ',
    description:
      'How the INTJ functions mature across the decades: five phases, from childhood to 45+, ' +
      'and six concrete growth practices.',
  },

  sources: [
    'grant-1983',
    'mbf-type-dynamics',
    'reynierse-2009',
    'mmtic-1987',
    'pittenger-2005',
    'lieberman-2007',
    'pennebaker-beall-1986',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 05 — Journey',
    title: 'The phases of the INTJ',
    lede:
      'The functions do not all turn up at once: they mature in order, over decades. Which means ' +
      'that a 19-year-old INTJ and a 45-year-old one can look like different types — and that ' +
      'several of the difficulties you put down to a character flaw may be a matter of phase.',
  },

  timelineHint: 'Click a phase',
  focusLabel: 'Function in focus:',
  painLabel: 'What tends to weigh',
  gainLabel: 'What opens up',
  taskLabel: 'Task of the phase',

  phases: [
    {
      range: '0–12',
      title: 'The strange observer',
      focus: 'Ni emerging',
      body:
        'The child who later recognises themselves as an INTJ is usually described as too mature, ' +
        'too serious, full of questions nobody saw coming — a retrospective portrait, not a ' +
        'diagnosis: type in childhood is unstable, and the least stable scale is precisely ' +
        'thinking–feeling. Ni would ' +
        'already be showing: you notice the incoherence in adults, your mind works while everyone ' +
        'else plays, and you prefer a book or a solitary project to the movement of the group. ' +
        'Many INTJs report the sensation, from very early on, of watching the world from a small ' +
        'distance.',
      pain:
        'Feeling out of place without knowing why. Being read as sullen or arrogant when you were ' +
        'only thinking.',
      gain:
        'A rich inner world and an early independence that becomes the ground everything else ' +
        'stands on.',
      task:
        'Finding one adult or one friend who treats your difference as interesting rather than as ' +
        'a problem to be corrected.',
    },
    {
      range: '13–20',
      title: 'The rise of logic',
      focus: 'Te developing',
      body:
        'Te comes on stage and the young INTJ discovers a powerful weapon: arguing. You start ' +
        'organising everything into systems, questioning any authority that cannot hold up its ' +
        'own reasoning, and collecting competence as a form of safety. It is also the hardest ' +
        'phase socially — patience with convention is minimal and diplomacy does not exist yet.',
      pain:
        'Isolation at school, friction with authority, impatience with classmates, and the sense ' +
        'that sensitivity is weakness.',
      gain: 'Real analytical capacity, intellectual autonomy and the first sense of a life project.',
      task:
        'Separating being right from being effective. Winning arguments costs allies; the skill to ' +
        'train is choosing which ones are worth it.',
    },
    {
      range: '20–30',
      title: 'The building years',
      focus: 'Ni–Te at cruising speed',
      body:
        'This is the decade of greatest external output: career, training, ambitious projects, ' +
        'ten-year plans. The Ni–Te axis runs at full strength and you deliver more than most ' +
        'people do. The price comes with it: neglected relationships, an ignored body, a first ' +
        'burnout and a doubt that still has no name — “if everything is right, why does it feel ' +
        'incomplete?”.',
      pain:
        'Overwork, chosen solitude turning into real solitude, and difficulty naming emotional ' +
        'needs.',
      gain: 'Earned competence, material independence and a confidence grounded in results.',
      task:
        'Putting people and body inside the plan, not outside it. Whatever does not enter the ' +
        'system disappears.',
    },
    {
      range: '30–45',
      title: 'The opening of Fi',
      focus: 'Fi maturing',
      body:
        'This is where many INTJs live through the deepest change: values stop being a logical ' +
        'justification and start being felt. You begin to ask not only whether something works, ' +
        'but whether it matters. Relationships gain weight, purely technical success loses its ' +
        'charm, and a redirection of career or of purpose often shows up.',
      pain:
        'Old emotions arriving all at once, shivers of regret for years spent cold, and ' +
        'discomfort with your own vulnerability.',
      gain:
        'Real empathy, a capacity for intimacy and a purpose that does not depend on outside ' +
        'approval.',
      task:
        'Letting yourself feel without turning all of it into analysis. Therapy, writing and ' +
        'honest conversations speed this phase up enormously.',
    },
    {
      range: '45+',
      title: 'The integration of Se',
      focus: 'Se cultivated',
      body:
        'The mature INTJ is a lighter version of themselves: the same strategic clarity, far less ' +
        'rigidity. Cultivating the inferior function — presence, body, pleasure in the concrete — ' +
        'ends the internal war between thinking and living. This is the phase where the INTJ ' +
        'tends to become a mentor: someone who sees far, says little, and says things that change ' +
        'the direction of other people’s lives.',
      pain:
        'Mourning the time when you were hard on yourself, and the effort of slowing down after ' +
        'decades of acceleration.',
      gain:
        'Presence, humour, tolerance for ambiguity and the ability to be at peace without ' +
        'producing anything.',
      task:
        'Practising the present deliberately: hands, nature, food, silence with no agenda. Ni no ' +
        'longer needs everything resolved.',
    },
  ],

  timelineNote:
    'The ages come from Harold Grant’s type-development schema (1983), later adopted by the MBTI ' +
    'tradition: a hypothesis about when each function matures, not a measured average and not a ' +
    'deadline. The ages here follow the schema the Myers & Briggs Foundation itself publishes — ' +
    'dominant up to about 7, auxiliary up to 20, tertiary in the 30s and 40s, inferior at ' +
    'midlife or later — which runs later than Grant’s and is equally unverified in any cohort. ' +
    'Plenty of people go through the phases out of order, and early ' +
    'or late does not mean better or worse.',

  growth: {
    eyebrow: 'Growth',
    title: 'Six practices that work for INTJs',
    intro:
      'None of them is about becoming an extravert or thinking less. All of them are about ' +
      'widening your reach: keeping the strength and lowering the cost.',
    items: [
      {
        n: '01',
        title: 'Externalise before you conclude',
        text:
          'Say or write the reasoning halfway through, not at the end. That invites correction ' +
          'while correction is still cheap, and it trains the communication Ni alone never does.',
      },
      {
        n: '02',
        title: 'Log your predictions',
        text:
          'Write down what you think will happen, with a date. Reviewing it later calibrates the ' +
          'intuition and cures excess certainty without weakening your confidence.',
      },
      {
        n: '03',
        title: 'Name what you feel',
        text:
          'Three lines a day about your emotional state, without trying to solve it. It is the ' +
          'most direct exercise in developing Fi — and the most uncomfortable. Naming what you ' +
          'feel lowers emotional reactivity in laboratory studies — it is not only a typological ' +
          'metaphor.',
      },
      {
        n: '04',
        title: 'Put the body on the schedule',
        text:
          'Movement, food and sleep as items in the system, not leftovers from it. Inferior Se ' +
          'responds well to a small, steady routine.',
      },
      {
        n: '05',
        title: 'Practise specific praise',
        text:
          'You already notice what people do well — you just never say it. Voicing it once a day ' +
          'changes the temperature of every relationship you have.',
      },
      {
        n: '06',
        title: 'Finish imperfect things',
        text:
          'Pick one project and ship the “good enough” version. Every finished delivery weakens ' +
          'perfectionism more than any amount of reflection about it.',
      },
    ],
  },

  next: {
    label: 'Next page',
    title: 'Beyond MBTI: enneagram, temperaments and the Big Five',
    index: '06 →',
    key: 'alem-do-mbti',
  },
};
