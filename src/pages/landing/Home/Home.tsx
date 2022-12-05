import About from './components/About';
import ContactModal from './components/ContactModal';
import CompatibleTargetModal from './components/CompatibleTargetModal';
import { HomeEmptyState } from './components/EmptyHomeSidebar';
import ProfileEdit from './components/ProfileEdit';
import Target from './components/Target';
import ChatList from './components/ChatList/ChatList';
import ChatMessages from './components/ChatMessages/ChatMessages';
import Footer from 'components/Layout/Footer';
import HappySmile from 'components/Layout/HappySmile';
import Maps from 'components/Layout/Map';
import SideBar from 'components/Layout/SideBar/SideBar';
import testIds from 'constants/test-ids-constant';
import { HomeContent, useHome } from './useHome';
import './home.scss';

const Home = () => {
  const { handleMapClick, currentLocation, activeSidebar, activeHomeContent } = useHome([
    <HomeEmptyState />,
    <Target />,
    <ChatList />,
    <About />,
    <ProfileEdit />,
    <ChatMessages />,
  ]);

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className={activeSidebar ? 'left left__sidebar' : 'left'}>
        <SideBar />
        <ContactModal />
        <CompatibleTargetModal />
        {activeHomeContent}
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
