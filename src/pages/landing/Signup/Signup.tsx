import { Navigate } from 'react-router-dom';
import { MenuItem, FormStatus } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import { SignupForm } from './components';
import { useDispatch, useSession, useTranslation } from 'hooks';
import { signUp } from 'state/actions/user-actions';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import { signupI18n } from 'constants/i18n-constant';
import './signup.scss';

const SignUp = () => {
  const handleSubmit = useDispatch(signUp);
  const { authenticated } = useSession();
  const t = useTranslation();

  if (authenticated) {
    return <Navigate to={routesPaths.index} />;
  }

  return (
    <article className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <MenuItem />
        <FormStatus />
        <h1>{t(signupI18n.PAGE_TITLE)}</h1>
        <SignupForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default SignUp;
