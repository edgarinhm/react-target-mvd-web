import { ReactFragment } from 'react';
import { MenuItem } from 'components/common';

interface HeaderProps {
  title?: string;
  variant?: string;
  children?: ReactFragment | JSX.Element[];
}

const Header = ({ title, variant = '', children }: HeaderProps) => {
  return (
    <div className={`header ${variant}`}>
      <div className="header__item">
        <MenuItem />
      </div>
      {children}
      {title && <h1 className="header__title letter-spacing">{title}</h1>}
    </div>
  );
};

export default Header;
