import { login } from 'state/actions/user-actions';
import { useDispatch, useSession, useTranslation } from 'hooks';

const useLogin = () => {
  const handleSubmit = useDispatch(login);
  const { authenticated } = useSession();
  const t = useTranslation();

  return { handleSubmit, authenticated, t };
};

export default useLogin;
