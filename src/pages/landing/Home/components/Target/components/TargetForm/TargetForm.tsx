import { Button, InputText, Dropdown } from 'components/common';
import { targetFormI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter } from 'utils';
import Target from 'interfaces/target/target-interface';
import { useTargetForm } from './useTargetForm';
import styles from './target-form.module.scss';

export interface TargetFormProps {
  onSubmit: (values: Target) => void;
}

const TargetForm = ({ onSubmit }: TargetFormProps) => {
  const { handleSubmit, register, control, errors, t, topicOptions, disabled } = useTargetForm();

  return (
    <>
      <form data-testid="form" className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          {...register('radius')}
          className={styles.form__label}
          type="number"
          label={t(targetFormI18n.FORM_RADIUS)}
          placeholder={t(targetFormI18n.FORM_RADIUS_PLACEHOLDER)}
          error={errors.radius?.message}
          required
          name="radius"
        />
        <InputText
          {...register('title')}
          className={`${styles.form__label} ${styles.form__input_left}`}
          type="text"
          label={t(targetFormI18n.FORM_TITLE)}
          placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TITLE_PLACEHOLDER))}
          error={errors.title?.message}
          name="title"
        />
        <Dropdown
          className={styles.form__label}
          options={topicOptions}
          placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TOPIC_DEFAULT))}
          label={t(targetFormI18n.FORM_TOPIC)}
          error={errors.topicId?.message}
          control={control}
          name="topicId"
        />
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
