import { Maps } from 'components/Layout/Maps';
import { MenuItem } from 'components/common';
import testIds from 'constants/test-ids-constant';
import Profile from 'components/Layout/Profile';
import { Chats } from 'components/Layout/Chats';
import './home.scss';

const Home = () => {
  return (
    <article className="home-wrap" data-test-id={testIds.HOME_PAGE}>
      <section className="left">
        <div className="header-wrap">
          <MenuItem />
          <h1 className="letter-spacing">target</h1>
        </div>
        <Profile />
        <Chats />
      </section>
      <section className="right">
        <Maps />
      </section>
    </article>
  );
};

export default Home;
