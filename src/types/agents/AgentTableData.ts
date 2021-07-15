import { TableData } from 'types/table-metadata/TableData';

export interface AgentTableData extends TableData {
  instanceId: string;
  node: string;
}
