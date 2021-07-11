import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DashboardRoutes } from './routes';
import createRouteGuard from './guard';
import Dashboard from 'modules/dashboard';
import ErrorPage from 'modules/error-page';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path={`/dashboard/(${createRouteGuard(DashboardRoutes)})`}>
        <Dashboard />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
