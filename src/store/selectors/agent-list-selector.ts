import { RootState } from 'store/types';
import { isEmpty } from 'lodash';
import { AgentTableData } from 'types/agents/AgentTableData';
import { Agent } from 'types/agents/Agent';

export const getAgentListSelector = (state: RootState): Agent[] => state.agentList;

export const getAgentTableDataSelector = (state: RootState): AgentTableData[] => {
  if (isEmpty(state.agentList)) {
    return [];
  }
  return state.agentList.map(agent => ({
    key: String(agent.id),
    instanceId: agent.instanceId,
    node: agent.node?.name,
  }));
};
