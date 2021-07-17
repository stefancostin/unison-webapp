import axios from 'axios';
import { Config } from 'config';
import { EntityHttpClient } from '../types/entities/EntityHttpClient';
import { EntitySaveRequest } from '../types/entities/EntitySaveRequest';
import { Entity } from '../types/entities/Entity';

const getEntity = (id: number): Promise<Entity> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject({});
  }
};

const getEntities = (): Promise<Entity[]> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;
  try {
    return axios.get(endpoint).then(res => res.data);
  } catch (error) {
    return Promise.reject([]);
  }
};

const addEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities`;
  try {
    return axios.post(endpoint, entity);
  } catch (error) {
    return Promise.reject();
  }
};

const updateEntity = (entity: EntitySaveRequest): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${entity.id}`;
  try {
    return axios.put(endpoint, entity);
  } catch (error) {
    return Promise.reject();
  }
};

const deleteEntity = (id: number): Promise<void> => {
  const endpoint = `${Config.ApiEndpoint}/entities/${id}`;
  try {
    return axios.delete(endpoint);
  } catch (error) {
    return Promise.reject();
  }
};

const entityHttpClient: EntityHttpClient = {
  getEntity,
  getEntities,
  addEntity,
  updateEntity,
  deleteEntity,
};

export default entityHttpClient;
