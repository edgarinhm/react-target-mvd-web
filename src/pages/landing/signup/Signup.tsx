import SignupForm from './components/SignupForm';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/testIds';

import './signup.scss';

const SignUp = () => {
  const handleSubmit = () => {
    console.log('Signup handleSubmit');
  };
  return (
    <div className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <MenuItem />
        <h1>Sign Up</h1>
        <SignupForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </div>
  );
};

export default SignUp;
