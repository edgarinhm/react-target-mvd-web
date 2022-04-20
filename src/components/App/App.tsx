import { Routes, Route } from 'react-router-dom';
import Login from 'pages/landing/Login';
import SignUp from 'pages/landing/Signup';
import Home from 'pages/landing/Home';
import { NotMatch } from 'components/Layout/NotMatch';
import RequireAuth from 'components/Routes/RequireAuth';
import routesPaths from 'constants/routes-paths-constant';
import About from 'pages/landing/Home/components/About/About';

function App() {
  return (
    <Routes>
      <Route path={routesPaths.signup} element={<SignUp />}></Route>
      <Route path={routesPaths.login} element={<Login />}></Route>
      <Route
        path={routesPaths.index}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path={routesPaths.about} element={<About />}></Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
