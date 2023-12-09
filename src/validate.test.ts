import { validate } from './validate';

describe('validate()', () => {
  test.each([
    ['2023-12-08', 'tjvvu1qn18'],
    ['2023-12-09', 'u3gjg4mwacmb'],
  ])('seed = %p, moves = %p', (seed, moves) => {
    const actual = validate(14, 14, seed, moves);
    expect(actual).toBe(true);
  });
});
