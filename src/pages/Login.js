import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
// import NavbarForOthers from '../components/NavbarForOthers';
import NavbarForOther from '../components/NavbarForOther';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
  
    // Check if user data exists and contains the required properties
    if (userData && userData.email && userData.password) {
      console.log('Stored user data:', userData);
      console.log('Entered email:', formData.email);
      console.log('Entered password:', formData.password);
  
      // Check if credentials match
      if (formData.email === userData.email && formData.password === userData.password) {
        // Redirect to dashboard or home page
        localStorage.setItem('loggedin', true);
        navigate('/');
      } else {
        // Handle invalid credentials
        alert('Invalid email or password');
      }
    } else {
      // Handle case where user data is not found or invalid
      alert('User not registered ');
    }
  };
  

  return (  
    <>  
      <NavbarForOther />
      <div className="container mt-5  mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <Footer />
    </>
  );
};

export default Login;
