import { buildBoard, flood, isAllOneColor, randomiseBoard } from './board';
import { seedrandom } from './seedrandom';
import { deserialize } from './serialize';

export const validate = (width: number, height: number, seed: string, movesInput: string): boolean => {
  let board = buildBoard(width, height);
  const rng = seedrandom(seed);
  randomiseBoard(board, rng);
  const moves = deserialize(movesInput);
  for (const move of moves) {
    board = flood(board, move);
  }
  return isAllOneColor(board);
};
