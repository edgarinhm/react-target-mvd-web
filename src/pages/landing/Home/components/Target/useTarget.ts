import { FULFILLED } from 'constants/action-status-constant';
import { useAppDispatch, useStatus, useTranslation } from 'hooks';
import Target from 'interfaces/target/target-interface';
import { createTarget } from 'state/actions/target-actions';
import { useHome, HomeContent } from '../../useHome';

export const useTarget = () => {
  const t = useTranslation();
  const { handleMapClick } = useHome();
  const dispatch = useAppDispatch();
  const handleSubmit = (target: Target) => dispatch(createTarget(target));
  const { status } = useStatus(createTarget);

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
