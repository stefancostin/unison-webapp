import { Node } from './../nodes/Node';

export interface EntitySaveRequest {
  id?: number;
  entity: string;
  primaryKey: string;
  fields: string[];
  node: Node;
}
