export type ApplicationRoutes = typeof GeneralRoutes | typeof DashboardRoutes;

export enum GeneralRoutes {
  Login = 'login',
  Dashboard = 'dashboard',
}

export enum DashboardRoutes {
  Agents = 'agents',
  Connections = 'connections',
  Entities = 'entities',
  Logs = 'logs',
  Nodes = 'nodes',
}
