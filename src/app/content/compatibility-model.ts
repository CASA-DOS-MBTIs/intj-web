import { MBTI_TYPES, type MbtiType } from './profile-keys';

/**
 * The compatibility scoring, as code.
 *
 * It used to be sixteen pairs of hand-written numbers with the arithmetic
 * repeated inside a hundred and sixty sentences of prose. That arrangement has
 * exactly one failure mode and it fired: the moment the rule moves, every
 * sentence quoting the old figure becomes a false statement, silently. Here the
 * figures are derived, the page prints the rules, and the prose says only what
 * a number cannot.
 *
 * Everything is measured from the INTJ outward — this is not a general
 * compatibility engine, and it would be wrong used as one.
 */

/** Grant/Myers function stacks: dominant, auxiliary, tertiary, inferior. */
export const STACKS: Record<MbtiType, readonly [string, string, string, string]> = {
  INTJ: ['Ni', 'Te', 'Fi', 'Se'],
  INTP: ['Ti', 'Ne', 'Si', 'Fe'],
  ENTJ: ['Te', 'Ni', 'Se', 'Fi'],
  ENTP: ['Ne', 'Ti', 'Fe', 'Si'],
  INFJ: ['Ni', 'Fe', 'Ti', 'Se'],
  INFP: ['Fi', 'Ne', 'Si', 'Te'],
  ENFJ: ['Fe', 'Ni', 'Se', 'Ti'],
  ENFP: ['Ne', 'Fi', 'Te', 'Si'],
  ISTJ: ['Si', 'Te', 'Fi', 'Ne'],
  ISFJ: ['Si', 'Fe', 'Ti', 'Ne'],
  ESTJ: ['Te', 'Si', 'Ne', 'Fi'],
  ESFJ: ['Fe', 'Si', 'Ne', 'Ti'],
  ISTP: ['Ti', 'Se', 'Ni', 'Fe'],
  ISFP: ['Fi', 'Se', 'Ni', 'Te'],
  ESTP: ['Se', 'Ti', 'Fe', 'Ni'],
  ESFP: ['Se', 'Fi', 'Te', 'Ni'],
};

const SELF: MbtiType = 'INTJ';
const SELF_STACK = STACKS[SELF];

/* -- Recognition ----------------------------------------------------------- */

/** Your four functions, by how much of you each one actually is. Sums to 100. */
const FUNCTION_WEIGHT: Record<string, number> = { Ni: 40, Te: 30, Fi: 20, Se: 10 };

/** Same seat in the stack is worth the lot; each seat of distance costs. */
const DISTANCE_FACTOR = [1, 0.7, 0.4, 0.1] as const;

/** The same function turned the other way round. */
const INVERTED: Record<string, string> = { Ni: 'Ne', Te: 'Ti', Fi: 'Fe', Se: 'Si' };

/**
 * What an inverted attitude is worth.
 *
 * It used to be zero, and zero was wrong. Ti is not Te — but an INTP reasoning
 * from internal consistency and an INTJ reasoning from effectiveness are still
 * both reasoning, in a way neither shares with someone reading the room. Scoring
 * it as absence put INTP, ENTP, ISFJ and ESFJ on exactly the same figure, which
 * says an INTP is as unrecognisable to you as an ESFJ. Nobody believes that.
 */
const INVERTED_CREDIT = 0.35;

/* -- Complement ------------------------------------------------------------ */

/**
 * What someone's Se is worth to you, by the seat it occupies in their stack.
 *
 * The peak is the AUXILIARY, not the dominant, and that single change is the
 * correction that matters most. The old curve paid most for the person whose
 * whole mode of being is your inferior function — the one you are worst at,
 * most stressed by, and gripped by when unwell. Theory calls that complement;
 * a shared kitchen calls it translating every day of your life. Se in second
 * place brings you into the room. Se in first place lives there, and you visit.
 */
const SE_BY_SEAT = [30, 50, 28, 6] as const;

/** Ne and Fe part-supply what Se and warmth would; same shape, lower ceiling. */
const SUBSTITUTE_BY_SEAT = [18, 30, 17, 4] as const;

const EXTROVERTED = new Set(['Te', 'Fe', 'Ne', 'Se']);

/** Somebody has to go towards the world first; your stack opens inward. */
const EXTROVERTED_DOMINANT_BONUS = 10;

/* -- Livability ------------------------------------------------------------ */

/**
 * What daily life costs, as the preferences you do not have to negotiate.
 *
 * The other two axes answer "do they understand me" and "do they extend me".
 * Neither answers "what is a Tuesday like", and a ranking built from the two of
 * them alone recommended the type that is your opposite on all four letters.
 *
 * Weighted by what each preference actually costs an INTJ, not by symmetry:
 * introversion decides how much of the week is spent recovering, and J/P
 * decides whether a plan is a plan. T/F comes last — it is the most negotiable
 * of the four, and the one INTJs most often report growing from.
 */
const PREFERENCE_WEIGHT: { index: number; weight: number }[] = [
  { index: 0, weight: 30 }, // I/E
  { index: 3, weight: 30 }, // J/P
  { index: 1, weight: 25 }, // N/S
  { index: 2, weight: 15 }, // T/F
];

/* -- The axes -------------------------------------------------------------- */

export interface AxisScores {
  recognition: number;
  complement: number;
  livability: number;
}

/** One line of the working, for the per-pair breakdown on the page. */
export interface PairWorking {
  /** Your function, and theirs on the same axis. */
  mine: string;
  theirs: string;
  /** Seats, 1-based, for rendering as "1ª ↔ 2ª". */
  mySeat: number;
  theirSeat: number;
  /** Recognition earned by this pair, already rounded for display. */
  recognition: number;
  /** True when theirs is your function with the attitude flipped. */
  inverted: boolean;
}

function recognitionFor(stack: readonly string[]): number {
  return SELF_STACK.reduce((total, fn, mySeat) => {
    const sameSeat = stack.indexOf(fn);
    if (sameSeat >= 0) {
      return total + FUNCTION_WEIGHT[fn] * DISTANCE_FACTOR[Math.abs(mySeat - sameSeat)];
    }

    const flippedSeat = stack.indexOf(INVERTED[fn]);
    if (flippedSeat < 0) {
      return total;
    }
    return (
      total +
      FUNCTION_WEIGHT[fn] * DISTANCE_FACTOR[Math.abs(mySeat - flippedSeat)] * INVERTED_CREDIT
    );
  }, 0);
}

function complementFor(stack: readonly string[]): number {
  const seatValue = (fn: string, table: readonly number[]): number => {
    const seat = stack.indexOf(fn);
    return seat < 0 ? 0 : table[seat];
  };

  return (
    seatValue('Se', SE_BY_SEAT) +
    seatValue('Ne', SUBSTITUTE_BY_SEAT) +
    seatValue('Fe', SUBSTITUTE_BY_SEAT) +
    (EXTROVERTED.has(stack[0]) ? EXTROVERTED_DOMINANT_BONUS : 0)
  );
}

function livabilityFor(code: MbtiType): number {
  return PREFERENCE_WEIGHT.reduce(
    (total, { index, weight }) => total + (code[index] === SELF[index] ? weight : 0),
    0,
  );
}

export function axesFor(code: MbtiType): AxisScores {
  return {
    recognition: Math.round(recognitionFor(STACKS[code])),
    complement: complementFor(STACKS[code]),
    livability: livabilityFor(code),
  };
}

/**
 * How lopsided a pairing may be before the gap is charged against it, as a
 * fraction of the distance between its best and worst axis.
 *
 * At 0 this is a plain average, and a plain average recommends yourself: the
 * mirror scores 100 · 6 · 100 and would sit near the top on the strength of two
 * of them. The whole point of having three axes is that a pairing has to be
 * worth something on all three.
 */
const IMBALANCE_PENALTY = 0.45;

/** The three axes as one sorting key. Never a verdict — see the page's copy. */
export function combinedScore({ recognition, complement, livability }: AxisScores): number {
  const values = [recognition, complement, livability];
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.max(
    0,
    Math.round(mean - IMBALANCE_PENALTY * (Math.max(...values) - Math.min(...values))),
  );
}

/** Every pairing, best first. Ties break on recognition, then on the type order. */
export function rankedPairings(): { code: MbtiType; axes: AxisScores; combined: number }[] {
  return [...MBTI_TYPES]
    .map((code) => {
      const axes = axesFor(code);
      return { code, axes, combined: combinedScore(axes) };
    })
    .sort((a, b) => b.combined - a.combined || b.axes.recognition - a.axes.recognition);
}

/** The four function-pair rows, with the recognition each one earned. */
export function workingFor(code: MbtiType): PairWorking[] {
  const stack = STACKS[code];

  return SELF_STACK.map((fn, mySeat) => {
    const sameSeat = stack.indexOf(fn);
    const flippedSeat = stack.indexOf(INVERTED[fn]);
    const inverted = sameSeat < 0;
    const theirSeat = inverted ? flippedSeat : sameSeat;

    const earned =
      theirSeat < 0
        ? 0
        : FUNCTION_WEIGHT[fn] *
          DISTANCE_FACTOR[Math.abs(mySeat - theirSeat)] *
          (inverted ? INVERTED_CREDIT : 1);

    return {
      mine: fn,
      theirs: theirSeat < 0 ? '—' : stack[theirSeat],
      mySeat: mySeat + 1,
      theirSeat: theirSeat + 1,
      recognition: Math.round(earned),
      inverted,
    };
  });
}
