import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES, NavBarState } from './types';

function* setSelectedOption({ payload }: PayloadAction<NavBarState>) {
  yield put(actions.setSelectedOptionSuccess(payload));
}

export function* navBarSaga() {
  yield all([
    takeLatest(ACTION_TYPES.SET_SELECTED_OPTION_REQUEST, setSelectedOption),
  ]);
}
