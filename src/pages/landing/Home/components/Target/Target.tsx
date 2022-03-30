import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import { FormStatus } from 'components/common/FormStatus';
import { useTranslation, useDispatch } from 'hooks';
import { HomeContent, useHome } from 'pages/landing/Home/useHome';
import { createTarget } from 'state/actions/target-actions';
import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import routesPaths from 'constants/routes-paths-constant';
import targetIcon from 'assets/layout/media/target.svg';
import './target.scss';

const Target = () => {
  const t = useTranslation();
  const { handleMapClick } = useHome();
  const handleSubmit = useDispatch(createTarget);
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
        <FormStatus />
      </div>
      <TargetForm onSubmit={handleSubmit} />
    </>
  );
};

export default Target;
