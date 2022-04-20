import { useAppDispatch, useTranslation } from 'hooks';
import { HomeContent } from '../../useHome';
import { setHomeContent } from 'state/actions/home-actions';

const useAbout = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setHomeContent(HomeContent.Empty));
  return { t, handleClose };
};

export default useAbout;
