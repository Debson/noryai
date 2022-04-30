import { ScreenApiResponse } from '../../app/api/screen/screen.model';
import {
  LabourSVG,
  NoryAISVG,
  SalesSVG,
  SettingsSVG,
} from '../../app/components/icons';
import { NavBarItemData } from '../../app/components/nav-bar/nav-bar.model';

/**
 *  Fixtures for nav bar data.
 *  In real world scenario I would expect those values
 *  to be retrieved from some API endpoint.
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

export const screenApiMockResponse: ScreenApiResponse = {
  message:
    'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3196.jpg',
  status: 'success',
};
