import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Offers from './components/Offers';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Router path='/' element={<Home />} />
          <Router path='/profile' element={<Profile />} />
          <Router path='/sign-in' element={<SignIn />} />
          <Router path='/sign-up' element={<SignUp />} />
          <Router path='/forgot-password' element={<ForgotPassword />} />
          <Router path='/offers' element={<Offers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
