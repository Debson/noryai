import { IconProp } from '../icons/icon.model';

export interface NavBarItemData {
  id: string;
  pageName: string;
  icon: IconProp;
  redirectPath?: string;
}

export interface NavBarPropsShared {
  isItemSelected: (itemData: NavBarItemData) => boolean;
  onItemSelect: (itemId: string | undefined) => void;
}
