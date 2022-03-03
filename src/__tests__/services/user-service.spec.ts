import { configureStore, mockedHttpClient } from 'utils/test-helpers';
import { userService } from 'services/user-service';
import User from 'interfaces/user/user-interface';

describe('Login Service', () => {
  let store: any;
  let httpClient: any;
  const USER_BASE_URL = '/users';

  beforeAll(() => {
    store = configureStore({});
    httpClient = mockedHttpClient(store, { baseURL: process.env.REACT_APP_API_URL });
  });

  it('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    const LOGIN_URL = `${USER_BASE_URL}/sign_in`;
    const user: User = {
      email: 'edgar.mejia@rootstrap.com',
      password: '12345678',
    };
  });
});
