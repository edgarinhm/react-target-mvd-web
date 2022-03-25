import HomeEmptyState from './components/EmptyHomeSidebar';
import Target from 'pages/landing/Target';
import { Chats } from 'components/Layout/Chats';
import { Maps } from 'components/Layout/Map';
import { HappySmile } from 'components/Layout/HappySmile';
import testIds from 'constants/test-ids-constant';
import { HomeContent, useHome, homeContentDictionary } from './useHome';
import './home.scss';

const Home = () => {
  const { activeContent, handleMapClick } = useHome();

  const homeContent: homeContentDictionary = {
    [HomeContent.Empty]: {
      content: <HomeEmptyState />,
    },
    [HomeContent.NewTarget]: {
      content: <Target />,
    },
    [HomeContent.ViewChat]: {
      content: <Chats />,
    },
  };
  const activeHomeContent = homeContent[activeContent];

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className="left">
        {activeHomeContent.content}
        <div className="footer">
          <HappySmile styleClass="smiles-small" />
        </div>
      </section>
      <section className="right">
        <Maps onMapClick={() => handleMapClick(HomeContent.NewTarget)} />
      </section>
    </article>
  );
};

export default Home;
