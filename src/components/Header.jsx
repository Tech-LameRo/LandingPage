import React from 'react';
import './Header.css';
import logo from '../assets/DemaDoseLogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="DemaDose Logo" className="logo-icon" />
        </div>
        
        <nav className="nav">
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
        
        <div className="globe-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#EDA551" strokeWidth="2"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#EDA551" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

