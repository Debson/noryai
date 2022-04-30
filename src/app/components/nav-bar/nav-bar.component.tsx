import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { setScreenStateNameChangeRequest } from '../../store/screen';
import { NavBarItem } from './nav-bar-item';
import { NavBarItemData } from './nav-bar.model';
import styles from './nav-bar.module.scss';

export interface NavBarProps {
  headeritem: NavBarItemData;
  navBarItems?: NavBarItemData[];
  footerItem?: NavBarItemData;
}

export const NavBar: React.FC<NavBarProps> = ({
  headeritem,
  navBarItems,
  footerItem,
}) => {
  const dispatch = useAppDispatch();
  const [selectedItemId, setSelectedItemId] = useState<string>();

  useEffect(() => {
    /** Initially always set current page as the main page,
     *  which is specified a header item */
    dispatch(
      setScreenStateNameChangeRequest({ pageName: headeritem.pageName })
    );
  }, []);

  const handleOnItemSelect = (itemId: string | undefined) => {
    /** Header item is not selectable (but it is clickable) */
    if (itemId === headeritem.id) {
      setSelectedItemId(undefined);
    } else {
      setSelectedItemId(itemId);
    }
    const clickableItems: NavBarItemData[] = [
      headeritem,
      ...(navBarItems ?? []),
      ...(footerItem ? [footerItem] : []),
    ];
    const clickedItem = clickableItems.find(
      navBarItem => navBarItem.id === itemId
    );
    if (clickedItem) {
      dispatch(
        setScreenStateNameChangeRequest({ pageName: clickedItem.pageName })
      );
    }
  };

  const isItemSelected = (itemData: NavBarItemData) =>
    itemData.id === selectedItemId;

  return (
    <Flex
      as={Flex}
      spacing="1rem"
      flexDirection={{ base: 'row', md: 'column' }}
      w={{ base: 'full', md: '5.5rem' }}
      h={{ base: '3.5rem', md: 'full' }}
      className={styles.navBarContainer}
    >
      <Box>
        <NavBarItem
          key={`nav-bar-item-${headeritem.id}`}
          {...headeritem}
          className={styles.headerIcon}
          onItemSelect={() => handleOnItemSelect(headeritem.id)}
        />
      </Box>

      <Flex
        w="full"
        h="full"
        flexDirection={{ base: 'row', md: 'column' }}
        justifyContent={{ base: 'end', md: 'center' }}
      >
        {navBarItems?.length && (
          <SimpleGrid
            as={Flex}
            columns={{ base: navBarItems.length, md: 1 }}
            w={{ base: 'max-content', md: 'full' }}
            h={{ base: 'full', md: 'auto' }}
            alignItems={{ base: 'start', md: 'start' }}
            justifyItems="center"
            justifyContent={{ base: 'center', md: 'unset' }}
          >
            {navBarItems?.map(navBarItem => (
              <NavBarItem
                key={`nav-bar-item-${navBarItem.id}`}
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
          <Flex
            w={{ base: 'auto', md: 'full' }}
            h={{ base: 'auto', md: 'full' }}
            alignItems="end"
            pb={{ base: '0', md: '1.5rem' }}
          >
            <NavBarItem
              key={`nav-bar-item-${footerItem.id}`}
              {...footerItem}
              isSelected={isItemSelected(footerItem)}
              className={classnames(styles.elementIcon, {
                [styles.selected]: isItemSelected(footerItem),
              })}
              onItemSelect={() => handleOnItemSelect(footerItem.id)}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
