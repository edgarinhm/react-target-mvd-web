import { HappySmile } from 'components/Layout/HappySmile';
import { Maps } from 'components/Layout/Map';
import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import { useTranslation } from 'hooks';
import targetIcon from 'assets/layout/media/target.svg';
import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import './target.scss';

const Target = () => {
  const t = useTranslation();
  const handleSubmit = () => {};

  return (
    <article className="two-column-layout-wrap" data-testid={testIds.TARGET_PAGE}>
      <section className="left">
        <div className="header header--back">
          <div className="header__item">
            <BackNavigation />
          </div>
          <h1 className="header__title letter-spacing">{t(targetI18n.PAGE_TITLE)}</h1>
        </div>
        <div className="target__content">
          <img src={targetIcon} alt="target icon" />
          <h3 className="letter-spacing">{t(targetI18n.PAGE_SUBTITLE)}</h3>
        </div>
        <TargetForm onSubmit={handleSubmit} />
        <div className="footer">
          <HappySmile styleClass="smiles-small" />
        </div>
      </section>
      <section className="right">
        <Maps />
      </section>
    </article>
  );
};

export default Target;
