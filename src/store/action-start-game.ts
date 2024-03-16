import { Action } from 'redux';

export const ACTION_START_GAME = 'START_GAME';

export type ActionStartGame = Action<typeof ACTION_START_GAME> & {
  data: {
    seed: string;
  };
}

export const isActionStartGame = (action: Action): action is ActionStartGame => (
  action.type === ACTION_START_GAME
);

export const startGame = (seed = Date.now().toString()): ActionStartGame => ({
  type: ACTION_START_GAME,
  data: {
    seed,
  },
});
