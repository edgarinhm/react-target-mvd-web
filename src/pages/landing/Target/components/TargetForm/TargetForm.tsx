import { Button, InputText, Dropdown } from 'components/common';
import { targetFormI18n } from 'constants/i18n-constant';
import { useTranslation } from 'hooks';
import { Target } from 'interfaces/target/target-interface';
import { useForm } from 'react-hook-form';
import topicOptions from 'data/topics.json';
import './target-form.scss';
import { capitalizeFirstLetter } from 'utils';

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
    control,
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
        <div className="input-lower-case">
          <InputText
            type="text"
            label={t(targetFormI18n.FORM_RADIUS)}
            placeholder={t(targetFormI18n.FORM_RADIUS_PLACEHOLDER)}
            error={errors.radius?.message}
            name="radius"
            required={true}
            {...register}
          />
        </div>
        <div className="input-none-case">
          <InputText
            type="text"
            label={t(targetFormI18n.FORM_TITLE)}
            placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TITLE_PLACEHOLDER))}
            error={errors.title?.message}
            name="title"
            {...register}
          />
        </div>
        <div className="input-none-case">
          <Dropdown
            options={topicOptions}
            placeholder={capitalizeFirstLetter(t(targetFormI18n.FORM_TOPIC_DEFAULT))}
            label={t(targetFormI18n.FORM_TOPIC)}
            error={errors.topic?.message}
            name="topic"
            control={control}
          />
        </div>
        <div className="submit">
          <Button type="submit" label={t(targetFormI18n.FORM_SUBMIT)} />
        </div>
      </form>
    </section>
  );
};

export default TargetForm;
