import { httpClient } from 'http-client';
import ErrorApi from 'interfaces/error-api.interface';
import { SignupErrorResponse } from 'interfaces/signup-error-response.interface';
import { UserSignUp } from 'interfaces/user.interface';
import SignupRequest from './signup-request.interface';

const SIGNUP_URL = '/users';

class UserService {
  static async signUp(user: UserSignUp) {
    const signupRequest: SignupRequest = {
      user: {
        username: user.name,
        email: user.email,
        gender: user.gender,
        password: user.password,
        password_confirmation: user.passwordConfirm,
      },
    };
    try {
      return await httpClient.post(SIGNUP_URL, signupRequest);
    } catch ({ response: { data, status } }) {
      const errorSignup = data as SignupErrorResponse;
      if (errorSignup?.status === 'error') {
        throw new Error(errorSignup.errors.full_messages[0]);
      }
      throw new Error((data as ErrorApi)?.error);
    }
  }
}

export default UserService;
