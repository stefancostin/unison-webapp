import { Connection } from './Connection';

export interface ConnectionsHttpClient {
  getConnections: () => Promise<Connection[]>;
}
