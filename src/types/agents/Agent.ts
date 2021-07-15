import { Node } from './../nodes/Node';

export interface Agent {
  id: number;
  instanceId: string;
  node: Node;
}
