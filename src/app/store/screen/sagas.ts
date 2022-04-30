import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES, ScreenState } from './types';

export function* setPageName({
  payload,
}: PayloadAction<Pick<ScreenState, 'pageName'>>) {
  yield put(actions.setScreenStateNameChangeSuccess(payload));
}

export function* screenStateSaga() {
  yield all([
    takeLatest(ACTION_TYPES.SET_SCREEN_STATE_NAME_CHANGE_REQUEST, setPageName),
  ]);
}
