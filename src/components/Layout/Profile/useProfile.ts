import { useAppDispatch, useDispatch, useSession, useTranslation } from 'hooks';
import { HomeContent } from 'pages/landing/Home/useHome';
import { setHomeContent } from 'state/actions/home-actions';
import { logout } from 'state/actions/user-actions';

const useProfile = () => {
  const { user } = useSession();
  const handleLogout = useDispatch(logout);
  const dispatch = useAppDispatch();
  const handleProfileEdit = () => dispatch(setHomeContent(HomeContent.ProfileEditView));
  const t = useTranslation();
  return { user, handleLogout, handleProfileEdit, t };
};

export default useProfile;
