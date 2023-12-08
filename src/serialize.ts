import { Color } from './types';

const serializePair = (m0: Color, m1: Color | null): string => {
  if (m1 == null) m1 = m0;
  const res = (
    (m1 * 6) +
    m0
  );
  return res.toString(36);
};

const deserializePair = (ch: string): [Color, Color | null] => {
  const n = parseInt(ch, 36);
  const m1 = Math.floor(n / 6);
  const m0 = n % 6;
  return [m0, m0 === m1 ? null : m1];
};

export const serialize = (moves: Color[]): string => {
  let result = '';

  for (let i = 0; i < moves.length; i += 2) {
    result += serializePair(
      moves[i],
      moves[i + 1] ?? null
    );
  }

  return result;
};

export const deserialize = (serialized: string): Color[] => {
  const moves: Color[] = [];

  for (let i = 0; i < serialized.length; i++) {
    const ch = serialized.charAt(i);
    const [move0, move1] = deserializePair(ch);
    moves.push(move0);
    if (move1 != null) {
      moves.push(move1);
    }
  }

  return moves;
};
