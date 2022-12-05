import BackNavigation from 'components/Layout/BackNavigation';
import Header from 'components/Layout/Header';
import { chatMessagesI18n } from 'constants/i18n-constant';
import routesPaths from 'constants/routes-paths-constant';
import useChatMessages from './useChatMessages';
import styles from './ChatMessages.module.scss';
import { TextArea } from 'components/common';
import { validateLocalSrc } from 'utils';
import { MEDIA_ICONS, DEFAULT_TOPIC } from 'constants/assets-constants';

const ChatMessages = () => {
  const { t, handleBack, conversation, messages, formatAMPM } = useChatMessages();
  return (
    <div className={styles['chat-message-container']}>
      <Header variant="header--back" title={t(chatMessagesI18n.PAGE_TITLE)}>
        <BackNavigation to={routesPaths.index} onClick={handleBack} />
      </Header>
      {conversation &&
        conversation.map(message => {
          return (
            <div key={message.matchId} className={styles['chat-message-title']}>
              <img
                className="avatar-chat"
                src={validateLocalSrc(
                  message.topicIcon,
                  process.env.PUBLIC_URL + MEDIA_ICONS + (message.topicIcon || DEFAULT_TOPIC)
                )}
                alt={'avatar ' + message.user.fullName}
              />
              <h2>{message.user.fullName}</h2>
            </div>
          );
        })}
      <div className={styles.line}></div>
      <div className={styles['chat-message-body']}>
        {messages &&
          messages.map(message => {
            return (
              <div className={styles['chat-message-group-content']} key={message.id}>
                <div className={styles['chat-message-content']}>{message.content}</div>
                <span>{formatAMPM(message.date)}</span>
              </div>
            );
          })}
      </div>
      <div className={styles['chat-message-text']}>
        <TextArea name={'message'} />
      </div>
    </div>
  );
};

export default ChatMessages;
