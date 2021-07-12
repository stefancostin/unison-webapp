import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'modules/dashboard';
import ErrorPage from 'modules/error-page';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="*">
        <ErrorPage title="404" status="404" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
