import { Entity } from 'types/entities/Entity';
import { RootState } from 'store/types';
import { isEmpty } from 'lodash';
import { EntityTableData } from 'types/entities/EntityTableData';

export const getEntityListSelector = (state: RootState): Entity[] => state.entityList;

export const getEntityTableDataSelector = (state: RootState): EntityTableData[] => {
  if (isEmpty(state.entityList)) {
    return [];
  }
  return state.entityList.map(entity => ({
    key: String(entity.id),
    entity: entity.entity,
    primaryKey: entity.primaryKey,
    fields: entity.fields?.join(', '),
    node: entity.node?.name,
  }));
};
