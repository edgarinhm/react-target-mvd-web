import About from './components/About';
import ContactModal from './components/ContactModal';
import { HomeEmptyState } from './components/EmptyHomeSidebar';
import ProfileEdit from './components/ProfileEdit';
import Target from './components/Target';
import ChatList from './components/ChatList/ChatList';
import Footer from 'components/Layout/Footer';
import HappySmile from 'components/Layout/HappySmile';
import Maps from 'components/Layout/Map';
import SideBar from 'components/Layout/SideBar/SideBar';
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
      content: <ChatList />,
    },
    [HomeContent.AboutView]: {
      content: <About />,
    },
    [HomeContent.ProfileEditView]: {
      content: <ProfileEdit />,
    },
  };
  const activeHomeContent = homeContent[activeContent];

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className={activeSidebar ? 'left left__sidebar' : 'left'}>
        <SideBar />
        <ContactModal />
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
