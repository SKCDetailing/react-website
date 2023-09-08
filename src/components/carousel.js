import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './custom-css/carousel.css';
//import { HomeCard } from './homecard.js';
//import Carousel1 from  '../images/Carousel1.jpg';
//import Carousel2 from  '../images/Carousel2.png';


function App() {
 const data = [
    {
      image: "https://media.istockphoto.com/id/1415036627/photo/man-worker-of-car-detailing-studio-removing-scratches-on-car-varnish.webp?b=1&s=170667a&w=0&k=20&c=NrjjPK10RDALCLlkAUhKQWVS4SIzYMI23TuEB3bm3t8=",
      caption: ""
    },
    {
      image: "https://cdn.create.vista.com/api/media/small/237651284/stock-photo-auto-detailing-car-interior-carwash-service-worker-gloves-cleans-salon",
      caption: ""
    },
    {
        image: "https://media.istockphoto.com/id/826875544/photo/high-pressure-washing-car-outdoors.jpg?s=612x612&w=0&k=20&c=VWs9auj2wJpOEXSe4ZC5XVHFCOpOHIbkFHLnZY2-Q1M=",
        caption: ""
      },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="carousel-container">
    <div className="App">
      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="270px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              thumbnailBackground: "#363636"
              
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
