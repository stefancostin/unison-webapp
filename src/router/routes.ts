export type ApplicationRoutes = typeof GeneralRoutes | typeof DashboardRoutes;

export enum GeneralRoutes {
  Account = 'account',
  Dashboard = 'dashboard',
}

export enum DashboardRoutes {
  Agents = 'agents',
  Connections = 'connections',
  Entities = 'entities',
  Logs = 'logs',
  Nodes = 'nodes',
}
