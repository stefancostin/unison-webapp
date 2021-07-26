import { Table } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getLogsAction } from 'store/actions/logs-actions';
import { getLogsTableDataSelector } from 'store/selectors/logs-selector';
import { LogsTableData } from 'types/logs/LogsTableData';
import { TableColumn } from 'types/table-metadata/TableColumn';

const LogsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const logs = useAppSelector(getLogsTableDataSelector);

  useEffect(() => {
    dispatch(getLogsAction());
  }, [dispatch]);

  const columns: TableColumn<LogsTableData>[] = [
    {
      title: 'Agent',
      dataIndex: 'agent',
      key: 'agent',
    },
    {
      title: 'Node',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: 'Entity',
      dataIndex: 'entity',
      key: 'entity',
    },
    {
      title: 'Added',
      dataIndex: 'addedRecords',
      key: 'addedRecords',
    },
    {
      title: 'Updated',
      dataIndex: 'updatedRecords',
      key: 'updatedRecords',
    },
    {
      title: 'Deleted',
      dataIndex: 'deletedRecords',
      key: 'deletedRecords',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (text: string, record?: LogsTableData): JSX.Element => (
        <div>
          {record.completed ? (
            <CheckOutlined style={{ color: '#008000' }} />
          ) : (
            <CloseOutlined style={{ color: '#ff0000' }} />
          )}
        </div>
      ),
    },
    {
      title: 'Error',
      dataIndex: 'errorMessage',
      key: 'errorMessage',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Correlation Id',
      dataIndex: 'correlationId',
      key: 'correlationId',
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={logs as any} />
    </>
  );
};

export default LogsPage;
