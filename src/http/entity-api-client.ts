import axios, { AxiosError, AxiosResponse } from 'axios';
import { Config } from 'config';
import { EntityHttpClient } from '../types/entities/EntityHttpClient';
import { EntitySaveRequest } from '../types/entities/EntitySaveRequest';
import { Entity } from '../types/entities/Entity';
import { handleResponse, handleUnauthorized } from './http-handlers';

const getEntity = (id: number): Promise<Entity> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Entity>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const getEntities = (): Promise<Entity[]> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;

  return axios
    .get(endpoint)
    .then((res: AxiosResponse) => handleResponse<Entity[]>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const addEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;

  return axios
    .post(endpoint, entity)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const updateEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${entity.id}`;

  return axios
    .put(endpoint, entity)
    .then((res: AxiosResponse) => handleResponse<void>(res))
    .catch((err: AxiosError) => {
      handleUnauthorized(err);
      throw err;
    });
};

const deleteEntity = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;

  return axios
    .delete(endpoint)
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
