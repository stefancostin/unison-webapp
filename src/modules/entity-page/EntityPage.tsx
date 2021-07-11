import { useState } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import Dropdown from 'components/dropdown';
import { DropdownMenuItem } from 'components/dropdown/types';

const mockNodes = [
  { name: 'Node One', id: 1 },
  { name: 'Node Two', id: 2 },
];

const EntityPage = (): JSX.Element => {
  const [tmpSelected, setTmpSelected] = useState<number>();

  const handleMenuClick = (e: MenuInfo): void => {
    const selectedNode = mockNodes.find((node: any) => node.id === Number(e.key))?.id;
    setTmpSelected(selectedNode);
  };

  const options: DropdownMenuItem[] = mockNodes.map(node => ({ id: node.id, name: node.name }));

  return (
    <>
      <Dropdown
        options={options}
        selected={tmpSelected}
        label="Node"
        placeholder="Select Nodes"
        handleClick={handleMenuClick}
      />
    </>
  );
};

export default EntityPage;
