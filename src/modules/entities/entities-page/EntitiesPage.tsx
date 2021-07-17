import Dropdown from 'components/dropdown';
import { useState } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import { DropdownMenuItem } from 'components/dropdown/types';
import { mockNodes } from 'modules/nodes/mock-data';
import { useAppDispatch } from 'store';
import { useHistory } from 'react-router-dom';

const EntitiesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

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

export default EntitiesPage;
