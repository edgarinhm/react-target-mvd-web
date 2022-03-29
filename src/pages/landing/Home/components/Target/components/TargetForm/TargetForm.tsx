import { Button, InputText, Dropdown } from 'components/common';
import { targetFormI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter } from 'utils';
import TargetFormData from 'interfaces/target/target-form-data-interface';
import { useTargetForm } from './useTargetForm';
import './target-form.scss';

export interface TargetFormProps {
  onSubmit: (values: TargetFormData) => void;
}

const TargetForm = ({ onSubmit }: TargetFormProps) => {
  const { handleSubmit, register, control, errors, t, topicOptions, disabled } = useTargetForm();

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
            error={errors.topic?.message}
            control={control}
            name="topic"
          />
        </div>
        <input {...register('lat')} type="hidden" name="lat" />
        <input {...register('lng')} type="hidden" name="lng" />
        <div className="submit">
          <Button type="submit" label={t(targetFormI18n.FORM_SUBMIT)} disabled={disabled()} />
        </div>
      </form>
    </>
  );
};

export default TargetForm;
