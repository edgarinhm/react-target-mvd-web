import { lazy } from 'react';
import routesPaths from 'constants/routes-paths-constant';
import { Routes } from 'interfaces/route/routes-interface';

const LazyHomePage = lazy(() => import('../pages/landing/Home'));
const LazyLoginpPage = lazy(() => import('../pages/landing/Login'));
const LazySignUpPage = lazy(() => import('../pages/landing/Signup'));
const LazyAboutPage = lazy(() => import('../pages/landing/Home/components/About'));
const LazyForgotPasswordPage = lazy(() => import('../pages/landing/ForgotPassword'));
const LazyLandingWrapLayout = lazy(() => import('../components/Layout/LandingWrap'));

const routes: Routes[] = [
  {
    path: routesPaths.index,
    Component: <LazyHomePage />,
    exact: true,
    private: true,
  },
  {
    path: routesPaths.login,
    Component: <LazyLoginpPage />,
    exact: true,
    private: false,
  },
  {
    path: routesPaths.signup,
    Component: <LazySignUpPage />,
    exact: true,
    private: false,
  },
  {
    path: routesPaths.about,
    Component: <LazyAboutPage />,
    exact: true,
    private: false,
  },
  {
    path: routesPaths.passwordReset,
    Component: (
      <LazyLandingWrapLayout>
        <LazyForgotPasswordPage />
      </LazyLandingWrapLayout>
    ),
    exact: true,
    private: false,
  },
];

export default routes;
