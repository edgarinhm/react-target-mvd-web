import { Navigate } from 'react-router';
import { FormStatus } from 'components/common';
import Header from 'components/Layout/Header';
import { Mobile } from 'components/Layout/Mobile';
import HappySmile from 'components/Layout/HappySmile';
import { LoginForm } from './components/LoginForm';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import { loginI18n } from 'constants/i18n-constant';
import useLogin from './useLogin';
import './login.scss';

const Login = () => {
  const { handleSubmit, authenticated, t } = useLogin();

  if (authenticated) {
    return <Navigate to={routesPaths.index} />;
  }

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.LOGIN_PAGE}>
      <div className="left">
        <Header />
        <HappySmile />
        <FormStatus />
        <h1 className="letter-spacing">{t(loginI18n.PAGE_TITLE)}</h1>
        <h2>{t(loginI18n.PAGE_SUB_TITLE)}</h2>
        <p className="login-p">{t(loginI18n.PAGE_TEXT)}</p>
        <LoginForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default Login;
