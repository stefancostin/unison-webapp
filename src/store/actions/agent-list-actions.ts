import agentHttpClient from 'services/agent-api-client';
import { AGENT_LIST__SET_ITEMS } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { Agent } from 'types/agents/Agent';

export const setAgentListAction = (list: Partial<Agent[]>): BaseAction<Partial<Agent[]>> => ({
  type: AGENT_LIST__SET_ITEMS,
  data: list,
});

export const getAgentListAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const agents = await agentHttpClient.getAgents();
    dispatch(setAgentListAction(agents));
  };
};
