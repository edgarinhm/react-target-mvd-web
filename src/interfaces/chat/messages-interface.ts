export interface Messages {
  id: number;
  content: string;
  date: string;
  user: User;
}

export interface User {
  id: number;
  avatar: Avatar;
}

export interface Avatar {
  url: string;
}
export interface MessagesResponse {
  messages: Messages[];
}
