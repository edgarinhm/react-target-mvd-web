import TargetList from '../TargetList';
import Header from 'components/Layout/Header/Header';
import Profile from 'components/Layout/Profile';
import { homeI18n, sidebarI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter } from 'utils';
import { useEmptyHomeState } from './useEmptyHomeState';
import './empty-home-sidebar.scss';

const EmptyHomeSidebar = () => {
  const { t, targets } = useEmptyHomeState();

  return (
    <>
      <Header title={t(homeI18n.PAGE_TITLE)} />
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
