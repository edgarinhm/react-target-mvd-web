import TargetList from '../TargetList';
import Header from 'components/Layout/Header/Header';
import Profile from 'components/Layout/Profile';
import { homeI18n, sidebarI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter } from 'utils';
import { useEmptyHomeState } from './useEmptyHomeState';
import testIds from 'constants/test-ids-constant';
import styles from './empty-home-sidebar.module.scss';

const EmptyHomeSidebar = () => {
  const { t, targets } = useEmptyHomeState();

  return (
    <>
      <Header title={t(homeI18n.PAGE_TITLE)} />
      <div data-testid={testIds.TARGET_PAGE} className={styles.left__body}>
        <Profile />
        <div className={styles['empty-sidebar']}>
          <div className="empty-sidebar-h2">{capitalizeFirstLetter(t(sidebarI18n.PAGE_TITLE))}</div>
          <div className="empty-sidebar-h3">
            {capitalizeFirstLetter(t(sidebarI18n.PAGE_SUBTITLE))}
          </div>
        </div>
        <TargetList targets={targets} />
      </div>
    </>
  );
};

export default EmptyHomeSidebar;
