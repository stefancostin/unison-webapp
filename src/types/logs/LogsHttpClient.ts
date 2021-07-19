import { Log } from './Log';

export interface LogsHttpClient {
  getLog: (id: number) => Promise<Log>;
  getLogs: () => Promise<Log[]>;
}
