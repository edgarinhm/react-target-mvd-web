import './home.scss';
import MenuItem from 'components/common/MenuItem/MenuItem';
import testIds from 'constants/test-ids';
import { Maps } from 'components/Layout/Maps';

const Home = () => {
  return (
    <article className="home-wrap" data-testid={testIds.HOME_PAGE}>
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
