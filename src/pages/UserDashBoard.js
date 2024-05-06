import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import NavbarAuth from '../components/NavbarAuth';
import placesData from '../data/placesData.json';

function UserDashBoard() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    bookedPlaces: [],
    bookedGuides: []
  });

  useEffect(() => {
    // Fetch user details from local storage based on the loggedInUserId
    const userId = localStorage.getItem('loggedinUserId') || '';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const storedUserData = users.find(user => user.id === userId) || {};
    setUserData(prevUserData => ({
      ...prevUserData,
      ...storedUserData
    }));
  }, []);

  useEffect(() => {
    // Fetch booking details from local storage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const userBookings = bookings.filter(booking => booking.user === userData.id);
    const bookedPlaces = userBookings.map(booking => booking.place);
    const bookedGuides = userBookings.map(booking => booking.guide);

    setUserData(prevUserData => ({
      ...prevUserData,
      bookedPlaces,
      bookedGuides
    }));
  }, [userData.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user details in local storage
    localStorage.setItem('users', JSON.stringify([userData]));
    alert('User details updated successfully!');
  };

  return (
    <>
      <NavbarAuth />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Welcome, {userData.name}</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Update Details</button>
            </form>
            <div className="mt-5">
              <h2>Booked Places</h2>
              <ul>
              {userData.bookedPlaces.map((placeId, index) => (
  <li key={index}>
    <strong>{placesData.find(place => place.id === placeId)?.name}</strong> - Guide: {
      userData.bookedGuides[index] ? JSON.parse(localStorage.getItem('guides'))?.find(guide => guide.id === userData.bookedGuides[index])?.name : 'undefined'
    }
  </li>
))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserDashBoard;
