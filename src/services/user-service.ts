import { httpClient } from 'http-client';
import { User } from 'interfaces/user/user-interface';
import LoginRequest from 'interfaces/user/login-request-interface';
import SignupRequest from 'interfaces/user/signup-request-interface';
import LoginResponse from 'interfaces/user/login-response-interface';
import {
  ProfileUpdateRequest,
  UserUpdate,
} from 'interfaces/profile/profile-update-request-interface';
import { ChangePassword } from 'interfaces/profile/change-password-interface';
import { ProfileResponse, ProfileUser } from 'interfaces/profile/profile-response-interface';
import { ResetPassword } from 'interfaces/profile/forgot-password-interface';

const USER_BASE_URL = '/users';
const LOGIN_URL = `${USER_BASE_URL}/sign_in`;
const LOGOUT_URL = `${USER_BASE_URL}/sign_out`;
const PASSWORD_URL = `${USER_BASE_URL}/password`;
const EDIT_RESET_PASSWORD_URL = `${PASSWORD_URL}/edit`;

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

  static async login(user: User): Promise<ProfileUser> {
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

  static async logout(): Promise<string> {
    try {
      const {
        data: { success },
      } = await httpClient.delete(LOGOUT_URL, { data: {} });
      return success;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async updateProfile(id: string, profile: UserUpdate): Promise<string> {
    try {
      const profileRequest: ProfileUpdateRequest = { user: profile };
      const { status } = await httpClient.put(`${USER_BASE_URL}/${id}`, profileRequest);
      return `${status}`;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async changePassword(changePassword: ChangePassword): Promise<string> {
    try {
      const { status } = await httpClient.put(PASSWORD_URL, changePassword);
      return `${status}`;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async profile(id: string): Promise<ProfileUser> {
    try {
      const {
        data: { user },
      } = await httpClient.get<ProfileResponse>(`${USER_BASE_URL}/${id}`, {
        data: {},
      });
      return user;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async resetPassword(email: string): Promise<string> {
    try {
      const resetPassword: ResetPassword = {
        email,
        redirectUrl: `${process.env.REACT_APP_API_URL}${EDIT_RESET_PASSWORD_URL}`,
      };
      const { status } = await httpClient.post(PASSWORD_URL, resetPassword);
      return `${status}`;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default UserService;
