import { useHome, HomeContent } from '../../useHome';
import { useAppDispatch, useAppSelector, useStatus, useTranslation } from 'hooks';
import { createTarget } from 'state/actions/target-actions';
import { FULFILLED } from 'constants/action-status-constant';
import Target from 'interfaces/target/target-interface';
import TopicService from 'services/topic-service';
import { Topic } from 'interfaces/target/topic-interface';

export const useTarget = () => {
  const t = useTranslation();
  const { handleMapClick } = useHome();
  const dispatch = useAppDispatch();
  const { status } = useStatus(createTarget);
  const { topics } = useAppSelector(state => state.topicReducer);
  const handleSubmit = (target: Target) => {
    const topic: Topic | undefined = TopicService.findTopicById(
      target.topicId,
      Object.values(topics)
    );
    target.topicIcon = topic!.icon;
    target.topicTitle = topic!.label;
    dispatch(createTarget(target));
  };

  const handleBackMap = () => {
    if (status !== FULFILLED) {
      handleMapClick(HomeContent.Empty);
    } else {
      handleMapClick(HomeContent.ViewChat);
    }
  };

  return {
    t,
    handleSubmit,
    handleBackMap,
  };
};
