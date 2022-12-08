import Chats from 'components/Layout/Chats';
import Header from 'components/Layout/Header';
import Profile from 'components/Layout/Profile';
import { homeI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import { useTranslation } from 'hooks';

import styles from './chat-list.module.scss';
import useChatList from './useChatList';

function ChatList() {
  const t = useTranslation();
  const { conversations } = useChatList();

  return (
    <>
      <Header title={t(homeI18n.PAGE_TITLE)} />
      <div data-testid={testIds.CONVERSATION_PAGE} className={styles.left__body}>
        <Profile />
        {!!conversations.length && <Chats conversations={conversations} />}
      </div>
    </>
  );
}

export default ChatList;
