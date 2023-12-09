import { serialize, deserialize } from './serialize';
import { Color } from './types';

type Case = [moves: Color[], state: string];

const cases: Case[] = [
  [[], ''],
  [[0], '0'],
  [[1], '7'],
  [[3, 5], 'x'],
  [[3, 5, 4], 'xs'],
  [[5, 3, 4, 1], 'na'],
  [[5, 3, 4, 1, 2], 'nae'],
  [[5, 3, 4, 1, 2, 4], 'naq'],
  [[5, 3, 4, 1, 2, 4, 2, 0], 'naq2'],
  [[5, 4, 5, 4, 5, 0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 4, 5], 'tt5drbkyy'],
  [[5, 4, 1, 3, 1, 5, 1, 5, 0, 5, 1, 0, 2, 4, 5, 3, 1, 0, 2, 1], 'tjvvu1qn18'],
  [[1, 5, 4, 1, 2, 3, 4, 3, 5, 1, 2, 1, 0, 5, 3, 4, 1, 0, 5, 2, 3, 5, 4, 1], 'vakmb8ur1hxa'],
  [[0, 5, 3, 0, 4, 2, 1, 3, 4, 2, 4, 0, 4, 3, 2, 5, 4, 1, 0, 2, 4, 3, 5, 1], 'u3gjg4mwacmb'],
];

describe('serialize()', () => {
  test.each(cases)('serializes %p to %p', (moves, state) => {
    const actual = serialize(moves);
    expect(actual).toBe(state);
  });
});

describe('deserialize()', () => {
  test.each(cases)('deserializes %p from %p', (moves, state) => {
    const actual = deserialize(state);
    expect(actual).toEqual(moves);
  });
});
