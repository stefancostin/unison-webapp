import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthResponse } from './../types/accounts/AuthResponse';
import { AuthRequest } from './../types/accounts/AuthRequest';
import { AccountHttpClient } from '../types/accounts/AccountHttpClient';
import { Config } from 'config';
import { handleResponse, handleWrongCredentials } from './helpers/http-handlers';

const authenticate = (credentials: AuthRequest): Promise<AuthResponse> => {
  const endpoint = `${Config.ApiEndpoint}/accounts/authenticate`;

  return axios
    .post(endpoint, credentials)
    .then((res: AxiosResponse) => handleResponse<AuthResponse>(res))
    .catch((err: AxiosError) => {
      handleWrongCredentials(err);
      throw err;
    });
};

const agentHttpClient: AccountHttpClient = {
  authenticate,
};

export default agentHttpClient;
