import connectionsHttpClient from 'http/connections-api-client';
import { Connection } from './../../types/connections/Connection';
import { CONNECTIONS__SET_PROPERTIES } from '../events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';

export const setConnectionsAction = (connections: Partial<Connection[]>): BaseAction<Partial<Connection[]>> => ({
  type: CONNECTIONS__SET_PROPERTIES,
  data: connections,
});

export const getConnectionsAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const logs = await connectionsHttpClient.getConnections();
    dispatch(setConnectionsAction(logs));
  };
};
