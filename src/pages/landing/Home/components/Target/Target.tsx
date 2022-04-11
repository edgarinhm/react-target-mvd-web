import { targetI18n } from 'constants/i18n-constant';
import testIds from 'constants/test-ids-constant';
import { useAppDispatch, useTranslation } from 'hooks';
import targetIcon from 'assets/layout/media/target.svg';
import TargetForm from './components';
import BackNavigation from 'components/Layout/BackNavigation';
import './target.scss';
import routesPaths from 'constants/routes-paths-constant';
import { HomeContent, useHome } from 'pages/landing/Home/useHome';
import TargetFormData from 'interfaces/target/target-form-data-interface';
import TargetService from 'services/target-service';
import topics from 'data/topics.json';
import { setMapLocation } from 'state/actions/place-actions';
import { setErrors } from 'state/actions/user-actions';
import { FormStatus } from 'components/common/FormStatus';

const Target = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const { handleMapClick } = useHome();
  const handleSubmit = (formData: TargetFormData) => {
    const targetRequest = {
      ...formData,
      topicId: formData.topic,
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
