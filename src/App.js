
import './Styles/App.css';
import Home from '../src/pages/Home.js';
// import Navbar from './Components/Navbar';
import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Places from './pages/places.js';
import Place from  './pages/place.js'
import Signup  from './pages/Signup.js';
import Login from './pages/Login.js';
import ProtectedRoutes from './Services/ProtectedRoutes.js';
import SignupGuide from './pages/SignupGuide.js'; 
import LoginGuide from './pages/LoginGuide.js';

 

function App() {
 
  return (
    <Router> 

    <Routes>
    
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login  />} />  
    <Route path="/signup-guide" element={<SignupGuide />} />
    <Route path="/login-guide" element={<LoginGuide />} /> 
    <Route path='/'  element={<ProtectedRoutes />}> 
    <Route exact path="/" element={<Home />} />
    < Route exact path="/places" element={<Places />} />
    <Route exact path="/places/:id" element={<Place />} />
     
    </Route>
   


    </Routes> 

  </Router>
  );
}

export default App;
