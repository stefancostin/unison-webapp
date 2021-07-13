import { NodeHttpClient } from './../types/nodes/NodeHttpClient';
import axios from 'axios';
import { Config } from 'config';
import { Node } from 'types/nodes/Node';
import { NodeForm } from 'types/nodes/NodeForm';

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

const addNode = (node: NodeForm): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/nodes`;
  try {
    return axios.post(endpoint, node);
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
  deleteNode,
};

export default nodeHttpClient;
