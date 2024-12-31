import type { StackProps } from '@mui/material/Stack';
import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { ScoreBoard } from './ScoreBoard';

export const ScoreBoardConnected: FC<StackProps> = (props) => {
  const {
    moves: currentScore,
    moveLimit,
    highScore,
  } = useGameState();

  return (
    <ScoreBoard
      currentScore={currentScore}
      moveLimit={moveLimit}
      highScore={highScore}
      {...props}
    />
  );
};
