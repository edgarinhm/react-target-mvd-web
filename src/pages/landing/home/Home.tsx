import { MenuItem } from 'components/common';
import { Maps } from 'components/Layout/Maps';
import testIds from 'constants/test-ids-constant';

import './home.scss';

const Home = () => {
  return (
    <article className="home-wrap" data-test-id={testIds.HOME_PAGE}>
      <div className="left">
        <MenuItem />
        <h1 className="letter-spacing">TARGET</h1>
      </div>
      <div className="right">
        <Maps />
      </div>
    </article>
  );
};

export default Home;
