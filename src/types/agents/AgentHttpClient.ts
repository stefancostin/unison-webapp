import { Agent } from './Agent';

export interface AgentHttpClient {
  getAgent: (id: number) => Promise<Agent>;
  getAgents: () => Promise<Agent[]>;
  addAgent: (agent: Agent) => Promise<void>;
  updateAgent: (agent: Agent) => Promise<void>;
  deleteAgent: (id: number) => Promise<void>;
}
