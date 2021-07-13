import { Button, Table } from 'antd';
import { TableColumn } from 'types/table-metadata/TableColumn';
import { Node } from 'types/nodes/Node';
import { NodeTableData } from 'types/nodes/NodeTableData';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getNodeListAction } from 'store/actions/node-list-actions';
import Actions from 'components/actions';
import { deleteNodeFormAction } from 'store/actions/node-form-actions';
import { useHistory } from 'react-router-dom';

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
      <Actions id={Number(record.key)} handleDelete={deleteNodeFormAction} />
    ),
  },
];

const data: NodeTableData[] = [
  {
    key: '1',
    name: 'Restaurant Node',
    description: 'Client restaurant data',
    agents: ['agent-1', 'agent-2'],
  },
  {
    key: '2',
    name: 'Take Away Node',
    description: 'Client infrastructure data',
    agents: ['agent-13', 'agent-14', 'agent-15'],
  },
  {
    key: '3',
    name: 'Distribution Node',
    description: 'Client distribution data',
    agents: ['agent-21', 'agent-22', 'agent-23'],
  },
];

const NodesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getNodeListAction());
  }, [dispatch]);

  const redirectToAddPage = (): void => {
    history.push(`${history.location.pathname}/add`);
  };

  return (
    <>
      <Button type="primary" className="form-group" onClick={redirectToAddPage}>
        Add Node
      </Button>
      <Table columns={columns} dataSource={data as any} />
    </>
  );
};

export default NodesPage;
