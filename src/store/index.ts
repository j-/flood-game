import { Reducer } from 'redux';
import seedrandom from 'seedrandom';
import { buildBoard, flood, getBoardColor, getBoardHeight, getBoardWidth, isAllOneColor, randomiseBoard } from '../board';
import { DEFAULT_BOARD_SIZE, DEFAULT_MOVE_LIMIT } from '../constants';
import { serialize } from '../serialize';
import { Board, Color } from '../types';
import { isActionFlood, isActionReset, isActionStartGame, isActionUndoMove } from './actions';

export interface RootReducerState {
  seed: string;
  board: Board | null;
  lastBoard: Board | null;
  moves: Color[];
  isGameOver: boolean;
  isGameWon: boolean;
  currentColor: Color | null;
}

export const DEFAULT_STATE: RootReducerState = {
  seed: '',
  lastBoard: null,
  board: null,
  moves: [],
  isGameOver: false,
  isGameWon: false,
  currentColor: null,
};

export const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionReset(action)) {
    return DEFAULT_STATE;
  }

  if (isActionStartGame(action)) {
    const { seed } = action.data;
    const board = buildBoard(DEFAULT_BOARD_SIZE, DEFAULT_BOARD_SIZE);
    randomiseBoard(board, seedrandom(seed));
    const currentColor = getBoardColor(board, 0, 0);
    return {
      seed,
      board,
      currentColor,
      lastBoard: null,
      moves: [],
      isGameOver: false,
      isGameWon: false,
    };
  }

  if (isActionFlood(action)) {
    const { color } = action.data;
    let { board, moves, isGameOver, isGameWon, currentColor } = state;
    // Game must have started
    if (!board) return state;
    // Game cannot be over
    if (isGameOver) return state;
    // Must choose a new color
    if (currentColor === color) return state;
    const newBoard = flood(board, color);
    const newMoveCount = moves.length + 1;
    if (isAllOneColor(newBoard)) {
      isGameOver = true;
      isGameWon = true;
    } else if (newMoveCount >= DEFAULT_MOVE_LIMIT) {
      isGameOver = true;
    }
    return {
      ...state,
      lastBoard: board,
      board: newBoard,
      moves: newMoveCount === moves.length ? moves : [...moves, color],
      currentColor: color,
      isGameOver,
      isGameWon,
    };
  }

  if (isActionUndoMove(action)) {
    // Must be allowed to undo last move.
    if (!canUndoLastMove(state)) return state;
    const { lastBoard, moves } = state;
    if (!lastBoard) return state;
    return {
      ...state,
      lastBoard: null,
      board: lastBoard,
      moves: moves.slice(0, -1),
      currentColor: getBoardColor(lastBoard, 0, 0),
      isGameOver: false,
      isGameWon: false,
    };
  }

  return state;
};

export default reducer;

export const getSeed = (state: RootReducerState): string => state.seed;
export const getMoveCount = (state: RootReducerState): number => state.moves.length;
export const getMoveState = (state: RootReducerState): string => serialize(state.moves);
export const getBoard = (state: RootReducerState): Board | null => state.board;
export const isGameOver = (state: RootReducerState): boolean => state.isGameOver;
export const isGameWon = (state: RootReducerState): boolean => state.isGameWon;
export const getCurrentColor = (state: RootReducerState): Color | null => state.currentColor;
export const canUndoLastMove = (state: RootReducerState): boolean => state.lastBoard !== null;
export const getWidth = (state: RootReducerState): number | null => state.board ? getBoardWidth(state.board) : null;
export const getHeight = (state: RootReducerState): number | null => state.board ? getBoardHeight(state.board) : null;
