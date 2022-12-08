import { useAppSelector } from 'hooks';

const useChatList = () => {
  const { matches: conversations } = useAppSelector(state => state.chatReducer);

  return { conversations };
};

export default useChatList;
