import { Routes, Route } from 'react-router-dom';
import Login from 'pages/landing/Login/Login';
import SignUp from 'pages/landing/Signup/Signup';
import Home from 'pages/landing/Home/Home';
import { NotMatch } from 'components/Layout/NotMatch';
import RequireAuth from 'components/Routes/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
