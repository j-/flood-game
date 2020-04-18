import { Action } from 'redux';
import { Color } from '../types';

/* Reset action */

export const ACTION_RESET = 'RESET';

export interface ActionReset extends Action<typeof ACTION_RESET> { }

export const isActionReset = (action: Action): action is ActionReset => (
  action.type === ACTION_RESET
);

export const reset = (): ActionReset => ({
  type: ACTION_RESET,
});

/* Start game action */

export const ACTION_START_GAME = 'START_GAME';

export interface ActionStartGame extends Action<typeof ACTION_START_GAME> {
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

/* Flood action */

export const ACTION_FLOOD = 'FLOOD';

export interface ActionFlood extends Action<typeof ACTION_FLOOD> {
  data: {
    color: Color;
  };
}

export const isActionFlood = (action: Action): action is ActionFlood => (
  action.type === ACTION_FLOOD
);

export const flood = (color: Color): ActionFlood => ({
  type: ACTION_FLOOD,
  data: {
    color,
  },
});

/* Undo move action */

export const ACTION_UNDO_MOVE = 'UNDO_MOVE';

export interface ActionUndoMove extends Action<typeof ACTION_UNDO_MOVE> { }

export const isActionUndoMove = (action: Action): action is ActionUndoMove => (
  action.type === ACTION_UNDO_MOVE
);

export const undoMove = (): ActionUndoMove => ({
  type: ACTION_UNDO_MOVE,
});
