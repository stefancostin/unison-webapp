import axios from 'axios';
import { LogsHttpClient } from './../types/logs/LogsHttpClient';
import { Config } from 'config';
import { Log } from 'types/logs/Log';

const getLog = (id: number): Promise<Log> => {
  const endpoint = `${Config.ApiEndpoint}/logs/${id}`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject({});
  }
};

const getLogs = (): Promise<Log[]> => {
  const endpoint = `${Config.ApiEndpoint}/logs`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject([]);
  }
};

const logsHttpClient: LogsHttpClient = {
  getLog,
  getLogs,
};

export default logsHttpClient;
