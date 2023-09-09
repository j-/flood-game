import { serialize, deserialize } from './serialize';
import { Color } from './types';

const cases = [
  [[], 0, ''],
  [[5, 4, 5, 4, 5, 0, 1, 2, 3, 4, 5, 5, 1, 2, 3, 4, 5, 5, 4, 5], 20, 'yyu8mz8mzt'],
] as [Color[], number, string][];

describe('serialize()', () => {
  test.each(cases)('serializes %p (%p moves) to %p', (moves, _moveCount, expected) => {
    const actual = serialize(moves);
    expect(actual).toBe(expected);
  });
});

describe('deserialize()', () => {
  test.each(cases)('deserializes %p (%p moves) from %p', (expected, moveCount, moves) => {
    const actual = deserialize(moves, moveCount);
    expect(actual).toEqual(expected);
  });
});
