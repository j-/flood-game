import { Board, Color } from './types';
import { getRandomColor } from './color';

export const getBoardWidth = (board: Board): number => board[0].length;
export const getBoardHeight = (board: Board): number => board.length;
export const getBoardColor = (board: Board, x: number, y: number): Color => board[y][x];
export const setBoardColor = (board: Board, x: number, y: number, color: Color): void => { board[y][x] = color; };

export const buildBoard = (width: number, height: number): Board => {
  const board = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
};

export const copyBoard = (board: Board): Board => {
  const copy: Board = [];
  const height = getBoardHeight(board);
  for (let y = 0; y < height; y++) {
    copy.push([...board[y]]);
  }
  return copy;
};

export const randomiseBoard = (board: Board, rng = Math.random): void => {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = getRandomColor(rng);
      setBoardColor(board, x, y, color);
    }
  }
};

export const isAllOneColor = (board: Board): boolean => {
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const target = getBoardColor(board, 0, 0);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = getBoardColor(board, x, y);
      if (color !== target) return false;
    }
  }
  return true;
};

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
export const flood = (board: Board, replacement: Color): Board => {
  const copy = copyBoard(board);
  const target = getBoardColor(board, 0, 0);
  if (target === replacement) return copy;
  const width = getBoardWidth(board);
  const height = getBoardHeight(board);
  const queue = [[0, 0]];
  setBoardColor(copy, 0, 0, replacement);
  while (queue.length) {
    const [x, y] = queue.shift() as [number, number];
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
};
