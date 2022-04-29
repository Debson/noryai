import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { ACTION_TYPES, NavBarState } from './types';

const initialState: NavBarState = {
  selectedOption: undefined,
};

const reducer: Reducer<NavBarState, PayloadAction<NavBarState>> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.SET_SELECTED_OPTION_SUCCESS:
      return {
        ...state,
        selectedOption: payload.selectedOption,
      };
  }

  return state;
};

export { reducer as navBarReducer };
