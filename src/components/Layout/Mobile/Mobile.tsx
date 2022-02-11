import { Link } from 'react-router-dom';
import routesPaths from 'constants/routesPaths';
import mobileLayout from 'assets/layout/media/i6.png';
import appStoreMedia from 'assets/layout/media/appstore-button.svg';
import facebookMedia from 'assets/layout/media/facebook.svg';
import twitterMedia from 'assets/layout/media/twitter.svg';
import playMedia from 'assets/layout/media/play.png';

import './mobile.scss';

function Mobile() {
  return (
    <div className="rectangle">
      <img src={mobileLayout} alt="signup mobile version" />
      <Link data-testid="signup-appstore-link" to={routesPaths.login} className="link">
        <img src={appStoreMedia} alt="go to app store" />
        <div className="play">
          <img src={playMedia} alt="mobil version" />
        </div>
      </Link>
      <div className="social-media">
        <Link data-testid="signup-facebook-link" to={routesPaths.login} className="link">
          <img src={facebookMedia} alt="go to facebook" />
        </Link>
        <Link data-testid="signup-twitter-link" to={routesPaths.login} className="link">
          <img src={twitterMedia} alt="go to twitter" />
        </Link>
      </div>
    </div>
  );
}

export default Mobile;
