import Dropdown from 'components/dropdown';
import { useEffect, useRef, useState } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import { DropdownMenuItem } from 'components/dropdown/types';
import { mockNodes } from 'modules/nodes/mock-data';
import { useAppDispatch, useAppSelector } from 'store';
import { useHistory } from 'react-router-dom';
import { getEntityTableDataSelector } from 'store/selectors/entity-list-selector';
import { getEntityListAction } from 'store/actions/entity-list-actions';
import { deleteEntityFormAction } from 'store/actions/entity-form-actions';
import { TableColumn } from 'types/table-metadata/TableColumn';
import { EntityTableData } from 'types/entities/EntityTableData';
import Actions from 'components/actions';
import { Button, Table } from 'antd';
import ConfirmationModal from 'components/confirmation-modal';

const EntitiesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const data = useAppSelector(getEntityTableDataSelector);

  const [isModalVisible, setModalVisible] = useState(false);
  const modalDeleteRef = useRef<number>(null);

  useEffect(() => {
    dispatch(getEntityListAction());
  }, [dispatch]);

  const redirectToAddPage = (): void => {
    history.push(`${history.location.pathname}/add`);
  };

  const handleDelete = (id: number): void => {
    modalDeleteRef.current = id;
    setModalVisible(true);
  };

  const handleConfirm = (): void => {
    dispatch(deleteEntityFormAction(modalDeleteRef.current));
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  const handleCancel = (): void => {
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  // TODO: Delete this
  // const [tmpSelected, setTmpSelected] = useState<number>();
  // const handleMenuClick = (e: MenuInfo): void => {
  //   const selectedNode = mockNodes.find((node: any) => node.id === Number(e.key))?.id;
  //   setTmpSelected(selectedNode);
  // };
  // const options: DropdownMenuItem[] = mockNodes.map(node => ({ id: node.id, name: node.name }));

  const columns: TableColumn<EntityTableData>[] = [
    {
      title: 'Entity Name',
      dataIndex: 'entity',
      key: 'entity',
    },
    {
      title: 'Primary Key',
      dataIndex: 'primaryKey',
      key: 'primaryKey',
    },
    {
      title: 'Fields',
      dataIndex: 'fields',
      key: 'fields',
    },
    {
      title: 'Node',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record?: EntityTableData): JSX.Element => (
        <Actions id={Number(record.key)} handleDelete={handleDelete} />
      ),
    },
  ];

  // return (
  //   <>
  //     <Dropdown
  //       options={options}
  //       selected={tmpSelected}
  //       label="Node"
  //       placeholder="Select Nodes"
  //       handleClick={handleMenuClick}
  //     />
  //   </>
  // );

  return (
    <>
      <ConfirmationModal isModalVisible={isModalVisible} handleOk={handleConfirm} handleCancel={handleCancel} />
      <Button type="primary" className="form-group" onClick={redirectToAddPage}>
        Add Entity
      </Button>
      <Table columns={columns} dataSource={data as any} />
    </>
  );
};

export default EntitiesPage;
