import { useSession, useTranslation, useDispatch } from 'hooks';
import { signUp } from 'state/actions/user-actions';

const useForgotPassword = () => {
  const handleSubmit = useDispatch(signUp);
  const { authenticated } = useSession();
  const t = useTranslation();

  return { handleSubmit, authenticated, t };
};

export default useForgotPassword;
