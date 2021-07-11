import { ApplicationRoutes } from './routes';

const createRouteGuard = (routes: ApplicationRoutes) => {
  return Object.values(routes).join('|');
};

export default createRouteGuard;
