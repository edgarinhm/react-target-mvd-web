import './home.scss';
import { Link } from 'react-router-dom';
import routesPaths from 'constants/routesPaths';

const Home = () => {
  return (
    <div className="home">
      <div className="menu-icon"></div>
      <div className="home-left">
        <div className="info">
          <div className="smilies">
            <div className="oval-2">-</div>
            <div className="oval-2-copy">-</div>
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
            <Link to={routesPaths.signUp}>SIGN UP</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
