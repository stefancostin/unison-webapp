import { NodeSaveRequest } from './NodeSaveRequest';
import { Node } from 'types/nodes/Node';

export interface NodeHttpClient {
  getNode: (id: number) => Promise<Node>;
  getNodes: () => Promise<Node[]>;
  addNode: (node: NodeSaveRequest) => Promise<void>;
  deleteNode: (id: number) => Promise<void>;
}
