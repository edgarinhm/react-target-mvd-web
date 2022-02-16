import { Routes, Route } from 'react-router-dom';
import Login from 'pages/landing/login/Login';
import SignUp from 'pages/landing/signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
