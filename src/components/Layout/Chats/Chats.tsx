import { MEDIA_AVATARS, MEDIA_ICONS, DEFAULT_AVATAR } from 'constants/assets-constants';
import { validateLocalSrc } from 'utils';
import { Conversations } from 'interfaces/chat/conversations-interface';
import './chats.scss';
import { Button } from 'components/common';
import { setHomeContent } from 'state/actions/home-actions';
import { HomeContent } from 'pages/landing/Home/useHome';
import { useAppDispatch } from 'hooks';
import { setCurrentChatId } from 'state/actions/chat-actions';

interface ChatsProps {
  conversations: Conversations[];
}

const Chats = ({ conversations }: ChatsProps) => {
  const dispatch = useAppDispatch();
  const handleReadMessages = (matchId: number) => {
    dispatch(setCurrentChatId(matchId));
    dispatch(setHomeContent(HomeContent.MessageView));
  };
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
            <div className="icon-badge-button">
              <Button
                onClick={() => handleReadMessages(conversation.matchId)}
                className="icon-badge"
                label={`${conversation.unreadMessages}`}
              />
            </div>
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
