import { AxiosError, AxiosResponse } from 'axios';
import { history } from 'router/Router';
import { GeneralRoutes } from 'router/routes';
import sendNotification from 'services/notification-service';

const BadRequest: number = 400;
const Unauthorized: number = 401;
const Forbidden: number = 403;

export const handleResponse = <T>(response: AxiosResponse): T => response.data;

export const handleUnauthorized = (err: AxiosError): void => {
  if (err.response.status === Unauthorized || err.response.status === Forbidden) {
    history.push(`/${GeneralRoutes.Login}`);
  }
};

export const handleWrongCredentials = (err: AxiosError): void => {
  if (err.response.status === BadRequest) {
    sendNotification('Wrong Credentials', 'A valid username and password must be provided', false);
  }
};
