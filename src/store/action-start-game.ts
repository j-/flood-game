import type { Action } from 'redux';
import { getRandomSeed, getTodaysSeed, normalizeSeed, SeedType } from '../seed';

export const ACTION_START_GAME = 'START_GAME';

export type ActionStartGame = Action<typeof ACTION_START_GAME> & {
  data: {
    seed: number;
  };
}

export const isActionStartGame = (action: Action): action is ActionStartGame => (
  action.type === ACTION_START_GAME
);

export const startGame = (seed = getRandomSeed(), type = SeedType.CUST): ActionStartGame => ({
  type: ACTION_START_GAME,
  data: {
    seed: normalizeSeed(seed, type),
  },
});

export const todaysGame = (seed = getTodaysSeed()): ActionStartGame => (
  startGame(seed, SeedType.DATE)
);
