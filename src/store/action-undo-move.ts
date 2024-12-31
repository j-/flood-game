import type { Action } from 'redux';

export const ACTION_UNDO_MOVE = 'UNDO_MOVE';

export type ActionUndoMove = Action<typeof ACTION_UNDO_MOVE>;

export const isActionUndoMove = (action: Action): action is ActionUndoMove => (
  action.type === ACTION_UNDO_MOVE
);

export const undoMove = (): ActionUndoMove => ({
  type: ACTION_UNDO_MOVE,
});
