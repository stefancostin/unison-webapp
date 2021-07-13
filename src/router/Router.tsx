import React from 'react';
import { createBrowserHistory } from 'history';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'modules/dashboard';
import ErrorPage from 'modules/error-page';

export const history = createBrowserHistory();

const Router = (): JSX.Element => (
  <ReactRouter history={history}>
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="*">
        <ErrorPage title="404" status="404" />
      </Route>
    </Switch>
  </ReactRouter>
);

export default Router;
