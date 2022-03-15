import { Button, Dropdown, InputText } from 'components/common';
import { targetFormI18n } from 'constants/i18n-constant';
import { useTranslation } from 'hooks';
import { Target } from 'interfaces/target/target-interface';
import { useForm } from 'react-hook-form';
import topicOptions from 'data/topics.json';
import './target-form.scss';

export interface TargetFormProps {
  onSubmit: (values: Target) => void;
}

const TargetForm = ({ onSubmit }: TargetFormProps) => {
  const initialValues: Target = {
    icon: '',
    title: '',
    topic: '',
    radius: '',
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Target>({
    defaultValues: initialValues,
  });
  const t = useTranslation();

  return (
    <section className="section">
      <form
        data-testid="form"
        className="form form--text-left"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputText
          type="text"
          label={t(targetFormI18n.FORM_RADIUS)}
          placeholder=""
          error={errors.radius?.message}
          {...register('radius')}
        />
        <InputText
          type="text"
          label={t(targetFormI18n.FORM_TITLE)}
          placeholder={t(targetFormI18n.FORM_TITLE_PLACEHOLDER)}
          error={errors.title?.message}
          {...register('title')}
        />
        <Dropdown
          options={topicOptions}
          defaultOption={t(targetFormI18n.FORM_TOPIC_DEFAULT)}
          label={t(targetFormI18n.FORM_TOPIC)}
          error={errors.topic?.message}
          {...register('topic')}
        />
        <div className="submit">
          <Button type="submit" label={t(targetFormI18n.FORM_SUBMIT)} />
        </div>
      </form>
    </section>
  );
};

export default TargetForm;
