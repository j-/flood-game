import { describe, expect, it } from 'bun:test';
import {
  type Coords,
  areBoardsEqual,
  getValidMoves,
  isAllOneColor,
  iterateValidNeighboringCoords,
} from './board';

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

describe('getValidMoves()', () => {
  it('yields all board colors except the current color', () => {
    const actual = Array.from(getValidMoves([[0, 1, 2]]));
    expect(actual).toEqual([1, 2]);
  });
});

describe('areBoardsEqual()', () => {
  it('returns false if rows are transposed', () => {
    const actual = areBoardsEqual(
      [[0, 0], [1, 1]],
      [[1, 1], [0, 0]],
    );
    expect(actual).toBe(false);
  });

  it('returns false if boards are of inequal dimensions', () => {
    const actual = areBoardsEqual(
      [[0, 0], [0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    );
    expect(actual).toBe(false);
  });

  it('returns true if boards are the same', () => {
    const actual = areBoardsEqual(
      [[0, 1, 2]],
      [[0, 1, 2]],
    );
    expect(actual).toBe(true);
  });
});

describe('iterateValidNeighboringCoords()', () => {
  /*
   *  0 1 2
   *  3 4 5
   *  6 7 8
   */

  const pos0: Coords = [0, 0];
  const pos1: Coords = [1, 0];
  const pos2: Coords = [2, 0];
  const pos3: Coords = [0, 1];
  const pos4: Coords = [1, 1];
  const pos5: Coords = [2, 1];
  const pos6: Coords = [0, 2];
  const pos7: Coords = [1, 2];
  const pos8: Coords = [2, 2];

  type Case = [
    center: Coords,
    coords: Coords[],
  ];

  it.each<Case>([
    [pos0, [pos1, pos3]],
    [pos1, [pos2, pos4, pos0]],
    [pos2, [pos5, pos1]],
    [pos3, [pos0, pos4, pos6]],
    [pos4, [pos1, pos5, pos7, pos3]],
    [pos5, [pos2, pos8, pos4]],
    [pos6, [pos3, pos7]],
    [pos7, [pos4, pos8, pos6]],
    [pos8, [pos5, pos7]],
  ])('yields neighbors for (%p) as %p', (center, expected) => {
    const actual = Array.from(iterateValidNeighboringCoords(3, 3, ...center));
    expect(actual).toEqual(expected);
  });
});
