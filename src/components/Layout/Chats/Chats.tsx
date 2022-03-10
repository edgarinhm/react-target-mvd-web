import { MEDIA_AVATARS, MEDIA_ICONS } from 'constants/assets-constants';
import { validateLocalSrc } from 'utils';
import Conversations from 'interfaces/chat/conversations-interface';
import { default as data } from 'data/conversations.json';
import humps from 'humps';
import './chats.scss';

const Chats = () => {
  const conversations = humps.camelizeKeys(data) as Conversations[];
  const chats = conversations.map((conversation, index) => (
    <div key={conversation.matchId}>
      <div className="grid chats">
        <div className={!index ? 'chat__details chat__details-first' : 'chat__details'}>
          <img
            className="avatar-chat"
            src={validateLocalSrc(
              conversation.user.avatar.normalUrl,
              process.env.PUBLIC_URL + MEDIA_AVATARS + conversation.user.avatar.normalUrl
            )}
            alt={'avatar ' + conversation.user.fullName}
          />
          <div className="group-chats">
            <span>
              <strong>{conversation.user.fullName}</strong>
            </span>
            <span>{conversation.lastMessage}</span>
          </div>
          <div className="group-icon">
            <img
              className="icon"
              src={validateLocalSrc(
                conversation.topicIcon,
                process.env.PUBLIC_URL + MEDIA_ICONS + conversation.topicIcon
              )}
              alt="topic icon"
            />
            {conversation.unreadMessages > 0 && (
              <div className="icon-badge">{conversation.unreadMessages}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h3 className="chat-title">Chat</h3>
      {chats}
    </>
  );
};

export default Chats;
