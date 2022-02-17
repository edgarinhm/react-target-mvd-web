import { useState } from 'react';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/test-ids';
import UserSignUp from 'interfaces/user.interface';
import UserService from 'services/user/user.service';

import { FormStatus, SignupForm } from './components';
import './signup.scss';
import { signUp } from 'state/actions/user-actions';
import { useDispatch } from 'hooks';

const SignUp = () => {
  const signupRequest = useDispatch(signUp);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (formData: UserSignUp) => {
    setLoading(true);
    UserService.signUp(formData)
      .then(okSignUp => {
        console.log('then UserService', okSignUp);
      })
      .catch((errorSignUp: Error) => {
        console.log('catch UserService', errorSignUp);
        setError(errorSignUp.message);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log('Signup handleSubmit');
  };

  return (
    <article className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div className="left">
        <MenuItem />
        <FormStatus isLoading={loading} error={error} />
        <h1>Sign Up</h1>
        <SignupForm onSubmit={signupRequest} />
      </div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default SignUp;
