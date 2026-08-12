import { MBTI_TYPES, type MbtiType } from './profile-keys';

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

const FUNCTION_WEIGHT: Record<string, number> = { Ni: 40, Te: 30, Fi: 20, Se: 10 };

const DISTANCE_FACTOR = [1, 0.7, 0.4, 0.1] as const;

const INVERTED: Record<string, string> = { Ni: 'Ne', Te: 'Ti', Fi: 'Fe', Se: 'Si' };

const INVERTED_CREDIT = 0.35;

const SE_BY_SEAT = [30, 50, 28, 6] as const;

const SUBSTITUTE_BY_SEAT = [18, 30, 17, 4] as const;

const EXTROVERTED = new Set(['Te', 'Fe', 'Ne', 'Se']);

const EXTROVERTED_DOMINANT_BONUS = 10;

const PREFERENCE_WEIGHT: { index: number; weight: number }[] = [
  { index: 0, weight: 30 },
  { index: 3, weight: 30 },
  { index: 1, weight: 25 },
  { index: 2, weight: 15 },
];

export interface AxisScores {
  recognition: number;
  complement: number;
  livability: number;
}

export interface PairWorking {
  mine: string;
  theirs: string;
  mySeat: number;
  theirSeat: number;
  recognition: number;
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

const IMBALANCE_PENALTY = 0.45;

export function combinedScore({ recognition, complement, livability }: AxisScores): number {
  const values = [recognition, complement, livability];
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.max(
    0,
    Math.round(mean - IMBALANCE_PENALTY * (Math.max(...values) - Math.min(...values))),
  );
}

export function rankedPairings(): { code: MbtiType; axes: AxisScores; combined: number }[] {
  return [...MBTI_TYPES]
    .map((code) => {
      const axes = axesFor(code);
      return { code, axes, combined: combinedScore(axes) };
    })
    .sort((a, b) => b.combined - a.combined || b.axes.recognition - a.axes.recognition);
}

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
