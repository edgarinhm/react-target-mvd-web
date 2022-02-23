import { httpClient } from 'http-client';
import { UserSignUp } from 'interfaces/user-interface';
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
      throw Error();
    }
  }
}

export default UserService;
