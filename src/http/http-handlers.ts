import { AxiosError, AxiosResponse } from 'axios';
import { history } from 'router/Router';
import { GeneralRoutes } from 'router/routes';

const Unauthorized: number = 401;
const Forbidden: number = 403;

export const handleResponse = <T>(response: AxiosResponse): T => response.data;

export const handleUnauthorized = (err: AxiosError): void => {
  if (err.response.status === Unauthorized || err.response.status === Forbidden) {
    history.push(`/${GeneralRoutes.Login}`);
  }
  throw err;
};
