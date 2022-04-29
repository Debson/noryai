import React from 'react';
import { useAppDispatch } from '../../store';
import styles from './nav-bar.module.scss';

export const NavBar = () => {
  const dispatch = useAppDispatch();

  return <div className={styles.buttonContainer}></div>;
};
