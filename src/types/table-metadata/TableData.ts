import { TableProps } from 'antd/lib/table';

export interface TableData extends TableProps<unknown> {
  key: string;
}
