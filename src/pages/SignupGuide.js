import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarForOther from '../components/NavbarForOther';
import Footer from '../components/Footer';
import placesData from '../data/placesData.json'; // Import the JSON file

const SignupGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    languagesKnown: [], // Change to array for multiple selections
    placesKnown: [],
  });

  const { name, email, password, languagesKnown, placesKnown } = formData;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
  
    if (type === 'checkbox') {
      // For checkbox (multiple selections)
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({ ...formData, [name]: formData[name].filter(item => item !== value) });
      }
    } else if (type === 'select-multiple') {
      // For multiple select dropdown
      const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      // For other input types
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in local storage
    const guideData = { ...formData, userRole: "Guide" };
    localStorage.setItem('guideData', JSON.stringify(guideData));
    // Redirect to login page using navigate
    navigate('/login-guide');
  };

  return ( 
    <> 
      <NavbarForOther />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Signup as Guide</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Name"
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
                  <div className="mb-3">
                    {/* Dropdown for selecting multiple languages */}
                    <select
                      name="languagesKnown"
                      value={languagesKnown}
                      onChange={handleChange}
                      className="form-control"
                      multiple
                    >
                      <option value="English">English</option>
                      <option value="Kannada">Kannada</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Malayalam">Malayalam</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Marathi">Marathi</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    {/* Checkbox for places known */}
                    {placesData.map(place => (
                      <div key={place.id}>
                        <input
                          type="checkbox"
                          id={place.id}
                          name="placesKnown"
                          value={place.id}
                          checked={placesKnown.includes(place.id)}
                          onChange={handleChange}
                        />
                        <label htmlFor={place.id}>{place.name}</label>
                      </div>
                    ))}
                  </div>
                  {/* Rest of the form */}
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

export default SignupGuide;
