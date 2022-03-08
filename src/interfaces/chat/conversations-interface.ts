export default interface Conversations {
  matchId: number;
  topicIcon: string;
  lastMessage: string;
  unreadMessages: number;
  user: {
    id: number;
    fullName: string;
    avatar: {
      originalUrl: string;
      normalUrl: string;
      smallThumbUrl: string;
    };
  };
}
