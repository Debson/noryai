import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { ACTION_TYPES, ScreenState } from './types';

const initialState: ScreenState = {
  pageName: undefined,
};

const reducer: Reducer<ScreenState, PayloadAction<ScreenState>> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.SET_SCREEN_STATE_NAME_CHANGE_SUCCESS:
      return {
        ...state,
        pageName: payload.pageName,
      };
  }

  return state;
};

export { reducer as screenReducer };
