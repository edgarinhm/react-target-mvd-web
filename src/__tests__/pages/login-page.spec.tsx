import { render, screen } from 'utils/test-helpers';
import testIds from 'constants/test-ids-constant';
import Login from 'pages/landing/login';

describe('LoginPage', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = render(<Login />);
  });

  it('Should render the login page', () => {
    screen.debug();
    expect(wrapper.queryByTestId(testIds.LOGIN_PAGE)).toBeTruthy();
  });
});
