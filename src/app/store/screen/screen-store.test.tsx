import { all, takeLatest } from 'redux-saga/effects';
import { screenStateSaga, setPageName } from './sagas';
import { ACTION_TYPES } from './types';

describe('[Screen Store]', () => {
  const genObject = screenStateSaga();
  test('Saga should run correct generator based on given action', () => {
    expect(genObject.next().value).toEqual(
      all([
        takeLatest(
          ACTION_TYPES.SET_SCREEN_STATE_NAME_CHANGE_REQUEST,
          setPageName
        ),
      ])
    );
  });

  // TODO - no time
  test('Check if reducer returns correct state based on provided payload and action type', () => {});
});
