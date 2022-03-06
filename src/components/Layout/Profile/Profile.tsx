import { Link } from 'react-router-dom';
import routes from 'constants/routes-paths-constant';
import profileMedia from 'assets/layout/media/profile.svg';
import testIds from 'constants/test-ids-constant';
import { useDispatch, useSession } from 'hooks';
import { logout } from 'state/actions/user-actions';

const Profile = () => {
  const { user } = useSession();
  const handleLogout = useDispatch(logout);
  return (
    <>
      <img src={profileMedia} alt="profile avatar" />
      <p id="profile-name">
        <strong>{user?.username}</strong>
      </p>
      <div className="profile-links">
        <Link
          data-testid={testIds.PROFILE_LINK}
          to={routes.profile}
          className="link capital-case link-color"
        >
          edit
        </Link>
        <span> / </span>
        <Link
          onClick={handleLogout}
          data-testid={testIds.LOGOUT_LINK}
          to={routes.index}
          className="link capital-case"
        >
          logout
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Profile;
