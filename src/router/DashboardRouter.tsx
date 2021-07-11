import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EntityPage from '../modules/entity-page/EntityPage';
import { DashboardRoutes } from './routes';

const DashboardRouter = (): JSX.Element => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <EntityPage />
      </Route>
      <Route path={`${path}/${DashboardRoutes.Entities}`}>
        <EntityPage />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
