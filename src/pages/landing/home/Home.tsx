import { MenuItem } from 'components/common';
import { Maps } from 'components/Layout/Maps';
import Profile from 'components/Layout/Profile';
import { Chats } from 'components/Layout/Chats';
import { HappySmile } from 'components/Layout/HappySmile';
import testIds from 'constants/test-ids-constant';
import HomeEmtpyState from './components/HomeEmtpyState';
import './home.scss';

const Home = () => {
  return (
    <article className="home-wrap" data-test-id={testIds.HOME_PAGE}>
      <section className="left">
        <div className="">
          <MenuItem />
          <h1 className="letter-spacing">target</h1>
        </div>
        <Profile />
        <HomeEmtpyState />
        <div className="footer">
          <HappySmile small="smiles-small" />
        </div>
      </section>
      <section className="right">
        <Maps />
      </section>
    </article>
  );
};

export default Home;
