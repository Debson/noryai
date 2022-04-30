import { Box, Flex, SimpleGrid, VStack } from '@chakra-ui/react';
import classnames from 'classnames';
import React from 'react';
import { NavBarItem } from './nav-bar-item';
import { NavBarProps } from './nav-bar.component';
import { NavBarPropsShared } from './nav-bar.model';
import styles from './nav-bar.module.scss';

export const NavBarDesktopView: React.FC<NavBarProps & NavBarPropsShared> = ({
  headeritem,
  navBarItems,
  footerItem,
  isItemSelected,
  onItemSelect,
}) => {
  return (
    <VStack
      as={Flex}
      spacing="1rem"
      h="full"
      className={classnames(styles.navBarContainer, styles.navBarBase)}
    >
      <Box>
        <NavBarItem
          key={`nav-bar-item-${headeritem.id}`}
          {...headeritem}
          className={styles.headerIcon}
          onItemSelect={() => onItemSelect(headeritem.id)}
        />
      </Box>

      {navBarItems?.length && (
        <SimpleGrid
          as={Flex}
          w="full"
          justifyItems="center"
          alignItems="start"
          scrollBehavior="auto"
        >
          {navBarItems?.map(navBarItem => (
            <NavBarItem
              key={`nav-bar-item-${navBarItem.id}`}
              {...navBarItem}
              isSelected={isItemSelected(navBarItem)}
              className={classnames(styles.elementIcon, {
                [styles.selected]: isItemSelected(navBarItem),
              })}
              onItemSelect={() => onItemSelect(navBarItem.id)}
            />
          ))}
        </SimpleGrid>
      )}

      {footerItem && (
        <Flex w="full" h="full" alignItems="end" pb="1.5rem">
          <NavBarItem
            key={`nav-bar-item-${footerItem.id}`}
            {...footerItem}
            isSelected={isItemSelected(footerItem)}
            className={classnames(styles.elementIcon, {
              [styles.selected]: isItemSelected(footerItem),
            })}
            onItemSelect={() => onItemSelect(footerItem.id)}
          />
        </Flex>
      )}
    </VStack>
  );
};
