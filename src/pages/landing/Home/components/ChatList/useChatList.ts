import { useAppSelector } from 'hooks';

const useChatList = () => {
  const { matches } = useAppSelector(state => state.chatReducer);
  const conversations = Object.values(matches);
  return { conversations };
};

export default useChatList;
