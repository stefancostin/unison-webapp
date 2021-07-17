import { Node } from './../nodes/Node';

export interface Entity {
  id: number;
  entity: string;
  primaryKey: string;
  fields: string[];
  node: Node;
}
