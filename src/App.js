import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import Navbar from './components/Navbar.js';




const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" component={Signup} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </Router>
  );
};


export default App;