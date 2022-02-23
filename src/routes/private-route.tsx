import { ReactNode } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

import routes from 'constants/routes-paths';

const PrivateRoute = ({ children, authenticated, exact = false, path }: PrivateRouteProps) => {
  const location = useLocation();

  return authenticated ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Navigate to={routes.login} replace state={{ path: location.pathname }} />
  );
};

export interface PrivateRouteProps {
  path: string;
  authenticated?: boolean;
  children?: ReactNode;
  exact?: boolean;
}

export default PrivateRoute;
