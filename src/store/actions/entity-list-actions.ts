import entityHttpClient from 'http/entity-api-client';
import { Entity } from 'types/entities/Entity';
import { ENTITY_LIST__SET_ITEMS } from 'store/events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';

export const setEntityListAction = (list: Partial<Entity[]>): BaseAction<Partial<Entity[]>> => ({
  type: ENTITY_LIST__SET_ITEMS,
  data: list,
});

export const getEntityListAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const entities = await entityHttpClient.getEntities();
    dispatch(setEntityListAction(entities));
  };
};
