import { useTranslation, useDispatch } from 'hooks';
import { signUp } from 'state/actions/user-actions';

const useForgotPassword = () => {
  const handleSubmit = useDispatch(signUp);
  const t = useTranslation();

  return { handleSubmit, t };
};

export default useForgotPassword;
