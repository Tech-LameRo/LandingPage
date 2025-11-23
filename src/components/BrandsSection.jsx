import React from 'react';
import './BrandsSection.css';
import underline from '../assets/underline.png';

const BrandsSection = () => {
  const brands = [
    { name: 'nibble', icon: '●' },
    { name: 'toss', icon: '▶' },
    { name: 'karnot', icon: '◆' },
    { name: 'wamchow', icon: '■' },
    { name: 'GROCER', icon: '+' }
  ];

  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-title-wrapper">
          <h2 className="brands-title">
            Different brands,<br />
            same solution
          </h2>
          <img src={underline} alt="Underline" className="brands-underline" />
        </div>
        
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <span className="brand-icon">{brand.icon}</span>
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

