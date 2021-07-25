import { getHttpConfig } from './helpers/http-config';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { handleResponse, handleUnauthorized } from './helpers/http-handlers';
import { Config } from 'config';
import { Connection } from 'types/connections/Connection';
import { ConnectionsHttpClient } from 'types/connections/ConnectionsHttpClient';

const getConnections = (): Promise<Connection[]> => {
  const endpoint = `${Config.ApiEndpoint}/connections`;
  const httpConfig = getHttpConfig();

  return axios
    .get(endpoint, httpConfig)
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
