import { Color } from './types';

export const COLOR_COUNT = 6;

export const COLOR_ARRAY = [
  Color.RED,
  Color.ORANGE,
  Color.YELLOW,
  Color.GREEN,
  Color.BLUE,
  Color.PURPLE,
];

export const getRandomColor = (rng = Math.random): Color => {
  const i = Math.floor(rng() * COLOR_COUNT);
  const color = COLOR_ARRAY[i];
  return color;
};

export const colorVarMap = new Map<Color, string>([
  [Color.RED, 'var(--color-red)'],
  [Color.ORANGE, 'var(--color-orange)'],
  [Color.YELLOW, 'var(--color-yellow)'],
  [Color.GREEN, 'var(--color-green)'],
  [Color.BLUE, 'var(--color-blue)'],
  [Color.PURPLE, 'var(--color-purple)'],
]);
