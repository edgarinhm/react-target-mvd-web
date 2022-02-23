import { ReactNode } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './private-route';

const RouteFromPath = ({ element, ...route }: RouteFromPathProps) =>
  route.private ? (
    <PrivateRoute {...route}>{element}</PrivateRoute>
  ) : (
    <Route {...route}>{element}</Route>
  );

export interface RouteFromPathProps {
  path: string;
  element: ReactNode;
  authenticated?: boolean;
  exact?: boolean;
  private?: boolean;
}

export default RouteFromPath;
