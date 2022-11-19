import Header from 'components/Layout/Header';
import useForgotPassword from './useForgotPassword';
import { forgotPasswordI18n } from 'constants/i18n-constant';
import { FormStatus } from 'components/common';
import { Link } from 'react-router-dom';
import routesPaths from 'constants/routes-paths-constant';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';

const ForgotPassword = () => {
  const { handleSubmit, t } = useForgotPassword();
  return (
    <>
      <Header title={t(forgotPasswordI18n.PAGE_TITLE)} />
      <FormStatus />
      <ForgotPasswordForm onSubmit={handleSubmit} />
      <Link data-testid="signup-form-link" to={routesPaths.index} className="link">
        {t(forgotPasswordI18n.LINK_LOGIN)}
      </Link>
    </>
  );
};

export default ForgotPassword;
