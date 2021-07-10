import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from '../modules/error-page';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard">
        <div>Test</div>
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
