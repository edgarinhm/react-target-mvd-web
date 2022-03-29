import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import { useTranslation } from 'hooks';
import targetIcon from 'assets/layout/media/target.svg';
import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import './target.scss';
import routesPaths from 'constants/routes-paths-constant';
import { HomeContent, useHome } from 'pages/landing/Home/useHome';

const Target = () => {
  const t = useTranslation();
  const { handleMapClick } = useHome();
  const handleSubmit = () => {};
  const handleBackMap = () => {
    handleMapClick(HomeContent.Empty);
  };

  return (
    <>
      <div className="header header--back" data-testid={testIds.TARGET_PAGE}>
        <div className="header__item">
          <BackNavigation to={routesPaths.index} onClick={handleBackMap} />
        </div>
        <h1 className="header__title letter-spacing">{t(targetI18n.PAGE_TITLE)}</h1>
      </div>
      <div className="target__content">
        <img src={targetIcon} alt="target icon" />
        <h3 className="letter-spacing">{t(targetI18n.PAGE_SUBTITLE)}</h3>
      </div>
      <TargetForm onSubmit={handleSubmit} />
    </>
  );
};

export default Target;
