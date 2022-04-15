import { Navigate } from 'react-router-dom';
import { FormStatus } from 'components/common';
import Header from 'components/Layout/Header';
import { Mobile } from 'components/Layout/Mobile';
import { SignupForm } from './components';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import { signupI18n } from 'constants/i18n-constant';
import useSignup from './useSignup';
import './signup.scss';

const SignUp = () => {
  const { handleSubmit, authenticated, t } = useSignup();

  if (authenticated) {
    return <Navigate to={routesPaths.index} />;
  }

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <Header title={t(signupI18n.PAGE_TITLE)} />
        <FormStatus />
        <SignupForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default SignUp;
