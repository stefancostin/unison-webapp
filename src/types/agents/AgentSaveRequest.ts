import { Node } from './../nodes/Node';

export interface AgentSaveRequest {
  id?: number;
  instanceId: string;
  node: Node;
}
