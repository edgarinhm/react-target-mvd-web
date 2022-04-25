import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import useProfile from './useProfile';
import routes from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import { profileI18n } from 'constants/i18n-constant';
import profileMedia from 'assets/layout/media/profile.svg';

interface ProfileProps {
  isVisibleLink?: boolean;
}

const Profile = ({ isVisibleLink = true }: ProfileProps) => {
  const { handleLogout, handleProfileEdit, user, t } = useProfile();
  return (
    <>
      <Avatar icon={profileMedia} />
      <p id="profile-name">
        <strong>{user?.username}</strong>
      </p>
      {isVisibleLink && (
        <>
          <div className="profile-links">
            <Link
              onClick={handleProfileEdit}
              data-testid={testIds.PROFILE_LINK}
              to={routes.index}
              className="link capital-case link-color"
            >
              {t(profileI18n.LINK_EDIT)}
            </Link>
            <span> / </span>
            <Link
              onClick={handleLogout}
              data-testid={testIds.LOGOUT_LINK}
              to={routes.index}
              className="link capital-case"
            >
              {t(profileI18n.LINK_LOGOUT)}
            </Link>
          </div>
          <div className="line"></div>
        </>
      )}
    </>
  );
};

export default Profile;
