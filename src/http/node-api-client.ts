import axios, { AxiosError, AxiosResponse } from 'axios';
import { NodeHttpClient } from '../types/nodes/NodeHttpClient';
import { Config } from 'config';
import { Node } from 'types/nodes/Node';
import { NodeSaveRequest } from 'types/nodes/NodeSaveRequest';
import { handleResponse, handleUnauthorized } from './http-handlers';

const getNode = (id: number): Promise<Node> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Node>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getNodes = (): Promise<Node[]> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Node[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const addNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;

  return axios
    .post(endpoint, node)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const updateNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${node.id}`;

  return axios
    .put(endpoint, node)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const deleteNode = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;

  return axios
    .delete(endpoint)
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
