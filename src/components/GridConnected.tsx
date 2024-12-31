import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { Grid } from './Grid';

export const GridConnected: FC = () => {
  const { board, flood } = useGameState();

  if (!board) return null;

  return (
    <Grid board={board} onClick={flood} />
  );
};
