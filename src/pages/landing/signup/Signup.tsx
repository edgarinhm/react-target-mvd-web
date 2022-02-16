import SignupForm from './components/SignupForm';
import { MenuItem } from 'components/common';
import { Mobile } from 'components/Layout/Mobile';
import testIds from 'constants/testIds';

import './signup.scss';

import UserSignUp from 'interfaces/user.interface';
import UserService from 'services/user/user.service';
import { useState } from 'react';
import { FormStatus } from './components';

const SignUp = () => {
  const [error, setError] = useState('');
  const handleSubmit = (formData: UserSignUp) => {
    UserService.signUp(formData)
      .then(okSignUp => {
        console.log('then UserService', okSignUp);
      })
      .catch((errorSignUp: Error) => {
        console.log('catch UserService', errorSignUp);
        setError(errorSignUp.message);
      });
    console.log('Signup handleSubmit');
  };

  return (
    <article className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <div>{error}</div>
      <FormStatus />
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
