import routesPaths from 'constants/routes-paths-constant';
import Home from 'pages/landing/home/Home';

import SignUp from 'pages/landing/signup/Signup';
import { RouteFromPathProps } from './route-from-path';

let routes: RouteFromPathProps[] = [
  {
    path: routesPaths.index,
    element: <Home />,
  },
  {
    path: routesPaths.signUp,
    element: <SignUp />,
  },
];

export default routes;
