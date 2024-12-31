import type { FC } from 'react';
import { useGameState } from '../use-game-state';
import { Seed } from './Seed';
import { useNavigate } from 'react-router';
import { Route } from '../route';

export const SeedConnected: FC = () => {
  const { seed, seedType } = useGameState();
  const navigate = useNavigate();

  return (
    <Seed
      seed={seed}
      seedType={seedType}
      onClick={() => navigate(Route.CUSTOM_SEED)}
    />
  );
};
