export enum Color {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
}

export const colorNames = new Map<Color, string>([
  [Color.RED, 'Red'],
  [Color.ORANGE, 'Orange'],
  [Color.YELLOW, 'Yellow'],
  [Color.GREEN, 'Green'],
  [Color.BLUE, 'Blue'],
  [Color.PURPLE, 'Purple'],
]);

export type Board = Color[][]
