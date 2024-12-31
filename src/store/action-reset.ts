import type { Action } from 'redux';

export const ACTION_RESET = 'RESET';

export type ActionReset = Action<typeof ACTION_RESET>;

export const isActionReset = (action: Action): action is ActionReset => (
  action.type === ACTION_RESET
);

export const reset = (): ActionReset => ({
  type: ACTION_RESET,
});
