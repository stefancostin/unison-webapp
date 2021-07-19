import { Log } from 'types/logs/Log';
import { LOGS__SET_PROPERTIES } from 'store/events';
import { BaseAction } from 'store/types';

const logsReducer = (state: Log[] = [], action: BaseAction<Log[]>): Log[] => {
  switch (action.type) {
    case LOGS__SET_PROPERTIES: {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default logsReducer;
