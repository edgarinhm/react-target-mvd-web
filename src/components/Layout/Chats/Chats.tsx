import { MEDIA_AVATARS, MEDIA_ICONS, DEFAULT_AVATAR } from 'constants/assets-constants';
import { validateLocalSrc } from 'utils';
import { Conversations } from 'interfaces/chat/conversations-interface';
import './chats.scss';

interface ChatsProps {
  conversations: Conversations[];
}

const Chats = ({ conversations }: ChatsProps) => {
  const chats = conversations.map((conversation, index) => (
    <div className="grid chats" key={conversation.matchId}>
      <div className={!index ? 'chat__details chat__details-first' : 'chat__details'}>
        <div className="group-detail">
          <img
            className="avatar-chat"
            src={validateLocalSrc(
              conversation.user.avatar.normalUrl,
              process.env.PUBLIC_URL +
                MEDIA_AVATARS +
                (conversation.user.avatar.normalUrl || DEFAULT_AVATAR)
            )}
            alt={'avatar ' + conversation.user.fullName}
          />
          <div className="group-chats">
            <span>
              <strong>{conversation.user.fullName}</strong>
            </span>
            <span>{conversation.lastMessage}</span>
          </div>
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
            <span className="icon-badge">{conversation.unreadMessages}</span>
          )}
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
