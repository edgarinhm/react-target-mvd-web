import './home.scss';
import testIds from 'constants/test-ids-constant';
import { Maps } from 'components/Layout/Maps';
import { MenuItem } from 'components/common';

const Home = () => {
  return (
    <article className="home-wrap" data-test-id={testIds.HOME_PAGE}>
      <div className="left">
        <MenuItem />
        <h1>Welcome To TARGET</h1>
      </div>
      <div className="right">
        <Maps />
      </div>
    </article>
  );
};

export default Home;
