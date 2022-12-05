import { httpClient } from 'http-client';
import { Conversations, ConversationResponse } from 'interfaces/chat/conversations-interface';
import { CHAT_BASE_URL, MESSAGE_URL } from 'constants/api-urls-constants';
import { Messages, MessagesResponse } from 'interfaces/chat/messages-interface';

class ChatService {
  static async findAllChats(): Promise<Conversations[]> {
    try {
      const {
        data: { matches: conversations },
      } = await httpClient.get<ConversationResponse>(CHAT_BASE_URL, { data: {} });
      return conversations;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
  static async findAllChatMessages(matchId: number): Promise<Messages[]> {
    try {
      const {
        data: { messages },
      } = await httpClient.get<MessagesResponse>(MESSAGE_URL.replace(':matchId', `${matchId}`), {
        data: {},
      });
      return messages;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default ChatService;
