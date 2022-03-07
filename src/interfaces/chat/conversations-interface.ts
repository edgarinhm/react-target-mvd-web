export default interface Conversations {
  match_id: number;
  topic_icon: string;
  last_message: string;
  unread_messages: number;
  user: {
    id: number;
    full_name: string;
    avatar: {
      original_url: string;
      normal_url: string;
      small_thumb_url: string;
    };
  };
}
