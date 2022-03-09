import Home from 'pages/landing/Home';
import SignUp from 'pages/landing/Signup';
import routesPaths from 'constants/routes-paths-constant';
import { Routes } from 'interfaces/route/routes-interface';

const routes: Routes[] = [
  {
    path: routesPaths.index,
    element: <Home />,
  },
  {
    path: routesPaths.signup,
    element: <SignUp />,
  },
];

export default routes;
