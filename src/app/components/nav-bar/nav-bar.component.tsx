import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '../../store';
import { setSelectedOptionRequest } from '../../store/navbar';
import styles from './nav-bar.module.scss';

interface NavBarProps {}

export const NavBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.buttonContainer}>
      <Button
        onClick={() =>
          dispatch(setSelectedOptionRequest({ selectedOption: 'test' }))
        }
      >
        Click
      </Button>
    </div>
  );
};
