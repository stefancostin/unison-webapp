import { AgentSaveRequest } from '../types/agents/AgentSaveRequest';
import axios from 'axios';
import { Config } from 'config';
import { Agent } from 'types/agents/Agent';
import { AgentHttpClient } from '../types/agents/AgentHttpClient';

const getAgent = (id: number): Promise<Agent> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${id}`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject({});
  }
};

const getAgents = (): Promise<Agent[]> => {
  const endpoint = `${Config.ApiEndpoint}/agents`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject([]);
  }
};

const addAgent = (agent: AgentSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents`;
  try {
    return axios.post(endpoint, agent);
  } catch (error) {
    return Promise.reject();
  }
};

const updateAgent = (agent: AgentSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${agent.id}`;
  try {
    return axios.put(endpoint, agent);
  } catch (error) {
    return Promise.reject();
  }
};

const deleteAgent = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${id}`;
  try {
    return axios.delete(endpoint);
  } catch (error) {
    return Promise.reject();
  }
};

const agentHttpClient: AgentHttpClient = {
  getAgent,
  getAgents,
  addAgent,
  updateAgent,
  deleteAgent,
};

export default agentHttpClient;
