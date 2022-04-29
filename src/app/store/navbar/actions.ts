import { action } from 'typesafe-actions';
import { ACTION_TYPES, NavBarState } from './types';

export const setSelectedOptionRequest = (state: NavBarState) =>
  action(ACTION_TYPES.SET_SELECTED_OPTION_REQUEST, state);

export const setSelectedOptionSuccess = (state: NavBarState) =>
  action(ACTION_TYPES.SET_SELECTED_OPTION_SUCCESS, state);
