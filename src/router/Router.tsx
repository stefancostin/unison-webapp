import { createBrowserHistory } from 'history';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'modules/dashboard';
import LoginPage from 'modules/login';
import ErrorPage from 'modules/error-page';
import { GeneralRoutes } from './routes';

export const history = createBrowserHistory();

const Router = (): JSX.Element => (
  <ReactRouter history={history}>
    <Switch>
      <Route path={`/${GeneralRoutes.Dashboard}`}>
        <Dashboard />
      </Route>
      <Route path={`/${GeneralRoutes.Login}`}>
        <LoginPage />
      </Route>
      <Route path="*">
        <ErrorPage title="404" status="404" />
      </Route>
    </Switch>
  </ReactRouter>
);

export default Router;
