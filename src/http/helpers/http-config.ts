import { AuthTokenKey } from '../../types/local-storage/LocalStorage';
import { AxiosRequestConfig } from 'axios';

export const getHttpConfig = (): AxiosRequestConfig => {
  const token = window.localStorage.getItem(AuthTokenKey);
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
