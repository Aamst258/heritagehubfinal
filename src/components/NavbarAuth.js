// NavbarForOther.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavbarAuth = () => {  
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));
  const handleLogout = () =>{
   localStorage.removeItem("loggedin")
   navigate("/login")
          
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{ zIndex: 100 }}>
      <div className="container">
        <span className="navbar-brand" style={{ fontFamily: 'Alex Brush', fontSize: '32px' }}>
          Heritage hub
        </span>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <form className="d-flex ms-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm text-black bg-light navbar-dark rounded-pill"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1" 
              />
            </div>
          </form> */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Book a Tour
              </a>
            </li>
            <li className="nav-item">
              
                <Link to="/places" className="nav-link active">Destinations</Link>
              
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Forums
              </a>
            </li>
            <li className="nav-item">
            <button type="submit" className='nav-link active' onClick={handleLogout}>Logout</button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
