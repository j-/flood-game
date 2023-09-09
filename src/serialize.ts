import { Color } from './types';

export const serialize = (moves: Color[]): string => {
  const colorCount = 6;
  let result = '';
  for (let i = 0; i < moves.length; i += 2) {
    result += (
      moves[i] * colorCount +
      (moves[i + 1] || 0)
    ).toString(36);
  }
  return result;
};

export const deserialize = (
  serialized: string,
  moveCount = serialized.length * 2,
): Color[] => {
  const moves: Color[] = [];
  for (let i = 0; i < serialized.length && i < moveCount; i++) {
    const ch = serialized.charAt(i);
    const num = parseInt(ch, 36);
    moves.push(Math.floor(num / 6));
    if (i < moveCount - 1) {
      moves.push(num % 6);
    }
  }
  return moves;
};
