import { TableData } from 'types/table-metadata/TableData';

export interface NodeTableData extends TableData {
  name: string;
  agents?: string[];
}
