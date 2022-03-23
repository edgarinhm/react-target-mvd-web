import { HappySmile } from 'components/Layout/HappySmile';
import { Maps } from 'components/Layout/Map';
import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import { useAppDispatch, useTranslation } from 'hooks';
import targetIcon from 'assets/layout/media/target.svg';
import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import './target.scss';
import TargetService from 'services/target-service';
import Target from 'interfaces/target/target-interface';
import TargetFormData from 'interfaces/target/target-form-data-interface';
import { setMapLocation } from 'state/actions/place-actions';
import topics from 'data/topics.json';
import { FormStatus } from 'components/common';
import { setErrors } from 'state/actions/user-actions';
import { Topic } from 'interfaces/target/topic-interface';

const TargetPage = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const handleSubmit = (formData: TargetFormData) => {
    const topic: Topic = JSON.parse(formData.topic);
    const targetRequest: Target = {
      ...formData,
      topicId: topic.value!,
    };
    TargetService.createTarget(targetRequest)
      .then(response => {
        const topic = topics.find(opt => opt.id === response.topicId);
        dispatch(setMapLocation({ lat: response.lat, lng: response.lng, icon: topic?.icon }));
        dispatch(setErrors(`target succesfully created`));
      })
      .catch(error => {
        dispatch(setErrors(`target not created ${error.message}`));
      });
  };

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
          <FormStatus />
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

export default TargetPage;
