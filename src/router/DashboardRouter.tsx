import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardRoutes } from './routes';
import AgentControlPage from 'modules/agents/agent-control-page';
import AgentsPage from 'modules/agents/agents-page';
import EntitiesPage from 'modules/entities/entities-page';
import LogsPage from 'modules/logs-page';
import NodeControlPage from 'modules/nodes/node-control-page';
import NodesPage from 'modules/nodes/nodes-page';

const DashboardRouter = (): JSX.Element => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={[`${path}/${DashboardRoutes.Agents}/add`, `${path}/${DashboardRoutes.Agents}/:id/edit`]}>
        <AgentControlPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Agents}`}>
        <AgentsPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Entities}`}>
        <EntitiesPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Logs}`}>
        <LogsPage />
      </Route>
      <Route path={[`${path}/${DashboardRoutes.Nodes}/add`, `${path}/${DashboardRoutes.Nodes}/:id/edit`]}>
        <NodeControlPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Nodes}`}>
        <NodesPage />
      </Route>
      <Route path="*">
        <Redirect to="/page-not-found" />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
