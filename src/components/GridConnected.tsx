import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { GridSize } from './GridSize';

export const GridConnected: FC = () => {
  const { board, flood } = useGameState();

  if (!board) return null;

  return (
    <GridSize board={board} onClick={flood} />
  );
};
