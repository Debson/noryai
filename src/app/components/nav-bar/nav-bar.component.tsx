import { Box, Flex, SimpleGrid, VStack } from '@chakra-ui/react';
import classnames from 'classnames';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { NavBarItem } from './nav-bar-item';
import { NavBarItemData } from './nav-bar.model';
import styles from './nav-bar.module.scss';

interface NavBarProps {
  headeritem: NavBarItemData;
  navBarItems?: NavBarItemData[];
  footerItem?: NavBarItemData;
}

export const NavBar = ({
  headeritem,
  navBarItems,
  footerItem,
}: NavBarProps) => {
  const dispatch = useAppDispatch();
  const [selectedItemId, setSelectedItemId] = useState<string>();

  const handleOnItemSelect = (itemId: string) => {
    setSelectedItemId(itemId);
    const clickableItems: NavBarItemData[] = [
      headeritem,
      ...(navBarItems ?? []),
      ...(footerItem ? [footerItem] : []),
    ];
    const clickedItem = clickableItems.find(
      navBarItem => navBarItem.id === itemId
    );
  };

  const isItemSelected = (itemData: NavBarItemData) =>
    itemData.id === selectedItemId;

  return (
    <VStack
      as={Flex}
      spacing="1rem"
      h="full"
      className={styles.navBarContainer}
    >
      <Box>
        <NavBarItem {...headeritem} className={styles.headerIcon} />
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
              {...navBarItem}
              isSelected={isItemSelected(navBarItem)}
              className={classnames(styles.elementIcon, {
                [styles.selected]: isItemSelected(navBarItem),
              })}
              onItemSelect={() => handleOnItemSelect(navBarItem.id)}
            />
          ))}
        </SimpleGrid>
      )}

      {footerItem && (
        <Flex h="full" alignItems="end" pb="1.5rem" w="full">
          <NavBarItem
            {...footerItem}
            isSelected={isItemSelected(footerItem)}
            className={classnames(styles.elementIcon, {
              [styles.selected]: isItemSelected(footerItem),
            })}
            onItemSelect={() => handleOnItemSelect(footerItem.id)}
          />
        </Flex>
      )}
    </VStack>
  );
};
