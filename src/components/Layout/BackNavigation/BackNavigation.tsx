import { Link } from 'react-router-dom';
import backIcon from 'assets/layout/icons/back-icon.svg';
import routesPaths from 'constants/routes-paths-constant';
import './back-navigation.scss';

const BackNavigation = () => {
  return (
    <div>
      <Link
        data-testid="back-head-link"
        to={routesPaths.index}
        className="link capital-case margin-forgot-password"
      >
        <img className="back-item" src={backIcon} alt="back icon" />
      </Link>
    </div>
  );
};

export default BackNavigation;
