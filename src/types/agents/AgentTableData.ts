import { TableData } from 'types/table-metadata/TableData';

export interface NodeTableData extends TableData {
  instanceId: string;
  node?: string;
}
