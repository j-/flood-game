import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../types';
import { getSeed, getBoard, getMoves, isGameOver, isGameWon, canUndoLastMove } from '../store';
import { startGame, flood, undoMove } from '../store/actions';
import GameSVG from './GameSVG';
import './Game.css';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const seed = useSelector(getSeed);
  const board = useSelector(getBoard);
  const moves = useSelector(getMoves);
  const gameOver = useSelector(isGameOver);
  const gameWon = useSelector(isGameWon);
  const enableUndo = useSelector(canUndoLastMove);

  const handleClickUndo = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(undoMove());
  }, [dispatch]);

  const handleClickReset = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(startGame(seed));
  }, [dispatch, seed]);

  const handleClickNewGame = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(startGame());
  }, [dispatch]);

  const handleClickColor = React.useCallback((color: Color) => {
    dispatch(flood(color));
  }, [dispatch]);

  if (!board) return null;

  return (
    <div className="Game">
      <nav className="navbar navbar-light bg-light">
        <button
          className="btn btn-dark mr-auto"
          type="button"
          onClick={handleClickNewGame}
        >
          New game
        </button>
        <button
          className="btn btn-light ml-1"
          type="button"
          disabled={!enableUndo}
          onClick={handleClickUndo}
        >
          Undo move
        </button>
        <button
          className="btn btn-light ml-1"
          type="button"
          onClick={handleClickReset}
        >
          Restart
        </button>
      </nav>
      <div className="d-flex align-items-center mt-4 mb-4">
        <GameSVG
          board={board}
          onClick={handleClickColor}
        />
      </div>
      <div className="d-flex flex-column align-items-center">
        <span className="display-4">{moves} / 25</span>
        {gameOver && <strong className="mr-3">Game over</strong>}
        {gameWon && <strong className="mr-3">You win</strong>}
      </div>
    </div>
  );
};

export default Game;
