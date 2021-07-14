import axios from 'axios';
import { NodeHttpClient } from './../types/nodes/NodeHttpClient';
import { Config } from 'config';
import { Node } from 'types/nodes/Node';
import { NodeSaveRequest } from 'types/nodes/NodeSaveRequest';

const getNode = (id: number): Promise<Node> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject({});
  }
};

const getNodes = (): Promise<Node[]> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject([]);
  }
};

const addNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;
  try {
    return axios.post(endpoint, node);
  } catch (error) {
    return Promise.reject();
  }
};

const updateNode = (node: NodeSaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${node.id}`;
  try {
    return axios.put(endpoint, node);
  } catch (error) {
    return Promise.reject();
  }
};

const deleteNode = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes/${id}`;
  try {
    return axios.delete(endpoint);
  } catch (error) {
    return Promise.reject();
  }
};

const nodeHttpClient: NodeHttpClient = {
  getNode,
  getNodes,
  addNode,
  updateNode,
  deleteNode,
};

export default nodeHttpClient;
