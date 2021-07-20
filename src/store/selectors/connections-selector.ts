import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { RootState } from 'store/types';
import { Connection } from './../../types/connections/Connection';
import { DateTimeFormat } from 'utilities/date-time-format';
import { ConnectionsTableData } from 'types/connections/ConnectionsTableData';

export const getConnectionsSelector = (state: RootState): Connection[] => state.connections;

export const getConnectionsTableDataSelector = (state: RootState): ConnectionsTableData[] => {
  if (isEmpty(state.connections)) {
    return [];
  }
  return state.connections.map(connection => ({
    key: String(connection.instanceId),
    instanceId: connection.instanceId,
    node: connection.node?.name,
    lastSeen: isEmpty(connection.lastSeen) ? null : dayjs(connection.lastSeen).format(DateTimeFormat),
  }));
};
