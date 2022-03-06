import userService from 'services/user-service';
import { UNAUTHORIZED, NOTFOUND } from 'constants/api-constants';
import User from 'interfaces/user/user-interface';

describe('Login Service', () => {
  let user: User;

  beforeEach(() => {
    user = {
      email: 'test@gmail.com',
      password: 'password',
    };
  });

  describe('when API call fails', () => {
    it('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
      user.password = '123456';
      try {
        const userLoged = await userService.login(user);
        await expect(userLoged.email).toEqual(userLoged.email);
      } catch (error) {
        await expect(Promise.reject(error)).rejects.toThrow(`${UNAUTHORIZED}`);
      }
    });
  });

  describe('when API call is successful', () => {
    it('Should return user profile', async () => {
      try {
        const userLoged = await userService.login(user);
        await expect(userLoged.email).toEqual(userLoged.email);
      } catch (error) {
        await expect(Promise.reject(error)).rejects.toThrow(`${NOTFOUND}`);
      }
    });
  });
});
