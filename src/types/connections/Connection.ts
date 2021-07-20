import { Node } from '../nodes/Node';

export interface Connection {
  instanceId: string;
  node: Node;
  lastSeen: string;
}
