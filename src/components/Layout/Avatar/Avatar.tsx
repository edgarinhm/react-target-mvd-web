import styles from './avatar.module.scss';
interface AvatarProp {
  icon: string;
}

const Avatar = ({ icon }: AvatarProp) => {
  return (
    <div className={styles.avatar}>
      <img src={icon} alt="profile avatar" />
    </div>
  );
};

export default Avatar;
