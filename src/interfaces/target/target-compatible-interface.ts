export interface MatchConversation {
  id: number;
  topicId: number;
}

export interface MatchedUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  gender: string;
  avatar: Avatar;
}

export interface Avatar {
  originalUrl: string;
  normalUrl: string;
  smallThumbUrl: string;
}
