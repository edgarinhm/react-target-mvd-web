import SignupForm from './components/SignupForm';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/testIds';

import './signup.scss';
import UserService from 'services/userService';
import UserSignUp from 'interfaces/user.interface';

const SignUp = () => {
  const handleSubmit = (data: UserSignUp) => {
    const response = UserService.signUp(data);
    console.log('Signup handleSubmit', data, 'response', response);
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
