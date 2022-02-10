import { Link } from 'react-router-dom';
import './signup.scss';
import testIds from 'constants/testIds';
import routesPaths from 'constants/routesPaths';
import SignupForm from './components/SignupForm';
import mobileLayout from 'assets/layout/media/i6.png';
import appStoreMedia from 'assets/layout/media/appstore-button.svg';
import facebookMedia from 'assets/layout/media/facebook.svg';
import twitterMedia from 'assets/layout/media/twitter.svg';
import MenuIcon from 'components/MenuIcon/MenuIcon';

const SignUp = () => {
  const handleSubmit = () => {
    console.log('Signup handleSubmit');
  };
  return (
    <div className="signup-wrap" data-testid={testIds.SIGNUP_PAGE}>
      <h1>Sign Up</h1>
      <MenuIcon></MenuIcon>
      <div className="left">
        <SignupForm onSubmit={handleSubmit} />
      </div>
      <div className="right">
        <div className="rectangle">
          <img src={mobileLayout} alt="signup mobile version" />
          <Link data-testid="signup-appstore-link" to={routesPaths.login} className="link">
            <img src={appStoreMedia} alt="go to app store" />
          </Link>
          <Link data-testid="signup-facebook-link" to={routesPaths.login} className="link">
            <img src={facebookMedia} alt="go to facebook" />
          </Link>
          <Link data-testid="signup-twitter-link" to={routesPaths.login} className="link">
            <img src={twitterMedia} alt="go to twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
