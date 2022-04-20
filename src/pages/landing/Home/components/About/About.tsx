import Header from 'components/Layout/Header';
import { aboutI18n } from 'constants/i18n-constant';
import useAbout from './useAbout';
import style from './about.module.scss';

const About = () => {
  const { t, handleClose } = useAbout();
  return (
    <>
      <Header
        variant="header--back"
        title={t(aboutI18n.PAGE_TITLE)}
        canClose={true}
        closeTo={handleClose}
      />
      <div className={style.left__body}>
        <p>{t(aboutI18n.PAGE_SUBTITLE)}</p>
      </div>
    </>
  );
};

export default About;
