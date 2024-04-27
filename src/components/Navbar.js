import React, { useState, useEffect } from 'react';
import '../Styles/App.css'  
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false); // State to toggle user info
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userData'));
  const guide = JSON.parse(localStorage.getItem('guideData'));
  const isLoggedIn = localStorage.getItem('loggedin');


  const handleLogout = () =>{
   localStorage.removeItem("loggedin")
   navigate("/login")
          
  }  
  const toggleUserInfo = () => {
    setShowUserInfo(prevState => !prevState);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="position-relative img-responsive"
        style={{
          backgroundImage: "url('/images/AgraFort.png')",
          backgroundSize: '100%',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100%',
          width: '100%',
          height: '100vh',
          overflow: 'hidden', // Ensure the overflow is hidden to avoid the scroll bar
        }}
      >
        {/* Text content */}
        <div
          className="position-fixed top-50 start-50 translate-middle p-1"
          style={{
            visibility: isNavbarFixed ? 'hidden' : 'visible', // Hide the text if navbar is fixed
            zIndex: 1000, // Ensure the text appears above the navbar
          }}
        >
          
            <h2 className=" ml-0" style={{ fontFamily: 'Alex Brush', fontSize: '5vw' }}>
              Unveiling India's Timeless
            </h2>
            <h1 className="text-white fw-bold ml-0" style={{ fontFamily: 'Poppins', fontSize: '8vw' }}>
              treasure.
            </h1>
        
        </div>

        {/* Navbar */}
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            isNavbarFixed ? 'bg-dark' : 'bg-transparent'
          } navbar-dark  fw-bold px-md-3`}
          style={{ zIndex: 100 }} // Ensure navbar is above text
        >
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
                    className="form-control form-control-sm text-white bg-light navbar-dark rounded-pill"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form> */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
             {/* Add the Toggle User Info button here */}
             <li className="nav-item">
                  <button className="nav-link" onClick={toggleUserInfo}>
                    Toggle User Info
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
       {/* Conditionally render user info */}
       {showUserInfo && isLoggedIn && (
          <div className="user-info position-fixed top-0 end-0 mt-5 me-5 bg-white p-3 rounded shadow" style={{zIndex:400}}>
            <p className="mb-0">Name: {user ? user.name : (guide ? guide.name : '')}</p>
            <p className="mb-0">Role: {user ? user.userRole : (guide ? 'Guide' : '')}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
