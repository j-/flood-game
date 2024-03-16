import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodaysSeed } from './seed';
import {
  canUndoLastMove,
  getBoard,
  getMoveCount,
  getMoveLimit,
  getSeed,
  isGameOver,
  isGameWon,
  canRestart as selectCanRestart,
} from './store';
import { flood as floodAction, startGame, undoMove } from './store/actions';
import { Color } from './types';
import { useHighScoreConnected } from './use-high-score';

export const useGameState = () => {
  const dispatch = useDispatch();
  const seed = useSelector(getSeed);
  const board = useSelector(getBoard);
  const moves = useSelector(getMoveCount);
  const moveLimit = useSelector(getMoveLimit);
  const gameOver = useSelector(isGameOver);
  const gameWon = useSelector(isGameWon);
  const canUndo = useSelector(canUndoLastMove);
  const canRestart = useSelector(selectCanRestart);
  const highScore = useHighScoreConnected();

  const undo = useCallback(() => {
    dispatch(undoMove());
    window.dataLayer?.push({ event: 'undo_move' });
  }, [dispatch]);

  const restart = useCallback(() => {
    dispatch(startGame(seed));
    window.dataLayer?.push({ event: 'restart_game' });
  }, [dispatch, seed]);

  const newGame = useCallback(() => {
    dispatch(startGame());
    window.dataLayer?.push({ event: 'new_game' });
  }, [dispatch]);

  const todaysGame = useCallback(() => {
    const seed = getTodaysSeed();
    dispatch(startGame(seed));
    window.dataLayer?.push({ event: 'todays_game' });
  }, [dispatch]);

  const flood = useCallback((color: Color) => {
    dispatch(floodAction(color));
    window.dataLayer?.push({ event: 'game_move' });
  }, [dispatch]);

  return {
    seed,
    board,
    moves,
    moveLimit,
    gameOver,
    gameWon,
    canUndo,
    canRestart,
    highScore,
    undo,
    restart,
    newGame,
    todaysGame,
    flood,
  };
};
