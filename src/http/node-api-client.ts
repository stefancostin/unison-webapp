import axios, { AxiosError, AxiosResponse } from 'axios';
import { NodeHttpClient } from '../types/nodes/NodeHttpClient';
import { Config } from 'config';
import { Node } from 'types/nodes/Node';
import { NodeSaveRequest } from 'types/nodes/NodeSaveRequest';
import { handleResponse, handleUnauthorized } from './helpers/http-handlers';
import { getHttpConfig } from './helpers/http-config';

const getNode = (id: number): Promise<Node> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;
  const httpConfig = getHttpConfig();

  return axios
    .get(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<Node>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getNodes = (): Promise<Node[]> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;
  const httpConfig = getHttpConfig();

  return axios
    .get(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<Node[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const addNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;
  const httpConfig = getHttpConfig();

  return axios
    .post(endpoint, node, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const updateNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${node.id}`;
  const httpConfig = getHttpConfig();

  return axios
    .put(endpoint, node, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const deleteNode = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;
  const httpConfig = getHttpConfig();

  return axios
    .delete(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const nodeHttpClient: NodeHttpClient = {
  getNode,
  getNodes,
  addNode,
  updateNode,
  deleteNode,
};

export default nodeHttpClient;
