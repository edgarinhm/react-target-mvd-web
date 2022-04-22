import { Button } from 'components/common';
import { HomeContent } from 'pages/landing/Home/useHome';
import useSideBar from './useSideBar';
import aboutIcon from 'assets/layout/icons/about-icon.svg';
import homeIcon from 'assets/layout/icons/home-icon.svg';
import phoneIcon from 'assets/layout/icons/phone-icon.svg';
import styles from './sidebar.module.scss';

const SideBar = () => {
  const { handleSection, activeSidebar, handleOnClick, handleContactModal } = useSideBar();

  return (
    <div className={activeSidebar ? styles['sidebar__active'] : styles.sidebar}>
      <div className={styles.sidebar__link}>
        <Button
          label="Home"
          icon={homeIcon}
          className="button-icon"
          onClick={() => {
            handleSection(HomeContent.Empty);
          }}
        />
      </div>
      <div className={styles.sidebar__link}>
        <Button
          label="About"
          icon={aboutIcon}
          className="button-icon"
          onClick={() => {
            handleSection(HomeContent.AboutView);
          }}
        />
      </div>
      <div className={styles.sidebar__link}>
        <Button
          label="Contact"
          icon={phoneIcon}
          className="button-icon"
          onClick={handleContactModal}
        />
      </div>
    </div>
  );
};

export default SideBar;
