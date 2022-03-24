import { useState } from 'react';
import { Maps } from 'components/Layout/Map';
import { HappySmile } from 'components/Layout/HappySmile';
import HomeEmptyState from './components/EmptyHomeSidebar';
import Target from 'pages/landing/Target';
import { Chats } from 'components/Layout/Chats';
import testIds from 'constants/test-ids-constant';
import './home.scss';

const Home = () => {
  enum HomeContent {
    Empty,
    NewTarget,
    ViewChat,
  }
  const [activeContent, setActiveContent] = useState(HomeContent.Empty);

  interface HomeContentElement {
    content: JSX.Element;
  }

  type homeContentDictionary = Record<HomeContent, HomeContentElement>;

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

  const handleMapClick = () => {
    setActiveContent(HomeContent.NewTarget);
  };

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.HOME_PAGE}>
      <section className="left">
        {activeHomeContent.content}
        <div className="footer">
          <HappySmile styleClass="smiles-small" />
        </div>
      </section>
      <section className="right">
        <Maps onMapClick={handleMapClick} />
      </section>
    </article>
  );
};

export default Home;
