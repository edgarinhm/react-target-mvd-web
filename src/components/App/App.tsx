import { Routes, Route } from 'react-router-dom';
import Home from 'pages/landing/home/Home';
import SignUp from 'pages/landing/signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
