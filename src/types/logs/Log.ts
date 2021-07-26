import { Agent } from 'types/agents/Agent';
import { Node } from '../nodes/Node';

export interface Log {
  id: number;
  correlationId: string;
  agent: Agent;
  node: Node;
  entity: string;
  addedRecords: number;
  updatedRecords: number;
  deletedRecords: number;
  completed: boolean;
  errorMessage: string;
  date: string;
}
