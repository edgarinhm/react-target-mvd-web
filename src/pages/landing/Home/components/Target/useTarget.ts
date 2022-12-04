import { useContext } from 'react';
import { useHome, HomeContent } from '../../useHome';
import { useAppDispatch, useAppSelector, useStatus, useTranslation } from 'hooks';
import { createTarget, createTargetSuccess } from 'state/actions/target-actions';
import { FULFILLED } from 'constants/action-status-constant';
import Target from 'interfaces/target/target-interface';
import TopicService from 'services/topic-service';
import { Topic } from 'interfaces/target/topic-interface';
import TargetService from 'services/target-service';
import { addLocationToCollection, setMapLocation } from 'state/actions/place-actions';
import { setErrors } from 'state/actions/user-actions';
import { ModalContext } from 'context/ModalContext';

export const useTarget = () => {
  const t = useTranslation();
  const { handleMapClick } = useHome();
  const dispatch = useAppDispatch();
  const { status } = useStatus(createTarget);
  const { topics } = useAppSelector(state => state.topicReducer);
  const { targets } = useAppSelector(state => state.targetReducer);
  const { setCompatibleTargetModalIsOpen } = useContext(ModalContext);

  const handleSubmit = async (target: Target) => {
    const topic: Topic | undefined = TopicService.findTopicById(
      target.topicId,
      Object.values(topics)
    );
    target = { ...target, topicIcon: topic!.icon, topicTitle: topic!.label };
    try {
      const {
        target: createdTarget,
        matchConversation,
        matchedUser,
      } = await TargetService.createTarget(target);
      const targetsArray = Object.values(targets);
      const matchedUserArray = matchedUser ? [matchedUser] : [];

      dispatch(
        createTargetSuccess({
          targets: [...targetsArray, { target: createdTarget }],
          matchConversation,
          matchedUser: matchedUserArray,
        })
      );
      dispatch(
        setMapLocation({
          id: 0,
          lng: 0,
          lat: 0,
          icon: '',
        })
      );
      dispatch(
        addLocationToCollection({
          id: createdTarget.id,
          name: createdTarget.title,
          icon: target.topicIcon,
          location: {
            lat: createdTarget.lat,
            lng: createdTarget.lng,
          },
          topic: target.topicTitle,
        })
      );
      if (matchedUserArray && matchedUserArray.length) {
        setCompatibleTargetModalIsOpen(true);
      }
    } catch (error) {
      dispatch(setErrors(error as string));
    }
  };

  const handleBackMap = () => {
    if (status !== FULFILLED) {
      handleMapClick(HomeContent.Empty);
    } else {
      handleMapClick(HomeContent.ChatView);
    }
  };

  return {
    t,
    handleSubmit,
    handleBackMap,
  };
};
