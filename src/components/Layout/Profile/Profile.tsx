import { Link } from 'react-router-dom';
import routes from 'constants/routes-paths-constant';
import profileMedia from 'assets/layout/media/profile.svg';
import testIds from 'constants/test-ids-constant';
import { useSession } from 'hooks';
import Avatar from '../Avatar';

const Profile = () => {
  const { user } = useSession();
  return (
    <>
      <Avatar icon={profileMedia} />
      <p id="profile-name">
        <strong>{user?.username}</strong>
      </p>
      <div className="profile-links">
        <Link
          data-test-id={testIds.PROFILE_LINK}
          to={routes.profile}
          className="link capital-case link-color"
        >
          edit
        </Link>
        <span> / </span>
        <Link data-test-id={testIds.LOGOUT_LINK} to={routes.login} className="link capital-case">
          logout
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Profile;
