import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, accessToken, user } }: RootState) => ({
      authenticated,
      accessToken,
      user,
    }),
    shallowEqual
  );

export default useSession;
