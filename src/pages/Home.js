import React from 'react'
import Navbar  from '../components/Navbar.js'
import '../Styles/App.css'
import HeritageSite from '../components/Heritagesite.js'
import Footer from '../components/Footer.js'
import placesData from '../data/placesData.json'


function Home() { 
    const places1To4 = placesData.filter(place => parseInt(place.id) <= 4);
  // Filter places 5 to 8
  const places5To8 = placesData.filter(place => parseInt(place.id) > 4 && parseInt(place.id) <= 8);
  
    const dot = {
  backgroundColor :'#C23138',
  width:'30px',
  height:'20px',
}
const dot1 = {
  backgroundColor :'#DD9529',
  width:'30px',
  height:'20px',
}
  return (
    <>
     <Navbar />  
    {/* text below bg image and navbar */}
     <div className="container text-center my-1 ">
        <p className= 'text-center p-0 m-0' style={{fontFamily:'Alex Brush',fontSize:'96px', color:'#DD9529'}}>top</p>
        <p className='fw-bold m-0 p-0' style={{fontFamily:'Poppins', fontSize:'80px',margin:'0'}}>heritage sites</p>
        <p className='rounded-pill text-center m-auto ' style={dot}></p>
        <p className='  p-0 m-0' style={{fontFamily:'Poppins', fontSize:'20px',margin:'0'}} >Heritage Hub is a comprehensive online platform designed to showcase the richness of Indian heritage, offering a curated collection of historical places, cultural insights, and immersive experiences.</p> 
   {/*   contianer holding heritage sites */}
   <div className="container text-center my-1">
        {/* <h2>Places 1 to 4</h2> */}
        <div className="row">
          {places1To4.map(place => (
            <div key={place.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <HeritageSite
                imageUrl={place.image}
                title={place.name}
                place={place.city}
                id={place.id}
              />
            </div>
          ))}
        </div>
      </div>
        </div>  
        {/* more destinations */}
        <div className="container text-center my-1 ">
        <p className= 'text-center p-0 m-0' style={{fontFamily:'Alex Brush',fontSize:'96px', color:'#DD9529'}}>more </p>
        <p className='fw-bold m-0 p-0' style={{fontFamily:'Poppins', fontSize:'80px',margin:'0'}}>destinations</p>
        <p className='rounded-pill text-center m-auto ' style={dot1}></p>
        <p className='  p-0 m-0' style={{fontFamily:'Poppins', fontSize:'20px',margin:'0'}} >Embark on a journey through India's captivating past and awe-inspiring architecture as we uncover hidden gems and iconic heritage sites</p> 
        <div className="container text-center my-1">
        {/* <h2>Places 5 to 8</h2> */}
        <div className="row">
          {places5To8.map(place => (
            <div key={place.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <HeritageSite
                imageUrl={place.image}
                title={place.name}
                place={place.city}
                id={place.id}
              />
            </div>
          ))}
        </div>
        </div>   
        </div>
        {/*  footer  */}
        <Footer />
    </>
  )
}

export default Home
