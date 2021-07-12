import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardRoutes } from './routes';
import AgentsPage from 'modules/agents/agents-page';
import EntitiesPage from 'modules/entities-page';
import LogsPage from 'modules/logs-page';
import NodesPage from 'modules/nodes/nodes-page';
import NodeControlPage from 'modules/nodes/node-control-page';

const DashboardRouter = (): JSX.Element => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/${DashboardRoutes.Agents}`}>
        <AgentsPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Entities}`}>
        <EntitiesPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Logs}`}>
        <LogsPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Nodes}/add`}>
        <NodeControlPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Nodes}/:id/edit`}>
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
