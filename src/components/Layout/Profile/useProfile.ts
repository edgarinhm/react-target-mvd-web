import { useDispatch, useSession, useTranslation } from 'hooks';
import { HomeContent, useHome } from 'pages/landing/Home/useHome';
import { logout } from 'state/actions/user-actions';

const useProfile = () => {
  const { user } = useSession();
  const handleLogout = useDispatch(logout);
  const { handleMapClick } = useHome();
  const handleProfileEdit = () => handleMapClick(HomeContent.ProfileEditView);
  const t = useTranslation();
  return { user, handleLogout, handleProfileEdit, t };
};

export default useProfile;
