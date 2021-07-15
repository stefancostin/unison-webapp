import Actions from 'components/actions';
import ConfirmationModal from 'components/confirmation-modal';
import { Node } from 'types/nodes/Node';
import { Button, Table } from 'antd';
import { TableColumn } from 'types/table-metadata/TableColumn';
import { NodeTableData } from 'types/nodes/NodeTableData';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getNodeListAction } from 'store/actions/node-list-actions';
import { deleteNodeFormAction } from 'store/actions/node-form-actions';
import { useHistory } from 'react-router-dom';
import { getNodeTableDataSelector } from 'store/selectors/node-list-selector';

const NodesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const data = useAppSelector(getNodeTableDataSelector);

  const [isModalVisible, setModalVisible] = useState(false);
  const modalDeleteRef = useRef<number>(null);

  useEffect(() => {
    dispatch(getNodeListAction());
  }, [dispatch]);

  const redirectToAddPage = (): void => {
    history.push(`${history.location.pathname}/add`);
  };

  const handleDelete = (id: number): void => {
    modalDeleteRef.current = id;
    setModalVisible(true);
  };

  const handleConfirm = (): void => {
    dispatch(deleteNodeFormAction(modalDeleteRef.current));
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  const handleCancel = (): void => {
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  const columns: TableColumn<NodeTableData>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Agents',
      dataIndex: 'agents',
      key: 'agents',
      render: (text: string[]) => text?.join(', '),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record?: NodeTableData): JSX.Element => (
        <Actions id={Number(record.key)} handleDelete={handleDelete} />
      ),
    },
  ];

  return (
    <>
      <ConfirmationModal isModalVisible={isModalVisible} handleOk={handleConfirm} handleCancel={handleCancel} />
      <Button type="primary" className="form-group" onClick={redirectToAddPage}>
        Add Node
      </Button>
      <Table columns={columns} dataSource={data as any} />
    </>
  );
};

export default NodesPage;
