import About from './components/About';
import Chats from 'components/Layout/Chats';
import Footer from 'components/Layout/Footer';
import HappySmile from 'components/Layout/HappySmile';
import HomeEmptyState from './components/EmptyHomeSidebar';
import SideBar from 'components/Layout/SideBar/SideBar';
import Maps from 'components/Layout/Map';
import Target from './components/Target';
import testIds from 'constants/test-ids-constant';
import { HomeContent, useHome, homeContentDictionary } from './useHome';
import './home.scss';

const Home = () => {
  const { activeContent, handleMapClick, currentLocation, activeSidebar } = useHome();

  const homeContent: homeContentDictionary = {
    [HomeContent.Empty]: {
      content: <HomeEmptyState />,
    },
    [HomeContent.TargetNewView]: {
      content: <Target />,
    },
    [HomeContent.ChatView]: {
      content: <Chats />,
    },
    [HomeContent.AboutView]: {
      content: <About />,
    },
  };
  const activeHomeContent = homeContent[activeContent];

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className={activeSidebar ? 'left left__sidebar' : 'left'}>
        <SideBar />
        {activeHomeContent.content}
        <Footer>
          <HappySmile styleClass="smiles-small" />
        </Footer>
      </section>
      <section className="right">
        <Maps
          onMapClick={() => handleMapClick(HomeContent.TargetNewView)}
          marker={currentLocation}
        />
      </section>
    </article>
  );
};

export default Home;
