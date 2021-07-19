import { useEffect, useRef, useState } from 'react';
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
