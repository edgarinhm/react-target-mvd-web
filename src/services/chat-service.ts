import { httpClient } from 'http-client';
import { Conversations, ConversationResponse } from 'interfaces/chat/conversations-interface';

const CHAT_BASE_URL = '/match_conversations';

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
