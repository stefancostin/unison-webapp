import { TableData } from 'types/table-metadata/TableData';

export interface EntityTableData extends TableData {
  entity: string;
  primaryKey: string;
  fields: string;
  node: string;
}
