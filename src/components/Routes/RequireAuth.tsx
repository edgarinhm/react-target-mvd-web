import { Navigate, useLocation } from 'react-router-dom';
import { useSession } from 'hooks';
import routesPaths from 'constants/routes-paths-constant';

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { authenticated } = useSession();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to={routesPaths.login} state={{ path: location.pathname }} replace />;
  }

  return children;
};

export default RequireAuth;
