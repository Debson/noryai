import { IconProp } from '../icons/icon.model';

export interface NavBarItemData {
  id: string;
  pageName: string;
  icon: IconProp;
  redirectPath?: string;
}
