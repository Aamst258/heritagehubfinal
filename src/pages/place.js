import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../data/placesData.json';
import NavbarAuth from '../components/NavbarAuth';
import Footer from '../components/Footer';

function Place() {
  const { id } = useParams();
  // Convert id to a number
  // const placeId = parseInt(id);
  const place = placesData.find(place => place.id === id);

  // Move useState outside of the conditional block
  const [activeTab, setActiveTab] = useState('virtual-image');

  if (!place) {
    return (
      <div>Place not found</div>
    );
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContentStyle = {
    paddingTop: '20px', // Adjust as needed
    paddingBottom: '20px' // Adjust as needed
  };

  return (
    <>
      <NavbarAuth />
      <div className="container-fluid">
        <div className="position-relative">
          <img src={place.image} alt={place.name} className="img-fluid w-100" style={{ marginBottom: '30px', height: '350px' }} />
          <h1 className="text-center position-absolute top-50 start-50 translate-middle text-white fw-bold" style={{ fontSize: '60px' }}>{place.name}</h1>
        </div>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'virtual-image' ? 'active' : ''}`} onClick={() => handleTabClick('virtual-image')}>Virtual Tour</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')}>Description</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'map-image' ? 'active' : ''}`} onClick={() => handleTabClick('map-image')}>map </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className={`tab-pane fade ${activeTab === 'virtual-image' ? 'show active' : ''}`} style={tabContentStyle}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={place.virtual360image}
                  title="Virtual 360 Image"
                  className="embed-responsive-item"
                  allowFullScreen
                  style={{ width: '100%', height: '70vh' }}
                ></iframe>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} style={tabContentStyle}>
              <p  className='text-justify'>{place.description}</p>
              <p className='fw-bold'>{place.city}, {place.state}</p>
            </div>
            <div className={`tab-pane fade ${activeTab === 'map-image' ? 'show active' : ''}`} style={tabContentStyle}>
              <div
                className="map-iframe"
                dangerouslySetInnerHTML={{ __html: place.mapimage }}
                style={{ width: '100%', height: '150px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Place;
