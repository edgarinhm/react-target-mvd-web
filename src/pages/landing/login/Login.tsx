import { Navigate } from 'react-router';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import { HappySmile } from 'components/Layout/HappySmile';
import { LoginForm } from './components/LoginForm';
import { FormStatus } from './components/FormStatus';
import { useSession } from 'hooks';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import './login.scss';

const Login = () => {
  const handleSubmit = () => {};
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routesPaths.index} />;
  }
  return (
    <article className="two-column-layout-wrap" data-test-id={testIds.LOGIN_PAGE}>
      <div className="left">
        <MenuItem />
        <HappySmile />
        <FormStatus />
        <h1 className="letter-spacing">Target MVD</h1>
        <h2>Find people near you & Connect</h2>
        <p className="login-p">
          Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and
          start connecting with others who share your interest.
        </p>
        <LoginForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default Login;
