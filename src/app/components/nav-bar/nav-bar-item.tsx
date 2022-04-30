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

export const NavBarItem: React.FC<NavBarItemProps> = ({
  icon,
  redirectPath,
  isSelected,
  className,
  onItemSelect,
}) => {
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
      className={classnames(styles.navBarItemContainer, {
        [styles.selected]: isSelected,
      })}
      w={{ base: '4.5rem', md: '100%' }}
      h={{ base: '100%', md: '4.5rem' }}
      pt={{ base: '0.7rem', md: '0' }}
      borderBottomWidth={{ base: '0.25rem', md: 0 }}
      borderRightWidth={{ base: 0, md: '0.25rem' }}
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
