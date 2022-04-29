import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { navBarReducer } from './navbar';
import { navBarSaga } from './navbar/sagas';
import { RootState } from './state.model';

const appReducer = combineReducers<RootState>({ navBar: navBarReducer });

export function* rootSaga() {
  yield all([fork(navBarSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
