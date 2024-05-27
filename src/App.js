// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import PhotoCard from './PhotoCard';

const App = () => {

  const backgroundImage = `${process.env.PUBLIC_URL}/images/main.jpg`;

  const images = [
    "https://picsum.photos/200/300",
    // "https://picsum.photos/200/300",
  ]


  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      sections.forEach((section, index) => {
        const speed = 0.1 * (index + 1);
        section.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    // Use requestAnimationFrame for smooth animation
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="App"
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <Header />
      <div className="container">
        {/* Section 1  */}
        <div className="section">
          <img  className="full-screen-image" src={`${process.env.PUBLIC_URL}/images/main.jpg`}/>
        </div>

        {/* Section 2  */}
        <div className="section s2">
        <img  className="half-screen-image" src={`${process.env.PUBLIC_URL}/images/main.jpg`}/>
       <div className='half-screen-text'>
       <p>
       Oswald Medium communicates strength with its bold weight and clean lines. With a title font that strong, balance your page out with Roboto Bold. The neo-grotesque sans serif typeface was developed by Google as the system font for its mobile operating system, Android, to be “modern and approachable.”
        </p>
       
       </div>
        
        
        </div>

        {/* Section 3  */}
        <div className="section bg3">

        </div>
      </div>
    </div>
  );
};

export default App;
