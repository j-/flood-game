import { Action } from 'redux';
import { Color } from '../types';

export const ACTION_FLOOD = 'FLOOD';

export type ActionFlood = Action<typeof ACTION_FLOOD> & {
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
