import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './custom-css/carousel.css';
//import { HomeCard } from './homecard.js';
//import Carousel1 from  '../images/Carousel1.jpg';
//import Carousel2 from  '../images/Carousel2.png';


function App() {
 const data = [
    {
      image: "https://media.discordapp.net/attachments/1150180225905344614/1150180464930340985/IMG_2797.jpg",
      caption: ""
    },
    {
      image: "https://media.discordapp.net/attachments/1150180225905344614/1150180465173598278/IMG_2817.jpg",
      caption: ""
    },
    {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180465433653350/IMG_2818.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180465668538511/IMG_2819.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180465903407226/IMG_2829.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180466176045117/IMG_2839.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180466436096131/IMG_2934.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180528570515558/IMG_2951.jpg",
        caption: ""
      },
      {
        image: "https://cdn.discordapp.com/attachments/1150180225905344614/1150180528838942760/IMG_2968.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180529111580682/IMG_2937.jpg",
        caption: ""
      },
      {
        image: "https://media.discordapp.net/attachments/1150180225905344614/1150180529442918450/IMG_2948.jpg",
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
  height="80vh"
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
