import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorNames, type Color } from './color';
import { getTodaysSeed, SeedType } from './seed';
import {
  canUndoLastMove,
  getBoard,
  getCurrentColor,
  getMoveCount,
  getMoveLimit,
  getSeed,
  getSeedType,
  isGameOver,
  isGameWon,
  canRestart as selectCanRestart,
} from './store';
import { flood as floodAction, startGame, undoMove } from './store/actions';
import { useHighScoreConnected } from './use-high-score';

export const useGameState = () => {
  const dispatch = useDispatch();
  const seed = useSelector(getSeed);
  const seedType = useSelector(getSeedType);
  const board = useSelector(getBoard);
  const moves = useSelector(getMoveCount);
  const moveLimit = useSelector(getMoveLimit);
  const gameOver = useSelector(isGameOver);
  const gameWon = useSelector(isGameWon);
  const canUndo = useSelector(canUndoLastMove);
  const canRestart = useSelector(selectCanRestart);
  const currentColor = useSelector(getCurrentColor);
  const highScore = useHighScoreConnected();

  const undo = useCallback(() => {
    dispatch(undoMove());
    window.dataLayer?.push({ event: 'undo_move' });
    window.umami?.track('Undo move');
  }, [dispatch]);

  const restart = useCallback(() => {
    dispatch(startGame(seed, seedType));
    window.dataLayer?.push({ event: 'restart_game' });
    window.umami?.track('Restart game');
  }, [dispatch, seed, seedType]);

  const newGame = useCallback((seed?: number) => {
    dispatch(startGame(seed));
    window.dataLayer?.push({
      event: 'new_game',
      seed: String(seed),
    });
    window.umami?.track('New game');
  }, [dispatch]);

  const todaysGame = useCallback(() => {
    const seed = getTodaysSeed();
    dispatch(startGame(seed, SeedType.DATE));
    window.dataLayer?.push({ event: 'todays_game' });
    window.umami?.track('Today\'s game', { seed });
  }, [dispatch]);

  const flood = useCallback((color: Color) => {
    dispatch(floodAction(color));
    window.dataLayer?.push({ event: 'game_move' });
    window.umami?.track('Game move', {
      colorIndex: color,
      colorName: colorNames.get(color),
    });
  }, [dispatch]);

  return {
    seed,
    seedType,
    board,
    moves,
    moveLimit,
    gameOver,
    gameWon,
    canUndo,
    canRestart,
    currentColor,
    highScore,
    undo,
    restart,
    newGame,
    todaysGame,
    flood,
  };
};

export type GameState = ReturnType<typeof useGameState>;
