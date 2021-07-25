import axios, { AxiosError, AxiosResponse } from 'axios';
import { Config } from 'config';
import { EntityHttpClient } from '../types/entities/EntityHttpClient';
import { EntitySaveRequest } from '../types/entities/EntitySaveRequest';
import { Entity } from '../types/entities/Entity';
import { handleResponse, handleUnauthorized } from './helpers/http-handlers';
import { getHttpConfig } from './helpers/http-config';

const getEntity = (id: number): Promise<Entity> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;
  const httpConfig = getHttpConfig();

  return axios
    .get(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<Entity>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getEntities = (): Promise<Entity[]> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;
  const httpConfig = getHttpConfig();

  return axios
    .get(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<Entity[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const addEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;
  const httpConfig = getHttpConfig();

  return axios
    .post(endpoint, entity, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const updateEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${entity.id}`;
  const httpConfig = getHttpConfig();

  return axios
    .put(endpoint, entity, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const deleteEntity = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;
  const httpConfig = getHttpConfig();

  return axios
    .delete(endpoint, httpConfig)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const entityHttpClient: EntityHttpClient = {
  getEntity,
  getEntities,
  addEntity,
  updateEntity,
  deleteEntity,
};

export default entityHttpClient;
