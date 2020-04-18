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

export const COLOR_MAP = new Map([
  [Color.RED,    'hsl(0, 80%, 60%)'],
  [Color.ORANGE, 'hsl(60, 80%, 60%)'],
  [Color.YELLOW, 'hsl(120, 80%, 60%)'],
  [Color.GREEN,  'hsl(180, 80%, 60%)'],
  [Color.BLUE,   'hsl(240, 80%, 60%)'],
  [Color.PURPLE, 'hsl(300, 80%, 60%)'],
]);

export const getRandomColor = (rng = Math.random): Color => {
  const i = Math.floor(rng() * COLOR_COUNT);
  const color = COLOR_ARRAY[i];
  return color;
};

export const getFillColor = (color: Color): string => {
  const fillColor = COLOR_MAP.get(color);
  if (!fillColor) {
    throw new Error('Unrecognised color');
  }
  return fillColor;
};
