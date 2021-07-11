import { Button, Dropdown as AntDropdown, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { DownOutlined } from '@ant-design/icons';
import { DropdownProps } from './types';

const Dropdown = (props: DropdownProps): JSX.Element => {
  const { options, placeholder, selected, label, handleClick } = props;

  const selectedItem = options.find(option => option.id === selected)?.name;
  const displayedItem = selectedItem ?? placeholder;

  const menu = (
    <Menu onClick={(e: MenuInfo) => handleClick(e)}>
      {options.map(node => (
        <Menu.Item key={node.id}>{node.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      {label && <label className="label">{label}</label>}
      <AntDropdown overlay={menu}>
        <Button>
          {displayedItem} <DownOutlined />
        </Button>
      </AntDropdown>
    </>
  );
};

export default Dropdown;
