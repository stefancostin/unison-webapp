import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardRoutes } from './routes';
import AgentControlPage from 'modules/agents/agent-control-page';
import AgentsPage from 'modules/agents/agents-page';
import EntityControlPage from 'modules/entities/entity-control-page';
import EntitiesPage from 'modules/entities/entities-page';
import LogsPage from 'modules/logs';
import NodeControlPage from 'modules/nodes/node-control-page';
import NodesPage from 'modules/nodes/nodes-page';

const DashboardRouter = (): JSX.Element => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={[`${path}/${DashboardRoutes.Agents}/add`, `${path}/${DashboardRoutes.Agents}/:id/edit`]}>
        <AgentControlPage />
      </Route>
      <Route exact path={`${path}/${DashboardRoutes.Agents}`}>
        <AgentsPage />
      </Route>
      <Route exact path={[`${path}/${DashboardRoutes.Entities}/add`, `${path}/${DashboardRoutes.Entities}/:id/edit`]}>
        <EntityControlPage />
      </Route>
      <Route exact path={`${path}/${DashboardRoutes.Entities}`}>
        <EntitiesPage />
      </Route>
      <Route exact path={`${path}/${DashboardRoutes.Logs}`}>
        <LogsPage />
      </Route>
      <Route exact path={[`${path}/${DashboardRoutes.Nodes}/add`, `${path}/${DashboardRoutes.Nodes}/:id/edit`]}>
        <NodeControlPage />
      </Route>
      <Route exact path={`${path}/${DashboardRoutes.Nodes}`}>
        <NodesPage />
      </Route>
      <Route path="*">
        <Redirect to="/page-not-found" />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
