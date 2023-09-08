import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Homecard from './components/homecard';
import SKC from './components/skc';
import ContactCard from './components/contactcard';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div id='home' className='navbar-container'>
      <Navbar />

      </div>

      <div>
        <Homecard />

      </div>

      <div id='packages'><span className='section-title'>Packages</span>
        <SKC />

      </div>

      <div id='our-work' className=''><span className='section-title'>Our Work</span>
        <Carousel />

      </div>

      <div id='contact-us'><span className='section-title'>Contact Us</span>
        <ContactCard /></div>

      <div><Footer /></div>

    </div>
  );
}

export default App;
