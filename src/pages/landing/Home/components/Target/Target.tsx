import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import { FormStatus } from 'components/common/FormStatus';
import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import routesPaths from 'constants/routes-paths-constant';
import targetIcon from 'assets/layout/media/target.svg';
import { useTarget } from './useTarget';
import './target.scss';
import Header from 'components/Layout/Header';

const Target = () => {
  const { t, handleSubmit, handleBackMap } = useTarget();

  return (
    <>
      <Header variant="header--back" title={t(targetI18n.PAGE_TITLE)}>
        <BackNavigation to={routesPaths.index} onClick={handleBackMap} />
      </Header>
      <div data-testid={testIds.TARGET_PAGE}>
        <div className="target__content">
          <img src={targetIcon} alt="target icon" />
          <h3 className="letter-spacing">{t(targetI18n.PAGE_SUBTITLE)}</h3>
          <FormStatus />
        </div>
        <TargetForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Target;
