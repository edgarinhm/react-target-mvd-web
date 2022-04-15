import { ReactFragment } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from 'components/common';
import './header.scss';

interface HeaderProps {
  title?: string;
  variant?: string;
  canClose?: boolean;
  closeTo?: string;
  children?: ReactFragment | JSX.Element[];
}

const Header = ({ title, variant = '', canClose = false, closeTo = '', children }: HeaderProps) => {
  return (
    <div className={`header ${variant}`}>
      <div className="header__item">{!variant && <MenuItem />}</div>
      {children}
      {title && <h1 className="header__title letter-spacing">{title}</h1>}
      {canClose && (
        <div className="close-icon">
          <Link
            data-testid="close-head-link"
            className="link capital-case margin-forgot-password"
            to={closeTo}
          >
            x
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
