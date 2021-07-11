import { Route } from './types';

export type ApplicationRoutes = typeof GeneralRoutes | typeof DashboardRoutes;

export enum GeneralRoutes {
  Account = 'account',
  Dashboard = 'dashboard',
}

export enum DashboardRoutes {
  Agents = 'agents',
  Entities = 'entities',
  Logs = 'logs',
  Nodes = 'nodes',
}

export const routes: Route[] = [
  {
    path: GeneralRoutes.Dashboard,
    breadcrumbName: 'Dashboard',
    children: [
      {
        path: DashboardRoutes.Nodes,
        breadcrumbName: 'Nodes',
      },
      {
        path: DashboardRoutes.Agents,
        breadcrumbName: 'Agents',
      },
      {
        path: DashboardRoutes.Entities,
        breadcrumbName: 'Entities',
      },
      {
        path: DashboardRoutes.Logs,
        breadcrumbName: 'Logs',
      },
    ],
  },
];
