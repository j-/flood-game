import { isAllOneColor } from './board';

describe('isAllOneColor()', () => {
  it('returns true for a 1x1 board', () => {
    expect(isAllOneColor([[0]])).toBe(true);
    expect(isAllOneColor([[1]])).toBe(true);
    expect(isAllOneColor([[2]])).toBe(true);
    expect(isAllOneColor([[3]])).toBe(true);
    expect(isAllOneColor([[4]])).toBe(true);
    expect(isAllOneColor([[5]])).toBe(true);
  });

  it('returns true for 2x2 boards of one color', () => {
    expect(isAllOneColor([[0, 0], [0, 0]])).toBe(true);
    expect(isAllOneColor([[1, 1], [1, 1]])).toBe(true);
    expect(isAllOneColor([[2, 2], [2, 2]])).toBe(true);
    expect(isAllOneColor([[3, 3], [3, 3]])).toBe(true);
    expect(isAllOneColor([[4, 4], [4, 4]])).toBe(true);
    expect(isAllOneColor([[5, 5], [5, 5]])).toBe(true);
  });

  it('returns false for 2x2 boards of multiple colors', () => {
    expect(isAllOneColor([[0, 0], [0, 1]])).toBe(false);
    expect(isAllOneColor([[1, 1], [2, 1]])).toBe(false);
    expect(isAllOneColor([[2, 3], [2, 2]])).toBe(false);
    expect(isAllOneColor([[1, 2], [3, 4]])).toBe(false);
    expect(isAllOneColor([[4, 2], [2, 4]])).toBe(false);
    expect(isAllOneColor([[5, 1], [2, 3]])).toBe(false);
  });

  it('returns true for 3x3 boards of one color', () => {
    expect(isAllOneColor([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toBe(true);
    expect(isAllOneColor([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toBe(true);
    expect(isAllOneColor([[2, 2, 2], [2, 2, 2], [2, 2, 2]])).toBe(true);
    expect(isAllOneColor([[3, 3, 3], [3, 3, 3], [3, 3, 3]])).toBe(true);
    expect(isAllOneColor([[4, 4, 4], [4, 4, 4], [4, 4, 4]])).toBe(true);
    expect(isAllOneColor([[5, 5, 5], [5, 5, 5], [5, 5, 5]])).toBe(true);
  });
});
