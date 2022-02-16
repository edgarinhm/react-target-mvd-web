import { httpClient } from 'http-client';

import UserSingUp from 'interfaces/user.interface';
const SIGNUP_URL = '/users';

class UserService {
  static async signUp(user: UserSingUp) {
    try {
      return await httpClient.post(SIGNUP_URL, user);
    } catch (e) {
      return console.log('Failed signUp', e);
    }
  }
}

export default UserService;
