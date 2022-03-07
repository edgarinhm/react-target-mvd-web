import conversations from 'data/conversations.json';
import { MEDIA_AVATARS, MEDIA_ICONS } from 'constants/assets-constants';
import { validateLocalSrc } from 'utils/url-util';
import './chats.scss';

const Chats = () => {
  const chats = conversations.map((conversation, index) => (
    <div key={conversation.match_id}>
      <div className="grid chats">
        <div className={!index ? 'chat-details chat-details-first' : 'chat-details'}>
          <img
            className="avatar-chat"
            src={validateLocalSrc(
              conversation.user.avatar.normal_url,
              process.env.PUBLIC_URL + MEDIA_AVATARS + conversation.user.avatar.normal_url
            )}
            alt={'avatar ' + conversation.user.full_name}
          />
          <div className="group-chats">
            <span>
              <strong>{conversation.user.full_name}</strong>
            </span>
            <span>{conversation.last_message}</span>
          </div>
          <div className="group-icon">
            <img
              className="icon"
              src={validateLocalSrc(
                conversation.topic_icon,
                process.env.PUBLIC_URL + MEDIA_ICONS + conversation.topic_icon
              )}
              alt={'topic icon'}
            />
            {conversation.unread_messages > 0 && (
              <div className="icon-badge">{conversation.unread_messages}</div>
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
