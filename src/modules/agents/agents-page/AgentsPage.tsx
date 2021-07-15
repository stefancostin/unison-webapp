import { Button, Table } from 'antd';
import Actions from 'components/actions';
import ConfirmationModal from 'components/confirmation-modal';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { deleteAgentFormAction } from 'store/actions/agent-form-actions';
import { getAgentListAction } from 'store/actions/agent-list-actions';
import { getAgentTableDataSelector } from 'store/selectors/agent-list-selector';
import { AgentTableData } from 'types/agents/AgentTableData';
import { TableColumn } from 'types/table-metadata/TableColumn';

const AgentsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const data = useAppSelector(getAgentTableDataSelector);

  const [isModalVisible, setModalVisible] = useState(false);
  const modalDeleteRef = useRef<number>(null);

  useEffect(() => {
    dispatch(getAgentListAction());
  }, [dispatch]);

  const redirectToAddPage = (): void => {
    history.push(`${history.location.pathname}/add`);
  };

  const handleDelete = (id: number): void => {
    modalDeleteRef.current = id;
    setModalVisible(true);
  };

  const handleConfirm = (): void => {
    dispatch(deleteAgentFormAction(modalDeleteRef.current));
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  const handleCancel = (): void => {
    modalDeleteRef.current = null;
    setModalVisible(false);
  };

  const columns: TableColumn<AgentTableData>[] = [
    {
      title: 'Instance Id',
      dataIndex: 'instanceId',
      key: 'instanceId',
    },
    {
      title: 'Node',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record?: AgentTableData): JSX.Element => (
        <Actions id={Number(record.key)} handleDelete={handleDelete} />
      ),
    },
  ];

  return (
    <>
      <ConfirmationModal isModalVisible={isModalVisible} handleOk={handleConfirm} handleCancel={handleCancel} />
      <Button type="primary" className="form-group" onClick={redirectToAddPage}>
        Add Agent
      </Button>
      <Table columns={columns} dataSource={data as any} />
    </>
  );
};

export default AgentsPage;
