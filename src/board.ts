import { Color, getRandomColor } from './color';

export type Board = Color[][]

export type Coords = [x: number, y: number];

export function getBoardWidth(board: Board): number {
  return board[0] ? board[0].length : 0;
}

export function getBoardHeight(board: Board): number {
  return board.length;
}

export function getBoardColor(board: Board, x: number, y: number): Color | null {
  return board[y]?.[x] ?? null;
}

export function setBoardColor(board: Board, x: number, y: number, color: Color): void {
  board[y][x] = color;
}

export function* iterateCoord(length: number): IterableIterator<number> {
  for (let i = 0; i < length; i++) {
    yield i;
  }
}

export function* iterateCoords(width: number, height: number): IterableIterator<Coords> {
  for (const y of iterateCoord(height)) {
    for (const x of iterateCoord(width)) {
      yield [x, y];
    }
  }
}

export function* iterateValidNeighboringCoords(w: number, h: number, x: number, y: number): IterableIterator<Coords> {
  if (y > 0) {
    // N
    yield [x, y - 1];
  }
  if (x < w - 1) {
    // E
    yield [x + 1, y];
  }
  if (y < h - 1) {
    // S
    yield [x, y + 1];
  }
  if (x > 0) {
    // W
    yield [x - 1, y];
  }
}

export function buildBoard(width: number, height: number): Board {
  return Array.from(iterateCoord(height), () => {
    return Array.from(iterateCoord(width), () => 0);
  });
}

export function copyBoard(board: Board): Board {
  const copy: Board = [];
  const height = getBoardHeight(board);
  for (const y of iterateCoord(height)) {
    copy.push([...board[y]]);
  }
  return copy;
}

export function randomiseBoard(board: Board, rng = Math.random): void {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  for (const [x, y] of iterateCoords(width, height)) {
    const color = getRandomColor(rng);
    setBoardColor(board, x, y, color);
  }
}

export function boardHasColor(board: Board, target: Color): boolean {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  for (const [x, y] of iterateCoords(width, height)) {
    const color = getBoardColor(board, x, y);
    if (color === target) return true;
  }
  return false;
}

export function isAllOneColor(board: Board): boolean {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const target = getBoardColor(board, 0, 0);
  for (const [x, y] of iterateCoords(width, height)) {
    const color = getBoardColor(board, x, y);
    if (color !== target) return false;
  }
  return true;
}

/**
@see https://en.wikipedia.org/wiki/Flood_fill#Alternative_implementations

Flood-fill (node, target-color, replacement-color):
  1. If target-color is equal to replacement-color, return.
  2. If color of node is not equal to target-color, return.
  3. Set the color of node to replacement-color.
  4. Set Q to the empty queue.
  5. Add node to the end of Q.
  6. While Q is not empty:
  7.     Set n equal to the first element of Q.
  8.     Remove first element from Q.
  9.     If the color of the node to the west of n is target-color,
             set the color of that node to replacement-color and add that node to the end of Q.
 10.     If the color of the node to the east of n is target-color,
             set the color of that node to replacement-color and add that node to the end of Q.
 11.     If the color of the node to the north of n is target-color,
             set the color of that node to replacement-color and add that node to the end of Q.
 12.     If the color of the node to the south of n is target-color,
             set the color of that node to replacement-color and add that node to the end of Q.
 13. Continue looping until Q is exhausted.
 14. Return.
*/
export function flood(board: Board, replacement: Color): Board {
  const copy = copyBoard(board);
  const target = getBoardColor(board, 0, 0);
  if (target === replacement) return copy;
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const queue: Coords[] = [[0, 0]];
  setBoardColor(copy, 0, 0, replacement);
  while (queue.length) {
    const [x, y] = queue.shift() as Coords;
    // East
    if (x + 1 < width) {
      const color = getBoardColor(copy, x + 1, y);
      if (color === target) {
        setBoardColor(copy, x + 1, y, replacement);
        queue.push([x + 1, y]);
      }
    }
    // South
    if (y + 1 < height) {
      const color = getBoardColor(copy, x, y + 1);
      if (color === target) {
        setBoardColor(copy, x, y + 1, replacement);
        queue.push([x, y + 1]);
      }
    }
    // West
    if (x > 0) {
      const color = getBoardColor(copy, x - 1, y);
      if (color === target) {
        setBoardColor(copy, x - 1, y, replacement);
        queue.push([x - 1, y]);
      }
    }
    // North
    if (y > 0) {
      const color = getBoardColor(copy, x, y - 1);
      if (color === target) {
        setBoardColor(copy, x, y - 1, replacement);
        queue.push([x, y - 1]);
      }
    }
  }
  return copy;
}

export function* getMoves(): IterableIterator<Color> {
  yield Color.RED;
  yield Color.ORANGE;
  yield Color.YELLOW;
  yield Color.GREEN;
  yield Color.BLUE;
  yield Color.PURPLE;
}

export function* getValidMoves(board: Board): IterableIterator<Color> {
  const currentColor = getBoardColor(board, 0, 0);
  for (const move of getMoves()) {
    if (move === currentColor) continue;
    if (boardHasColor(board, move)) yield move;
  }
}

export function areBoardsEqual(left: Board, right: Board): boolean {
  const leftWidth = getBoardWidth(left);
  if (leftWidth != getBoardWidth(right)) return false;
  const leftHeight = getBoardHeight(left);
  if (leftHeight != getBoardHeight(right)) return false;
  for (const [x, y] of iterateCoords(leftWidth, leftHeight)) {
    if (getBoardColor(left, x, y) !== getBoardColor(right, x, y)) {
      return false;
    }
  }
  return true;
}
