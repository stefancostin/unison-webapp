import entityHttpClient from 'http/entity-api-client';
import sendNotification from 'services/notification-service';
import { getNodeListAction } from './node-list-actions';
import { history } from 'router/Router';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';
import { GeneralRoutes, DashboardRoutes } from 'router/routes';
import { ENTITY_FORM__CLEAR_PROPERTIES, ENTITY_FORM__SET_PROPERTIES } from 'store/events';
import { Entity } from 'types/entities/Entity';
import { EntitySaveRequest } from 'types/entities/EntitySaveRequest';
import { getEntityListAction } from './entity-list-actions';

export const setEntityFormAction = (form: Partial<Entity>): BaseAction<Partial<Entity>> => ({
  type: ENTITY_FORM__SET_PROPERTIES,
  data: form,
});

export const clearEntityFormAction = (): BaseAction<Partial<Entity>> => ({
  type: ENTITY_FORM__CLEAR_PROPERTIES,
  data: {},
});

export const getEntityFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const entity = await entityHttpClient.getEntity(id);
    dispatch(setEntityFormAction(entity));
    dispatch(getNodeListAction());
  };
};

export const addEntityFormAction = (entity: Entity): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const newEntity: EntitySaveRequest = {
      entity: entity.entity,
      primaryKey: entity.primaryKey,
      fields: entity.fields,
      node: entity.node,
    };

    await entityHttpClient.addEntity(newEntity);

    sendNotification('Operation Successful', 'Entity has been added successfully');
    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Entities}`);
  };
};

export const updateEntityFormAction = (entity: Entity): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const newEntity: EntitySaveRequest = {
      id: entity.id,
      entity: entity.entity,
      primaryKey: entity.primaryKey,
      fields: entity.fields,
      node: entity.node,
    };

    await entityHttpClient.updateEntity(newEntity);

    sendNotification('Operation Successful', 'Entity has been updated successfully');
    history.push(`/${GeneralRoutes.Dashboard}/${DashboardRoutes.Entities}`);
  };
};

export const deleteEntityFormAction = (id: number): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    await entityHttpClient.deleteEntity(id);
    dispatch(getEntityListAction());
  };
};
