import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/test-ids';
import { FormStatus, SignupForm } from './components';
import './signup.scss';

import { signUp } from 'state/actions/user-actions';
import { useDispatch, useSession } from 'hooks';
import { Navigate } from 'react-router-dom';
import routesPaths from 'constants/routes-paths';

const SignUp = () => {
  const handleSubmit = useDispatch(signUp);
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routesPaths.index} />;
  }

  return (
    <article className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <MenuItem />
        <FormStatus />
        <h1>Sign Up</h1>
        <SignupForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default SignUp;
