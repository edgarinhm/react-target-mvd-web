import { httpClient } from 'http-client';
import { User } from 'interfaces/user/user-interface';
import LoginRequest from 'interfaces/user/login-request-interface';
import SignupRequest from 'interfaces/user/signup-request-interface';
import LoginResponse from 'interfaces/user/login-response-interface';

const USER_BASE_URL = '/users';
const LOGIN_URL = `${USER_BASE_URL}/sign_in`;
const LOGOUT_URL = `${USER_BASE_URL}/sign_out`;

class UserService {
  static async signUp(user: User): Promise<User> {
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
      const { data } = await httpClient.post<User>(USER_BASE_URL, signupRequest);
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async login(user: User): Promise<User> {
    const loginRequest: LoginRequest = {
      user,
    };
    try {
      const {
        data: { data },
      } = await httpClient.post<LoginResponse>(LOGIN_URL, loginRequest);
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async logout() {
    try {
      const {
        data: { success },
      } = await httpClient.delete(LOGOUT_URL, { data: {} });
      return success;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default UserService;
