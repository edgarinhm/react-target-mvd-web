import TargetList from '../TargetList';
import { MenuItem } from 'components/common';
import Profile from 'components/Layout/Profile';
import { homeI18n, sidebarI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter } from 'utils';
import { useEmptyHomeState } from './useEmptyHomeState';
import './empty-home-sidebar.scss';

const EmptyHomeSidebar = () => {
  const { t, targets } = useEmptyHomeState();

  return (
    <>
      <div className="header">
        <div className="header__item">
          <MenuItem />
        </div>
        <h1 className="header__title letter-spacing">{t(homeI18n.PAGE_TITLE)}</h1>
      </div>
      <Profile />
      <div className=" empty-sidebar empty-sidebar-h2">
        {capitalizeFirstLetter(t(sidebarI18n.PAGE_TITLE))}
      </div>
      <div className=" empty-sidebar empty-sidebar-h3">
        {capitalizeFirstLetter(t(sidebarI18n.PAGE_SUBTITLE))}
      </div>
      <TargetList targets={targets} />
    </>
  );
};

export default EmptyHomeSidebar;
