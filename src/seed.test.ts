import { expect, test } from 'bun:test';
import { getTodaysSeed } from './seed';

test.each([
  ['2023-12-08', 20231208],
  ['2025-01-01', 20250101],
])('date = %p, seed = %p', (date, expected) => {
  const actual = getTodaysSeed(new Date(date));
  expect(actual).toBe(expected);
});
