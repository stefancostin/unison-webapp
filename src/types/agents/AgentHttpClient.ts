import { AgentSaveRequest } from './AgentSaveRequest';
import { Agent } from './Agent';

export interface AgentHttpClient {
  getAgent: (id: number) => Promise<Agent>;
  getAgents: () => Promise<Agent[]>;
  addAgent: (agent: AgentSaveRequest) => Promise<void>;
  updateAgent: (agent: AgentSaveRequest) => Promise<void>;
  deleteAgent: (id: number) => Promise<void>;
}
