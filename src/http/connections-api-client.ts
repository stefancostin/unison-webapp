import { handleResponse, handleUnauthorized } from './http-handlers';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Config } from 'config';
import { Connection } from 'types/connections/Connection';
import { ConnectionsHttpClient } from 'types/connections/ConnectionsHttpClient';

const getConnections = (): Promise<Connection[]> => {
  const endpoint = `${Config.ApiEndpoint}/connections`;
  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Connection[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const logsHttpClient: ConnectionsHttpClient = {
  getConnections,
};

export default logsHttpClient;
