import { configureStore, renderWithRedux } from 'utils/test-helpers';
import testIds from 'constants/test-ids-constant';
import Login from 'pages/landing/login';

describe('LoginPage', () => {
  let store: any;
  let wrapper: any;

  beforeAll(() => {
    store = configureStore({});
    wrapper = renderWithRedux(Login, store);
  });

  it('Should render the login page', () => {
    expect(wrapper.queryByTestId(testIds.LOGIN_PAGE)).toBeTruthy();
  });
});
