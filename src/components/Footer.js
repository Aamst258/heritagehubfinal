import React from 'react'
import "../Styles/footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
       <footer>
        <div className="footer_content">
            <div className="footer_logo">
                <h1>Heritage Hub</h1>
            </div>
            <div className="footer_main">
                <div className="main_info">
                    <p><i className='bx bxs-location-plus'></i> RV Vidyanikethan Post, 8th Mile, Mysore Rd, Mailasandra, Bengaluru, Karnataka 560059</p>
                    <p><i className='bx bxs-phone'></i>9986818644</p>
                </div>
                <div className="soc_media">
                    <a href="https://www.facebook.com/"><i className='bx bxl-facebook-square'></i></a>
                    <a href="https://twitter.com/?lang=en"><i className='bx bxl-twitter' ></i></a>
                    <a href="https://www.linkedin.com/"><i className='bx bxl-linkedin' ></i></a>
                    <a href="https://www.youtube.com/"><i className='bx bxl-youtube' ></i></a>
                    <a href="https://www.instagram.com/"><i className='bx bxl-instagram'></i></a>
                    <a href="https://in.pinterest.com/"><i className='bx bxl-pinterest' ></i></a>

                </div>
            </div>
        </div>
        <div className="footer_tags">
            <div className="tags">
            <Link to="/footer">About</Link>
          <Link to="/footer">Contact Us</Link>
          <Link to="/footer">Help</Link>
          <Link to="/footer">Privacy Policy</Link>
          <Link to="/footer">Disclaimer</Link>
            </div>
            <div className="rights">
                <p>Copyright © 2024</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
