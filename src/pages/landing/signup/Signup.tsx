import { Navigate } from 'react-router-dom';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import { FormStatus, SignupForm } from './components';
import { useDispatch, useSession } from 'hooks';
import { signUp } from 'state/actions/user-actions';
import routesPaths from 'constants/routes-paths';
import testIds from 'constants/test-ids';
import './signup.scss';

const SignUp = () => {
  const handleSubmit = useDispatch(signUp);
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routesPaths.home} />;
  }

  return (
    <article className="signup-wrap" data-test-id={testIds.SIGNUP_PAGE}>
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
