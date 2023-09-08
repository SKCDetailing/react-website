import React from 'react';
import './custom-css/footer.css'; // Create a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-text">
        ©SKC Detailing. All rights reserved.
      </div>
      <div className="social-icons">
        {/* Add your social media icons here */}
        {/* Example for Font Awesome icons */}
        <a href="https://www.instagram.com/skc_detailing/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/SKCDetailing" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://goo.gl/maps/VUwytmkyVLkhDJ3F6" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google"></i>
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
