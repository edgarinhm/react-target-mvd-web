import './avatar.scss';
interface AvatarProp {
  icon: string;
}

const Avatar = ({ icon }: AvatarProp) => {
  return (
    <div className="avatar">
      <img src={icon} alt="profile avatar" />
    </div>
  );
};

export default Avatar;
