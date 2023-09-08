import React, { useState, useEffect } from 'react';
import './custom-css/navbar.css'; 
import logo from '../images/logo.png'; 
import { Link } from "react-scroll";

const Navbar = () => {

  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    // Add an event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the mobile menu is open (clicked is true)
    if (clicked) {
      // Close the mobile menu by setting clicked to false
      setClicked(true);
    }
  };

  return (
    
    <nav className="navbar">
      <div className="logo" href="home">
        <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto'}} />
        <div className='logo-text'>SKC Detailing</div>
      </div>
     

      <ul id="nav-links" className={clicked ? "active" : ""}>
        <li><Link to='home' className="nav-link">Home</Link></li>
        <li><Link to='packages' className="nav-link" smooth={true} duration={500}>Packages</Link></li>
        <li><Link to='our-work' className="nav-link" smooth={true} duration={500}>Our Work</Link></li>
        <li><Link to='contact-us' className="nav-link" smooth={true} duration={500}>Contact Us</Link></li>
        <li><Link to='packages' className="nav-link" smooth={true} duration={500}><span className='book-now-button'>Book Now</span></Link></li> 
      </ul>

      <div id="mobile">
        <i id="bar" className={clicked ? "fas fa-bars" : "fas fa-times"} onClick={() => setClicked(!clicked)}></i>
       
    
      </div>

    </nav>
  );
};

export default Navbar;
