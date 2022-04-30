import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { screenReducer } from './screen';
import { screenStateSaga } from './screen/sagas';
import { RootState } from './state.model';

const appReducer = combineReducers<RootState>({ screen: screenReducer });

export function* rootSaga() {
  yield all([fork(screenStateSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
