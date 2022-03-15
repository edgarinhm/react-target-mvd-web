import { MenuItem } from 'components/common';
import { Maps } from 'components/Layout/Map';
import Profile from 'components/Layout/Profile';
import { HappySmile } from 'components/Layout/HappySmile';
import testIds from 'constants/test-ids-constant';
import HomeEmtpyState from './components/EmptyHomeSidebar';
import { homeI18n } from 'constants/i18n-constant';
import { useTranslation } from 'hooks';
import './home.scss';

const Home = () => {
  const t = useTranslation();
  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className="left">
        <div className="header">
          <div className="header__item">
            <MenuItem />
          </div>
          <h1 className="header__title letter-spacing">{t(homeI18n.PAGE_TITLE)}</h1>
        </div>
        <Profile />
        <HomeEmtpyState />
        <div className="footer">
          <HappySmile styleClass="smiles-small" />
        </div>
      </section>
      <section className="right">
        <Maps />
      </section>
    </article>
  );
};

export default Home;
