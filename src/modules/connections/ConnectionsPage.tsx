import { Table } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { TableColumn } from 'types/table-metadata/TableColumn';
import { ConnectionsTableData } from 'types/connections/ConnectionsTableData';
import { getConnectionsTableDataSelector } from 'store/selectors/connections-selector';
import { getConnectionsAction } from 'store/actions/connections-actions';

const ConnectionsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const connections = useAppSelector(getConnectionsTableDataSelector);

  useEffect(() => {
    dispatch(getConnectionsAction());
  }, [dispatch]);

  const columns: TableColumn<ConnectionsTableData>[] = [
    {
      title: 'Agent',
      dataIndex: 'instanceId',
      key: 'instanceId',
    },
    {
      title: 'Node',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: 'Last Seen',
      dataIndex: 'lastSeen',
      key: 'lastSeen',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={connections as any} />
    </>
  );
};

export default ConnectionsPage;
