import agentHttpClient from 'http/agent-api-client';
import sendNotification from 'services/notification-service';
import { getNodeListAction } from './node-list-actions';
import { history } from 'router/Router';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { GeneralRoutes, DashboardRoutes } from 'router/routes';
import { AGENT_FORM__CLEAR_PROPERTIES, AGENT_FORM__SET_PROPERTIES } from 'store/events';
import { getAgentListAction } from './agent-list-actions';
import { Agent } from 'types/agents/Agent';
import { AgentSaveRequest } from 'types/agents/AgentSaveRequest';

export const setAgentFormAction = (form: Partial<Agent>): BaseAction<Partial<Agent>> => ({
  type: AGENT_FORM__SET_PROPERTIES,
  data: form,
});

export const clearAgentFormAction = (): BaseAction<Partial<Agent>> => ({
  type: AGENT_FORM__CLEAR_PROPERTIES,
  data: {},
});

export const getAgentFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const agent = await agentHttpClient.getAgent(id);
    dispatch(setAgentFormAction(agent));
    dispatch(getNodeListAction());
  };
};

export const addAgentFormAction = (agent: Agent): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const newAgent: AgentSaveRequest = {
      instanceId: agent.instanceId,
      node: agent.node,
    };

    await agentHttpClient.addAgent(newAgent);

    sendNotification('Operation Successful', 'Agent has been added successfully');
    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Agents}`);
  };
};

export const updateAgentFormAction = (agent: Agent): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const newAgent: AgentSaveRequest = {
      id: agent.id,
      instanceId: agent.instanceId,
      node: agent.node,
    };

    await agentHttpClient.updateAgent(newAgent);

    sendNotification('Operation Successful', 'Agent has been updated successfully');
    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Agents}`);
  };
};

export const deleteAgentFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    await agentHttpClient.deleteAgent(id);
    dispatch(getAgentListAction());
  };
};
