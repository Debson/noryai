import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import { RootState } from '../state.model';

const navBarStateSelector = createSelector(
  (state: RootState) => state.navBar,
  navbar => navbar
);

export const useNavBarState = () => useAppSelector(navBarStateSelector);
