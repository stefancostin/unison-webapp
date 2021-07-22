import axios from 'axios';
import { Config } from 'config';
import { Connection } from 'types/connections/Connection';
import { ConnectionsHttpClient } from 'types/connections/ConnectionsHttpClient';

const getConnections = (): Promise<Connection[]> => {
  const endpoint = `${Config.ApiEndpoint}/connections`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject([]);
  }
};

const logsHttpClient: ConnectionsHttpClient = {
  getConnections,
};

export default logsHttpClient;