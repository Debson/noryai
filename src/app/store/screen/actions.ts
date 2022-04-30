import { action } from 'typesafe-actions';
import { ACTION_TYPES, ScreenState } from './types';

export const setScreenStateNameChangeRequest = (
  pageName: Pick<ScreenState, 'pageName'>
) => action(ACTION_TYPES.SET_SCREEN_STATE_NAME_CHANGE_REQUEST, pageName);

export const setScreenStateNameChangeSuccess = (
  pageName: Pick<ScreenState, 'pageName'>
) => action(ACTION_TYPES.SET_SCREEN_STATE_NAME_CHANGE_SUCCESS, pageName);
