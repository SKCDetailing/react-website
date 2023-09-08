import React from 'react';
import './custom-css/homecard.css';
import { Link } from "react-scroll";

const HomeCard = () => {
  const cardStyle = {
    backgroundImage: 'url("https://cdn.create.vista.com/api/media/small/237651284/stock-photo-auto-detailing-car-interior-carwash-service-worker-gloves-cleans-salon")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
  <div className='card-container' style={cardStyle} >
    <div className="home-card">
      <div className="card-content">
        <h1>Mobile Detailing For Busy Professionals</h1>
        <p>Using premium products, we get your vehicle as close to day one as possible.</p>

        <div className='button-container'>
        <Link to='packages' smooth={true} duration={500}><button className='booknow-button'>Book Now</button></Link> 
        <Link to='our-work' smooth={true} duration={500}><button className='our-work-button'>Our Work</button></Link></div>

      </div>
    </div>
  </div>
  );
};

export default HomeCard;
