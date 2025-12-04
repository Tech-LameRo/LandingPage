import React from 'react';
import './BrandsSection.css';
import underline from '../assets/underline.png';
import burgerKing from '../assets/BurgerKing.png';
import mcdonalds from '../assets/McDonalds.png';
import papaJohns from '../assets/PapaJohns.png';
import fiveGuys from '../assets/FiveGuys.png';
import burgerizz from '../assets/Burgerizz.png';
import chickFilA from '../assets/Chick-fil-A.png';
import cTown from '../assets/CTown.png';
import zara from '../assets/Zara.png';
import shalati from '../assets/Shalati.png';
import costaCoffee from '../assets/CostaCoffee.png';

const BrandsSection = () => {
  const brands = [
    { name: 'Burger King', logo: burgerKing },
    { name: 'McDonalds', logo: mcdonalds },
    { name: 'Papa Johns', logo: papaJohns },
    { name: 'Five Guys', logo: fiveGuys },
    { name: 'Burgerizz', logo: burgerizz },
    { name: 'Chick-fil-A', logo: chickFilA },
    { name: 'CTown', logo: cTown },
    { name: 'Zara', logo: zara },
    { name: 'Shalati', logo: shalati },
    { name: 'Costa Coffee', logo: costaCoffee }
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
        
        <div className="brands-slider-wrapper">
          {/* First group */}
          <div className="brands-group">
            {brands.map((brand, index) => (
              <div key={`group1-${index}`} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
          {/* Duplicate group for seamless loop */}
          <div aria-hidden="true" className="brands-group">
            {brands.map((brand, index) => (
              <div key={`group2-${index}`} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

