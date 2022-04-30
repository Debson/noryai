import {
  LabourSVG,
  NoryAISVG,
  SalesSVG,
  SettingsSVG,
} from './components/icons';
import { NavBarItemData } from './components/nav-bar/nav-bar.model';

/**
 *  Fixtures for nav bar data.
 *  In real world scenario I would expect those values
 *  to be retrieved from some endpoint.
 */

export const appNavBarHeaderItemData: NavBarItemData = {
  id: 'noryai',
  pageName: 'Home',
  icon: NoryAISVG,
  redirectPath: '/',
};

export const appNavItemsData: NavBarItemData[] = [
  {
    id: 'sales',
    pageName: 'Sales',
    icon: SalesSVG,
    redirectPath: '/sales',
  },
  {
    id: 'labour',
    pageName: 'Labour',
    icon: LabourSVG,
    redirectPath: '/labour',
  },
];

export const appNavBarFooterItemData: NavBarItemData = {
  id: 'settings',
  pageName: 'Settings',
  icon: SettingsSVG,
  redirectPath: '/settings',
};
