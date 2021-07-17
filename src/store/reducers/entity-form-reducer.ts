import { ENTITY_FORM__CLEAR_PROPERTIES, ENTITY_FORM__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';
import { Entity } from 'types/entities/Entity';

const initialState: Entity = {
  id: null,
  entity: null,
  primaryKey: null,
  fields: null,
  node: null,
};

const entityFormReducer = (state: Entity = initialState, action: BaseAction<Entity>): Entity => {
  switch (action.type) {
    case ENTITY_FORM__SET_PROPERTIES: {
      return { ...state, ...action.data };
    }
    case ENTITY_FORM__CLEAR_PROPERTIES: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default entityFormReducer;
