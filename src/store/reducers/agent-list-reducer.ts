import { Agent } from 'types/agents/Agent';
import { AGENT_LIST__SET_ITEMS } from 'store/events';
import { BaseAction } from 'store/types';

const agentListReducer = (state: Agent[] = [], action: BaseAction<Agent[]>): Agent[] => {
  switch (action.type) {
    case AGENT_LIST__SET_ITEMS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default agentListReducer;
