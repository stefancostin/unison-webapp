import { TableData } from 'types/table-metadata/TableData';

export interface NodeTableData extends TableData {
  name: string;
  description: string;
  agents?: string[];
}
