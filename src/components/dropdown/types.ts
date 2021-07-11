import { MenuInfo } from 'rc-menu/lib/interface';

export type DropdownProps = {
  options: DropdownMenuItem[];
  placeholder: string;
  selected: number | string | undefined;
  label?: string;
  handleClick: (e: MenuInfo) => void;
};

export type DropdownMenuItem = {
  id: string | number;
  name: string;
};
