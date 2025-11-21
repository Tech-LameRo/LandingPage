import React from 'react';
import './Hero.css';
import buyNowBtn from '../assets/BuyNowBTN.png';
import whyBtn from '../assets/WhyDoINeedThisBTN.png';
import heroLogo from '../assets/HeroLogo.png';
import heroCursor from '../assets/HeroCursor.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">One <span className="click-wrapper">click<img src={heroCursor} alt="Cursor" className="hero-cursor" /></span> closer <img src={heroLogo} alt="Logo" className="hero-logo-inline" /> to</span>
          <span className="hero-title-line">loyal <span className="highlight-text">customers</span></span>
        </h1>
        <p className="hero-subtitle">
            Building apps that work has become affordable.
        </p>
        
        <div className="hero-buttons">
          <a href="#why-section">
            <img src={buyNowBtn} alt="Buy now" className="btn btn-primary-img" />
          </a>
          <img src={whyBtn} alt="Why do I need this" className="btn btn-secondary-img" />
        </div>
        
        <p className="hero-text">
            Brands with their own app grow loyalty by 39%
        </p>
      </div>
    </section>
  );
};

export default Hero;

