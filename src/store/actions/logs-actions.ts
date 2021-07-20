import logsHttpClient from 'http/logs-api-client';
import { Log } from 'types/logs/Log';
import { LOGS__SET_PROPERTIES } from './../events';
import { AppDispatch, AppThunk, BaseAction, RootState } from 'store/types';

export const setLogsAction = (logs: Partial<Log[]>): BaseAction<Partial<Log[]>> => ({
  type: LOGS__SET_PROPERTIES,
  data: logs,
});

export const getLogsAction = (): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const logs = await logsHttpClient.getLogs();
    dispatch(setLogsAction(logs));
  };
};
