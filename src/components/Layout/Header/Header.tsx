import { ReactFragment } from 'react';
import { Button, MenuItem } from 'components/common';
import useHeader from './useHeader';
import styles from './header.module.scss';

interface HeaderProps {
  title?: string;
  variant?: string;
  canClose?: boolean;
  closeTo?: () => void;
  children?: ReactFragment | JSX.Element[];
}

const Header = ({ title, variant = '', canClose, closeTo, children }: HeaderProps) => {
  const { activeSidebar } = useHeader();
  return (
    <div className={`${styles.header} ${variant}`}>
      {!canClose && !variant && (
        <div className={activeSidebar ? ' header__item header__sidebar' : 'header__item'}>
          <MenuItem />
        </div>
      )}
      {children}
      {title && <h1 className="header__title letter-spacing">{title}</h1>}
      <div className="close-icon">
        <Button className="button__icon" label={canClose ? 'x' : ''} onClick={closeTo} />
      </div>
    </div>
  );
};

export default Header;
