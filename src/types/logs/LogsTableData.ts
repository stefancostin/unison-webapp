import { TableData } from 'types/table-metadata/TableData';

export interface LogsTableData extends TableData {
  correlationId: string;
  agent: string;
  node: string;
  entity: string;
  addedRecords: number;
  updatedRecords: number;
  deletedRecords: number;
  completed: boolean;
  date: string;
}
