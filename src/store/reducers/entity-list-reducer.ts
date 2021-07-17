import { Entity } from 'types/entities/Entity';
import { ENTITY_LIST__SET_ITEMS } from 'store/events';
import { BaseAction } from 'store/types';

const entityListReducer = (state: Entity[] = [], action: BaseAction<Entity[]>): Entity[] => {
  switch (action.type) {
    case ENTITY_LIST__SET_ITEMS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default entityListReducer;
