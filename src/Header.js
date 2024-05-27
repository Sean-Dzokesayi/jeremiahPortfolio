// src/App.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <header className="App-header">
        <nav className="App-nav">
          <ul className="App-nav-list">
            <li className="App-nav-item"><a href="#home" className="App-nav-link">Home</a></li>
            <li className="App-nav-item"><a href="#about" className="App-nav-link">About</a></li>
            <li className="App-nav-item"><a href="#gallery" className="App-nav-link">Gallery</a></li>
            <li className="App-nav-item"><a href="#contact" className="App-nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
