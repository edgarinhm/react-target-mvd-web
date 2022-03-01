import { Navigate } from 'react-router';
import { Maps } from 'components/Layout/Maps';
import { MenuItem } from 'components/common';
import { useSession } from 'hooks';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';

import './home.scss';

const Home = () => {
  const { authenticated } = useSession();

  if (!authenticated) {
    return <Navigate to={routesPaths.login} />;
  }
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
