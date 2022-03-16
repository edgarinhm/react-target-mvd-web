import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers/root-reducer';

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
