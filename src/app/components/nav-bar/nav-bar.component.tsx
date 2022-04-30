import { useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { setScreenStateNameChangeRequest } from '../../store/screen';
import { NavBarDesktopView } from './nav-bar-desktop.view';
import { NavBarMobileView } from './nav-bar-mobile.view';
import { NavBarItemData } from './nav-bar.model';

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

  const [isMobile] = useMediaQuery('(max-device-width: 768px)');

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

  return isMobile ? (
    <NavBarMobileView
      headeritem={headeritem}
      navBarItems={navBarItems}
      footerItem={footerItem}
      isItemSelected={isItemSelected}
      onItemSelect={handleOnItemSelect}
    />
  ) : (
    <NavBarDesktopView
      headeritem={headeritem}
      navBarItems={navBarItems}
      footerItem={footerItem}
      isItemSelected={isItemSelected}
      onItemSelect={handleOnItemSelect}
    />
  );
};
