import './chats.scss';
import Conversations from 'interfaces/chat/conversations-interface';
import { CONVERSATIONS } from 'constants/chats-constants';

const Chats = () => {
  const conversations: Conversations[] = CONVERSATIONS;
  const chats = conversations.map((conversation, index) => (
    <div key={conversation.match_id}>
      <div className="grid chats">
        <div className={!index ? 'chat-details chat-details-first' : 'chat-details'}>
          <img
            className="avatar-chat"
            src={conversation.user.avatar.normal_url}
            alt={'avatar ' + conversation.user.full_name}
          />
          <div className="group-chats">
            <span>
              <strong>{conversation.user.full_name}</strong>
            </span>
            <span>{conversation.last_message}</span>
          </div>
          <div className="group-icon">
            <img className="icon" src={conversation.topic_icon} alt={'topic icon'} />
            {conversation.unread_messages && (
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
