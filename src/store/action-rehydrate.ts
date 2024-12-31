import type { Action } from 'redux';
import { REHYDRATE, type RehydrateAction } from 'redux-persist';

export const isActionRehydrate = (action: Action): action is RehydrateAction => (
  action.type === REHYDRATE
);
