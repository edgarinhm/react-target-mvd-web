export interface Conversations {
  matchId: number;
  topicIcon: string;
  lastMessage: string;
  unreadMessages: number;
  user: chatUser;
}

export interface chatUser {
  id: number;
  fullName: string;
  avatar: {
    originalUrl: string;
    normalUrl: string;
    smallThumbUrl: string;
  };
}

export interface ConversationResponse {
  matches: Conversations[];
}
