import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';

export type TableColumn<T> = ColumnGroupType<T> | ColumnType<T>;
