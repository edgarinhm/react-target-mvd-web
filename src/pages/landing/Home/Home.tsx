import HomeEmptyState from './components/EmptyHomeSidebar';
import Target from 'pages/landing/Home/components/Target';
import { Chats } from 'components/Layout/Chats';
import { Maps } from 'components/Layout/Map';
import { HappySmile } from 'components/Layout/HappySmile';
import testIds from 'constants/test-ids-constant';
import { HomeContent, useHome, homeContentDictionary } from './useHome';
import './home.scss';
import Footer from 'components/Layout/Footer/Footer';

const Home = () => {
  const { activeContent, handleMapClick, currentLocation } = useHome();

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
        <Footer>
          <HappySmile styleClass="smiles-small" />
        </Footer>
      </section>
      <section className="right">
        <Maps onMapClick={() => handleMapClick(HomeContent.NewTarget)} marker={currentLocation} />
      </section>
    </article>
  );
};

export default Home;
