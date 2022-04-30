import { Box, Flex, HStack, SimpleGrid } from '@chakra-ui/react';
import classnames from 'classnames';
import React from 'react';
import { NavBarItem } from './nav-bar-item';
import { NavBarProps } from './nav-bar.component';
import { NavBarItemData, NavBarPropsShared } from './nav-bar.model';
import styles from './nav-bar.module.scss';

export const NavBarMobileView: React.FC<NavBarProps & NavBarPropsShared> = ({
  headeritem,
  navBarItems,
  footerItem,
  isItemSelected,
  onItemSelect,
}) => {
  const displayedColumns: NavBarItemData[] = [
    ...(navBarItems ?? []),
    ...(footerItem ? [footerItem] : []),
  ];

  return (
    <HStack
      as={Flex}
      spacing="1rem"
      pl="1rem"
      w="full"
      className={classnames(styles.navBarContainerMobile, styles.navBarBase)}
    >
      <Box>
        <NavBarItem
          key={`nav-bar-item-${headeritem.id}`}
          {...headeritem}
          isMobile={true}
          className={styles.headerIcon}
          onItemSelect={() => onItemSelect(headeritem.id)}
        />
      </Box>

      <HStack as={Flex} h="full" w="full" justifyContent="end">
        {navBarItems?.length && (
          <SimpleGrid
            as={Flex}
            w="max-content"
            h="full"
            columns={displayedColumns.length}
            alignItems="end"
            justifyContent="center"
          >
            {navBarItems?.map(navBarItem => (
              <NavBarItem
                key={`nav-bar-item-${navBarItem.id}`}
                {...navBarItem}
                isMobile={true}
                isSelected={isItemSelected(navBarItem)}
                className={classnames(styles.elementIcon, {
                  [styles.selected]: isItemSelected(navBarItem),
                })}
                onItemSelect={() => onItemSelect(navBarItem.id)}
              />
            ))}
            {footerItem && (
              <NavBarItem
                key={`nav-bar-item-${footerItem.id}`}
                {...footerItem}
                isMobile={true}
                isSelected={isItemSelected(footerItem)}
                className={classnames(styles.elementIcon, {
                  [styles.selected]: isItemSelected(footerItem),
                })}
                onItemSelect={() => onItemSelect(footerItem.id)}
              />
            )}
          </SimpleGrid>
        )}
      </HStack>
    </HStack>
  );
};
