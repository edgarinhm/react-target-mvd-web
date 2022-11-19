import { Link } from 'react-router-dom';
import Header from 'components/Layout/Header';
import { FormStatus, InputText, SubmitButton } from 'components/common';
import useForgotPassword from './useForgotPassword';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';

const ForgotPassword = () => {
  const { register, errors, t, handleSubmit, onSubmit, disabled, forgotPasswordI18n } =
    useForgotPassword();
  return (
    <>
      <Header title={t(forgotPasswordI18n.PAGE_TITLE)} />
      <FormStatus />
      <section>
        <form
          data-testid={testIds.FORM}
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <InputText
            {...register('email')}
            type="email"
            label={t(forgotPasswordI18n.FORM_EMAIL)}
            placeholder={t(forgotPasswordI18n.FORM_EMAIL_PLACEHOLDER)}
            error={errors.email?.message}
            required
            name="email"
          />
          <SubmitButton label={t(forgotPasswordI18n.FORM_SUBMIT)} disabled={disabled} />
          <div className="line"></div>
          <Link data-testid="signup-form-link" to={routesPaths.index} className="link">
            {t(forgotPasswordI18n.LINK_LOGIN)}
          </Link>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;
