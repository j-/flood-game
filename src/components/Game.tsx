import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_MOVE_LIMIT } from '../constants';
import { getTodaysSeed } from '../seed';
import { canUndoLastMove, getBoard, getMoveCount, getSeed, isGameOver, isGameWon } from '../store';
import { flood, startGame, undoMove } from '../store/actions';
import { Color } from '../types';
import ColorButtons from './ColorButtons';
import './Game.css';
import Grid from './Grid';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const seed = useSelector(getSeed);
  const board = useSelector(getBoard);
  const moves = useSelector(getMoveCount);
  const gameOver = useSelector(isGameOver);
  const gameWon = useSelector(isGameWon);
  const enableUndo = useSelector(canUndoLastMove);

  const handleClickUndo = useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(undoMove());
    dataLayer.push({ event: 'undo_move' });
  }, [dispatch]);

  const handleClickReset = useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(startGame(seed));
    dataLayer.push({ event: 'restart_game' });
  }, [dispatch, seed]);

  const handleClickNewGame = useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(startGame());
    dataLayer.push({ event: 'new_game' });
  }, [dispatch]);

  const handleClickTodaysGame = useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    const seed = getTodaysSeed();
    dispatch(startGame(seed));
    dataLayer.push({ event: 'todays_game' });
  }, [dispatch]);

  const handleClickColor = useCallback((color: Color) => {
    dispatch(flood(color));
    dataLayer.push({ event: 'game_move' });
  }, [dispatch]);

  if (!board) return null;

  return (
    <div className="Game">
      <nav className="navbar navbar-light bg-light">
        <button
          className="btn btn-dark mr-1 my-2"
          type="button"
          onClick={handleClickNewGame}
        >
          New game
        </button>
        <button
          className="btn btn-light mr-auto my-2"
          type="button"
          onClick={handleClickTodaysGame}
        >
          Today's game
        </button>
        <button
          className="btn btn-light ml-auto my-2"
          type="button"
          disabled={!enableUndo}
          onClick={handleClickUndo}
        >
          Undo move
        </button>
        <button
          className="btn btn-light ml-1 my-2"
          type="button"
          onClick={handleClickReset}
        >
          Restart
        </button>
      </nav>
      <div className="mt-4 mb-4">
        <Grid
          board={board}
          onClick={handleClickColor}
        />
      </div>
      <div className="mt-4 mb-4">
        <ColorButtons />
      </div>
      <div className="mt-4 mb-4 d-flex flex-column align-items-center">
        <span className="display-4">{moves} / {DEFAULT_MOVE_LIMIT}</span>
        {gameOver && <strong className="mr-3">Game over</strong>}
        {gameWon && <strong className="mr-3">You win</strong>}
      </div>
    </div>
  );
};

export default Game;
