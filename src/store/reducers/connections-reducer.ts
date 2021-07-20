import { Connection } from './../../types/connections/Connection';
import { CONNECTIONS__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';

const connectionsReducer = (state: Connection[] = [], action: BaseAction<Connection[]>): Connection[] => {
  switch (action.type) {
    case CONNECTIONS__SET_PROPERTIES: {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default connectionsReducer;
