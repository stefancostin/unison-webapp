import { NodeForm } from './NodeForm';
import { Node } from 'types/nodes/Node';

export interface NodeHttpClient {
  getNode: (id: number) => Promise<Node>;
  getNodes: () => Promise<Node[]>;
  addNode: (node: NodeForm) => Promise<void>;
  deleteNode: (id: number) => Promise<void>;
}
