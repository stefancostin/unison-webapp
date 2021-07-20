import { TableData } from 'types/table-metadata/TableData';

export interface ConnectionsTableData extends TableData {
  instanceId: string;
  node: string;
  lastSeen: string;
}
