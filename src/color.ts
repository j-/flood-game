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
