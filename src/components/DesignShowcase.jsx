import React from 'react';
import './DesignShowcase.css';
import home from '../assets/templates/Home.png';
import home1 from '../assets/templates/Home (1).png';
import menu1 from '../assets/templates/Menu 1.png';
import menu4 from '../assets/templates/Menu 4.png';
import welcome from '../assets/templates/Welcome.png';
import welcome1 from '../assets/templates/Welcome (1).png';
import welcome2 from '../assets/templates/Welcome (2).png';
import welcome3 from '../assets/templates/Welcome (3).png';
import welcome4 from '../assets/templates/Welcome (4).png';
import welcome5 from '../assets/templates/Welcome (5).png';
import iphone1 from '../assets/templates/iPhone 16 Pro Max - 1.png';
import iphone5 from '../assets/templates/iPhone 16 Pro Max - 5.png';

const DesignShowcase = () => {
  const baseTemplates = [
    { name: 'Home', logo: home },
    { name: 'Home 1', logo: home1 },
    { name: 'Menu 1', logo: menu1 },
    { name: 'Menu 4', logo: menu4 },
    { name: 'Welcome', logo: welcome },
    { name: 'Welcome 1', logo: welcome1 },
    { name: 'Welcome 2', logo: welcome2 },
    { name: 'Welcome 3', logo: welcome3 },
    { name: 'Welcome 4', logo: welcome4 },
    { name: 'Welcome 5', logo: welcome5 },
    { name: 'iPhone 1', logo: iphone1 },
    { name: 'iPhone 5', logo: iphone5 }
  ];

  // Function to shuffle array
  const shuffleArray = (array, seed) => {
    const shuffled = [...array];
    let currentIndex = shuffled.length;
    let randomValue = seed;
    
    // Simple seeded random function
    const seededRandom = () => {
      randomValue = (randomValue * 9301 + 49297) % 233280;
      return randomValue / 233280;
    };
    
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(seededRandom() * currentIndex);
      currentIndex--;
      [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }
    return shuffled;
  };

  // Create different shuffled arrays for each slider
  const sliderTemplates = [
    shuffleArray(baseTemplates, 12345),
    shuffleArray(baseTemplates, 67890),
    shuffleArray(baseTemplates, 24680),
    shuffleArray(baseTemplates, 13579),
    shuffleArray(baseTemplates, 98765)
  ];

  return (
    <section className="design-section">
      <div className="design-container">
        <h2 className="design-title">
          Design that makes you<br />
          stand out
        </h2>
        
        <div className="carousels-container">
          {[0, 1, 2, 3, 4].map((carouselIndex) => (
            <div key={carouselIndex} className={`templates-slider-wrapper ${carouselIndex === 1 || carouselIndex === 3 ? 'slider-down' : 'slider-up'}`}>
              {/* First group */}
              <div className="templates-group">
                {sliderTemplates[carouselIndex].map((template, index) => (
                  <div key={`c${carouselIndex}-group1-${index}`} className="template-item">
                    <img src={template.logo} alt={template.name} className="template-logo" />
                  </div>
                ))}
              </div>
              {/* Duplicate group for seamless loop */}
              <div aria-hidden="true" className="templates-group">
                {sliderTemplates[carouselIndex].map((template, index) => (
                  <div key={`c${carouselIndex}-group2-${index}`} className="template-item">
                    <img src={template.logo} alt={template.name} className="template-logo" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;

