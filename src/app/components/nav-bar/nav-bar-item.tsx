import { Center } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import classnames from 'classnames';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { NavBarItemData } from './nav-bar.model';
import styles from './nav-bar.module.scss';

interface NavBarItemProps extends NavBarItemData {
  isSelected?: boolean;
  className: string;
  onItemSelect?: () => void;
}

export const NavBarItem = ({
  icon,
  redirectPath,
  isSelected,
  className,
  onItemSelect,
}: NavBarItemProps) => {
  const iconElement = (
    <Icon
      as={icon}
      aria-label={redirectPath || 'Link'}
      className={className}
      color="red"
    />
  );

  return (
    <Center
      w="full"
      className={classnames(styles.navBarItemContainer, {
        [styles.selected]: isSelected,
      })}
      onClick={onItemSelect}
    >
      {redirectPath ? (
        <ReactRouterLink to={redirectPath}>{iconElement}</ReactRouterLink>
      ) : (
        iconElement
      )}
    </Center>
  );
};
