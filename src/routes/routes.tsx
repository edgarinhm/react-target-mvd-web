import Home from 'pages/landing/home/Home';
import SignUp from 'pages/landing/signup/Signup';
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
