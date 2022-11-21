import { Routes, Route, Outlet } from 'react-router-dom';
import { NotMatch } from 'components/Layout/NotMatch';
import RequireAuth from 'components/Routes/RequireAuth';
import routes from 'routes/routes';
import { useAppSelector } from 'hooks';

function App() {
  const isAuthenticated = useAppSelector(state => state.session.authenticated);
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {routes.map(route => (
          <Route
            path={route.path}
            element={
              <RequireAuth key={`route-${route.path}`} authenticated={isAuthenticated} {...route}>
                {route.Component}
              </RequireAuth>
            }
            key={`route-${route.path}`}
          />
        ))}
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
