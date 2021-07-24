import axios, { AxiosError, AxiosResponse } from 'axios';
import { LogsHttpClient } from './../types/logs/LogsHttpClient';
import { Config } from 'config';
import { Log } from 'types/logs/Log';
import { handleResponse, handleUnauthorized } from './http-handlers';

const getLog = (id: number): Promise<Log> => {
  const endpoint = `${Config.ApiEndpoint}/logs/${id}`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Log>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getLogs = (): Promise<Log[]> => {
  const endpoint = `${Config.ApiEndpoint}/logs`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Log[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const logsHttpClient: LogsHttpClient = {
  getLog,
  getLogs,
};

export default logsHttpClient;
