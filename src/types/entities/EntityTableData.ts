import { TableData } from 'types/table-metadata/TableData';

export interface AgentTableData extends TableData {
  entity: string;
  primaryKey: string;
  fields: string[];
  node: string;
}
