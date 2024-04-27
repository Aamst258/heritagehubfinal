import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import NavbarForOther from '../components/NavbarForOther';
import Footer from '../components/Footer';
// import NavbarAuth from '../components/NavbarAuth';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in local storage
    const userData = { ...formData, userRole: "visitor" };

    localStorage.setItem('userData', JSON.stringify(userData));
    // Redirect to login page using navigate
    navigate('/login');
  };

  return ( 
    <> 
      <NavbarForOther />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
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
                    <button type="submit" className="btn btn-primary">Signup</button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
