import { Button, InputText, Dropdown } from 'components/common';
import { targetFormI18n } from 'constants/i18n-constant';
import { useAppSelector, useTranslation } from 'hooks';
import { useForm } from 'react-hook-form';
import topics from 'data/topics.json';
import './target-form.scss';
import { capitalizeFirstLetter } from 'utils';
import TargetFormData from 'interfaces/target/target-form-data-interface';
import { useEffect } from 'react';

export interface TargetFormProps {
  onSubmit: (values: TargetFormData) => void;
}

const TargetForm = ({ onSubmit }: TargetFormProps) => {
  const { lat, lng } = useAppSelector(state => state.placeReducer);

  const initialValues: TargetFormData = {
    title: '',
    topic: { id: 0, label: '', icon: '' },
    lat,
    lng,
    radius: 200,
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<TargetFormData>({
    defaultValues: initialValues,
  });

  const t = useTranslation();

  const topicOptions = topics.map(topic => ({
    value: topic.id,
    text: topic.label,
    icon: topic.icon,
  }));

  useEffect(() => {
    setValue('lat', lat);
    setValue('lng', lng);
  }, [lat, lng, setValue]);

  return (
    <>
      <form
        data-testid="form"
        className="form form--text-left"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="input-lower-case">
          <InputText
            {...register('radius')}
            type="number"
            label={t(targetFormI18n.FORM_RADIUS)}
            placeholder={t(targetFormI18n.FORM_RADIUS_PLACEHOLDER)}
            error={errors.radius?.message}
            required={true}
            name="radius"
          />
        </div>
        <div className="input-none-case">
          <InputText
            {...register('title')}
            type="text"
            label={t(targetFormI18n.FORM_TITLE)}
            placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TITLE_PLACEHOLDER))}
            error={errors.title?.message}
            name="title"
          />
        </div>
        <div className="input-none-case">
          <Dropdown
            options={topicOptions}
            placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TOPIC_DEFAULT))}
            label={t(targetFormI18n.FORM_TOPIC)}
            error={errors.topic?.id?.message}
            name="topic"
            control={control}
          />
        </div>
        <input {...register('lat')} type="hidden" name="lat" />
        <input {...register('lng')} type="hidden" name="lng" />
        <div className="submit">
          <Button type="submit" label={t(targetFormI18n.FORM_SUBMIT)} />
        </div>
      </form>
    </>
  );
};

export default TargetForm;
