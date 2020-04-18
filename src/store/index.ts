import { Reducer } from 'redux';
import seedrandom from 'seedrandom';
import { isActionReset, isActionStartGame, isActionFlood, isActionUndoMove } from './actions';
import { Board, Color } from '../types';
import { buildBoard, randomiseBoard, getBoardColor, flood, isAllOneColor } from '../board';

export interface RootReducerState {
  seed: string;
  board: Board | null;
  lastBoard: Board | null;
  moves: number;
  isGameOver: boolean;
  isGameWon: boolean;
  currentColor: Color | null;
}

export const DEFAULT_STATE: RootReducerState = {
  seed: '',
  lastBoard: null,
  board: null,
  moves: 0,
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
    const board = buildBoard(14, 14);
    randomiseBoard(board, seedrandom(seed));
    const currentColor = getBoardColor(board, 0, 0);
    return {
      seed,
      board,
      currentColor,
      lastBoard: null,
      moves: 0,
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
    const newMoves = moves + 1;
    if (isAllOneColor(newBoard)) {
      isGameOver = true;
      isGameWon = true;
      board = null;
    } else if (newMoves >= 25) {
      isGameOver = true;
    }
    return {
      ...state,
      lastBoard: board,
      board: newBoard,
      moves: newMoves,
      currentColor: color,
      isGameOver,
      isGameWon,
    };
  }

  if (isActionUndoMove(action)) {
    const { lastBoard, moves } = state;
    if (!lastBoard) return state;
    return {
      ...state,
      lastBoard: null,
      board: lastBoard,
      moves: moves - 1,
      currentColor: getBoardColor(lastBoard, 0, 0),
    };
  }

  return state;
};

export default reducer;

export const getSeed = (state: RootReducerState) => state.seed;
export const getMoves = (state: RootReducerState) => state.moves;
export const getBoard = (state: RootReducerState) => state.board;
export const isGameOver = (state: RootReducerState) => state.isGameOver;
export const isGameWon = (state: RootReducerState) => state.isGameWon;
export const getCurrentColor = (state: RootReducerState) => state.currentColor;
export const canUndoLastMove = (state: RootReducerState) => state.lastBoard !== null;
