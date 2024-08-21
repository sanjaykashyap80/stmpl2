import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <h1>Weather App</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#forecast">Forecast</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
