import type { BoxProps } from '@mui/material/Box';
import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { GameOver } from './GameOver';

export type GameOverConnectedProps = BoxProps;

export const GameOverConnected: FC<GameOverConnectedProps> = (props) => {
  const { gameOver, gameWon, moves } = useGameState();

  return (
    <GameOver
      gameOver={gameOver}
      gameWon={gameWon}
      moves={moves}
      {...props}
    />
  );
};
