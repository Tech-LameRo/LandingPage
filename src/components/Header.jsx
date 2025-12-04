import React from 'react';
import './Header.css';
import logo from '../assets/LogoNoBG.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="DemaDose Logo" className="logo-icon" />
        </div>
        
        <nav className="nav">
          <a href="#pricing" className="nav-link">Pricing</a>
          <div className="nav-dropdown">
            <span className="nav-link">Solutions</span>
            <div className="dropdown-menu">
              <div className="dropdown-section dropdown-left">
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Payment Solution</h4>
                  <p className="dropdown-text">Accept and manage payments online easily.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">App Analytics</h4>
                  <p className="dropdown-text">Get reports with useful data and insights.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Mobile App</h4>
                  <p className="dropdown-text">Run your business anytime from your phone.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Business Health</h4>
                  <p className="dropdown-text">Get weekly business tips to help you grow.</p>
                </div>
              </div>
              <div className="dropdown-section dropdown-center">
                <div className="dropdown-item">
                  <h4 className="dropdown-title">App Publish</h4>
                  <p className="dropdown-text">Publish your app on Google Play and App Store with no extra charges.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Marketing Tools</h4>
                  <p className="dropdown-text">Promote your business and reach more customers.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">App templates</h4>
                  <p className="dropdown-text">Choose from 10+ website templates.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Loyal Customers</h4>
                  <p className="dropdown-text">Increase your customer loyalty and get more purchases by up to 39%</p>
                </div>
              </div>
              <div className="dropdown-section dropdown-right">
                <h3 className="dropdown-main-title">Who Is It For</h3>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">ECommerce</h4>
                  <p className="dropdown-text">For online stores that want to increase customer loyalty and encourage repeat purchases.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Food & Beverage</h4>
                  <p className="dropdown-text">For restaurants and cafés to manage orders and keep customers coming back.</p>
                </div>
                <div className="dropdown-item">
                  <h4 className="dropdown-title">Supermarkets</h4>
                  <p className="dropdown-text">For markets that want to go digital and make shopping easier.</p>
                </div>
              </div>
            </div>
          </div>
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

