import { describe, expect, test } from 'bun:test';
import { validate } from './validate';

describe('validate()', () => {
  const size = 14;
  test.each([
    ['2023-12-08', 'tjvvu1qn18', false],
    ['2023-12-09', 'u3gjg4mwacmb', false],
    ['2024-12-23', 'kh1xj8grjdcz', false],
    ['2024-12-23', 'pwy8tf3w4k1mz', true],
  ])('seed = %p, moves = %p', (seed, moves, expected) => {
    const actual = validate(size, size, seed, moves);
    expect(actual).toBe(expected);
  });
});
