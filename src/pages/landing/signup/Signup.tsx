import SignupForm, { SignUpFormFields } from './components/SignupForm';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/testIds';

import './signup.scss';

const SignUp = () => {
  const handleSubmit = (data: SignUpFormFields) => {
    console.log('Signup handleSubmit', data);
  };
  return (
    <article className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <MenuItem />
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
