import { Link } from 'react-router-dom';
import backIcon from 'assets/layout/icons/back-icon.svg';
import './back-navigation.scss';

interface BackNavigationProps {
  to: string;
  onClick?: () => void;
}

const BackNavigation = ({ to, onClick }: BackNavigationProps) => {
  return (
    <div>
      <Link
        onClick={onClick}
        data-testid="back-head-link"
        to={to}
        className="link capital-case margin-forgot-password"
      >
        <img className="back-item" src={backIcon} alt="back icon" />
      </Link>
    </div>
  );
};

export default BackNavigation;
