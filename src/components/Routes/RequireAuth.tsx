import { Navigate, useLocation } from 'react-router-dom';
import { useSession } from 'hooks';
import routesPaths from 'constants/routes-paths-constant';
import { Routes } from 'interfaces/route/routes-interface';

interface RouteFromPathProps extends Routes {
  authenticated?: boolean;
  children: JSX.Element;
}

const RequireAuth = ({ ...props }: RouteFromPathProps) => {
  const { authenticated } = useSession();
  let location = useLocation();

  if (props.private) {
    if (!authenticated) {
      return (
        <Navigate to={routesPaths.notAutenticaded} state={{ path: location.pathname }} replace />
      );
    } else {
      return props.children;
    }
  } else {
    return props.children;
  }
};

export default RequireAuth;
