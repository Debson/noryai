import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import { RootState } from '../state.model';

const screenStateSelector = createSelector(
  (state: RootState) => state.screen,
  screen => screen
);

export const useScreenState = () => useAppSelector(screenStateSelector);
