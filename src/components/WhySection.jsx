import React from 'react';
import './WhySection.css';

const WhySection = () => {
  const cards = [
    {
      id: 1,
      text: "Professional designs that make your brand stand out from competitors"
    },
    {
      id: 2,
      text: "Fast delivery with quality assurance and customer support included"
    },
    {
      id: 3,
      text: "Affordable pricing with flexible payment options for all businesses"
    },
    {
      id: 4,
      text: "Easy to use platform with intuitive interface and seamless experience"
    }
  ];

  return (
    <section id="why-section" className="why-section">
      <div className="why-container">
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={card.id} className={`info-card card-${index + 1}`}>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        
        <h2 className="why-title">Why DemaDose?</h2>
        
        <button className="btn btn-why">Buy now</button>
      </div>
    </section>
  );
};

export default WhySection;

