import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, useTranslation } from 'hooks';
import ChatService from 'services/chat-service';
import { setHomeContent } from 'state/actions/home-actions';
import { HomeContent } from '../../useHome';
import { setErrors } from 'state/actions/user-actions';
import { Messages } from 'interfaces/chat/messages-interface';

function useChatMessages() {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const handleBack = () => {
    dispatch(setHomeContent(HomeContent.ChatView));
  };

  const { currentChatId, matches } = useAppSelector(state => state.chatReducer);
  const conversation = matches.filter(match => match.matchId === currentChatId);

  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await ChatService.findAllChatMessages(currentChatId);
        setMessages(response);
      } catch (error) {
        dispatch(setErrors(JSON.stringify(error)));
      }
    };
    loadData();
  }, [currentChatId, dispatch]);

  const formatAMPM = (date: string) => {
    let dd = date.split('/')[0].padStart(2, '0');
    let mm = date.split('/')[1].padStart(2, '0');
    let yyyy = date.split('/')[2].split(' ')[0];
    let hh = date.split('/')[2].split(' ')[1].split(':')[0].padStart(2, '0');
    let mi = date.split('/')[2].split(' ')[1].split(':')[1].padStart(2, '0');

    mm = (parseInt(mm) - 1).toString(); // January is 0
    const normalizedDate = yyyy + '/' + mm + '/' + dd + ' ' + hh + ':' + mi;

    const newDate = new Date(normalizedDate);

    let hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesString = minutes.toString().padStart(2, '0');
    const strTime = hours + ':' + minutesString + ' ' + ampm;
    return strTime;
  };

  return { t, handleBack, conversation, messages, formatAMPM };
}

export default useChatMessages;
