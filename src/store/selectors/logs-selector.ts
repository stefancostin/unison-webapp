import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { RootState } from 'store/types';
import { Log } from 'types/logs/Log';
import { LogsTableData } from 'types/logs/LogsTableData';
import { DateTimeFormat } from 'utilities/date-time-format';

export const getLogsSelector = (state: RootState): Log[] => state.logs;

export const getLogsTableDataSelector = (state: RootState): LogsTableData[] => {
  if (isEmpty(state.logs)) {
    return [];
  }
  return state.logs.map(log => ({
    key: String(log.id),
    correlationId: log.correlationId,
    agent: log.agent?.instanceId,
    node: log.node?.name,
    entity: log.entity,
    addedRecords: log.addedRecords,
    updatedRecords: log.updatedRecords,
    deletedRecords: log.deletedRecords,
    completed: log.completed,
    errorMessage: log.errorMessage,
    date: isEmpty(log.date) ? null : dayjs(log.date).format(DateTimeFormat),
  }));
};
