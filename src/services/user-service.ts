import { httpClient } from 'http-client';
import { UserSignUp, UserLogin } from 'interfaces/user/user-interface';
import LoginRequest from 'interfaces/user/login-request-interface';
import SignupRequest from 'interfaces/user/signup-request-interface';

const USER_BASE_URL = '/users';
const LOGIN_URL = `${USER_BASE_URL}/sign_in`;

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
      return await httpClient.post(USER_BASE_URL, signupRequest);
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async login(user: UserLogin) {
    const loginRequest: LoginRequest = {
      user,
    };
    try {
      return await httpClient.post(LOGIN_URL, loginRequest);
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default UserService;
