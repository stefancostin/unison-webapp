import axios, { AxiosError, AxiosResponse } from 'axios';
import { AgentSaveRequest } from '../types/agents/AgentSaveRequest';
import { Config } from 'config';
import { Agent } from 'types/agents/Agent';
import { AgentHttpClient } from '../types/agents/AgentHttpClient';
import { handleResponse, handleUnauthorized } from './http-handlers';

const getAgent = (id: number): Promise<Agent> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${id}`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Agent>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getAgents = (): Promise<Agent[]> => {
  const endpoint = `${Config.ApiEndpoint}/agents`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Agent[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const addAgent = (agent: AgentSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents`;

  return axios
    .post(endpoint, agent)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const updateAgent = (agent: AgentSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${agent.id}`;

  return axios
    .put(endpoint, agent)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const deleteAgent = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/agents/${id}`;

  return axios
    .delete(endpoint)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const agentHttpClient: AgentHttpClient = {
  getAgent,
  getAgents,
  addAgent,
  updateAgent,
  deleteAgent,
};

export default agentHttpClient;
