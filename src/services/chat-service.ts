import { httpClient } from 'http-client';
import { Conversations, ConversationResponse } from 'interfaces/chat/conversations-interface';
import { CHAT_BASE_URL } from 'constants/api-urls-constants';

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
}

export default ChatService;
