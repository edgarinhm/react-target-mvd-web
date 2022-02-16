import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import routes from 'constants/routesPaths';
import MenuIcon from 'components/common/MenuItem/MenuItem';
import smileMedia from 'assets/layout/media/smile.svg';

import './login.scss';

const Login = () => {
  return (
    <div className="home">
      <div className="home-left">
        <MenuIcon />
        <div className="info">
          <div className="smilies">
            <div className="oval-2">
              <img src={smileMedia} alt="smile" />
            </div>
            <div className="oval-2-copy">
              <img src={smileMedia} alt="smile" />
            </div>
          </div>
          <div className="target-mvd">TARGET MVD</div>
          <div className="adress">
            <div className="find-peope-near-you">Find people near you & Connect</div>
          </div>
          <div className="text">
            <div className="create-target-where">
              Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc
              and start conecting with others who share your interest.
            </div>
          </div>
        </div>
        <div className="form">
          <div className="line"></div>
          <div className="sign-up">
            <Link to={routes.signUp}>SIGN UP</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
