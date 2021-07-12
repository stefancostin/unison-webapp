/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Space, Table } from 'antd';
import { UserAction } from 'types/ui-actions/UserAction';
import { TableColumn } from 'types/table-metadata/TableColumn';
import { Node } from 'types/nodes/Node';
import { NodeTableData } from 'types/nodes/NodeTableData';
import { useState } from 'react';

const columns: TableColumn<Node>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
    render: (text: string, record?: Node): JSX.Element => (
      <Space size="middle">
        <a>Edit {record?.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: NodeTableData[] = [
  {
    key: '1',
    name: 'Restaurant Node',
    agents: ['agent-1', 'agent-2'],
  },
  {
    key: '2',
    name: 'Take Away Node',
    agents: ['agent-13', 'agent-14', 'agent-15'],
  },
  {
    key: '3',
    name: 'Manufacturer Node',
    agents: ['agent-21', 'agent-22', 'agent-23'],
  },
];

const NodesPage = (): JSX.Element => {
  // const [userAction, setUserAction] = useState<UserAction>(UserAction.Read);

  // if (userAction === UserAction.Read) {
  //   return (
  //     <>
  //       <Button type="primary" style={{ marginBottom: '15px' }} onClick={() => setUserAction(UserAction.Add)}>
  //         Add Node
  //       </Button>
  //       <Table columns={columns} dataSource={data as any} />
  //     </>
  //   );
  // }

  return (
    <>
      <Button type="primary" style={{ marginBottom: '15px' }}>
        Add Node
      </Button>
      <Table columns={columns} dataSource={data as any} />
    </>
  );
};

export default NodesPage;
