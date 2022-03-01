import { Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import { Routes } from 'interfaces/routes-interface';

const RouteFromPath = ({ element, ...route }: Routes) =>
  route.private ? (
    <PrivateRoute {...route}>{element}</PrivateRoute>
  ) : (
    <Route {...route}>{element}</Route>
  );

export default RouteFromPath;
