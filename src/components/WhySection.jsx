import React, { useState, useRef } from 'react';
import './WhySection.css';
import waitingListBtn from '../assets/WaitingListBTN.png';
import buyArrow from '../assets/BuyArrow.png';
import circle from '../assets/Circle.png';

const WhySection = () => {
  const [cardPositions, setCardPositions] = useState({
    1: { x: 0, y: 0, rotation: -8 },
    2: { x: 0, y: 0, rotation: 8 },
    3: { x: 0, y: 0, rotation: 5 },
    4: { x: 0, y: 0, rotation: -5 }
  });

  const [dragging, setDragging] = useState(null);
  const dragRef = useRef({ startX: 0, startY: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e, cardId) => {
    e.preventDefault();
    setDragging(cardId);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    
    // Get actual card dimensions
    const cardElement = e.currentTarget;
    const cardRect = cardElement.getBoundingClientRect();
    
    dragRef.current = {
      startX: clientX - cardPositions[cardId].x,
      startY: clientY - cardPositions[cardId].y,
      cardWidth: cardRect.width,
      cardHeight: cardRect.height
    };
  };

  const handleMouseMove = (e) => {
    if (dragging !== null && containerRef.current && dragRef.current.cardWidth) {
      const container = containerRef.current.getBoundingClientRect();
      const cardWidth = dragRef.current.cardWidth;
      const cardHeight = dragRef.current.cardHeight;
      
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      
      let newX = clientX - dragRef.current.startX;
      let newY = clientY - dragRef.current.startY;
      
      // Add padding to keep cards well within bounds
      const isMobile = window.innerWidth <= 768;
      const horizontalPadding = 60;
      const verticalPadding = isMobile ? 180 : 60; // More restrictive on mobile
      
      // Constrain to container boundaries with padding
      const minX = -container.width / 2 + cardWidth / 2 + horizontalPadding;
      const maxX = container.width / 2 - cardWidth / 2 - horizontalPadding;
      const minY = -container.height / 2 + cardHeight / 2 + verticalPadding;
      const maxY = container.height / 2 - cardHeight / 2 - verticalPadding;
      
      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
      
      setCardPositions(prev => ({
        ...prev,
        [dragging]: {
          x: newX,
          y: newY,
          rotation: prev[dragging].rotation
        }
      }));
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const cards = [
    {
      id: 1,
      title: "Affordable",
      text: "The average app development for brands costs over $12,000 DemaDose makes it effortless and affordable."
    },
    {
      id: 2,
      title:"biggest brands With apps",
      text: "Customers trust brands with their own app more and that trust brings 15–40% more repeat sales"
    },
    {
      id: 3,
      title:"Stop paying for ads",
      text: "Why keep spending on ads every month when your app lets you reach loyal customers instantly for free?"
    },
    {
      id: 4,
      title:"It’s easier",
      text: "It’s easier to make someone buy again than to win a new customer your app makes that simple"
    }
  ];

  return (
    <section 
      id="why-section" 
      className="why-section"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="why-container" ref={containerRef}>
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className={`info-card card-${index + 1} ${dragging === card.id ? 'dragging' : ''}`}
               style={{
                 transform: `translate(${cardPositions[card.id].x}px, ${cardPositions[card.id].y}px) rotate(${cardPositions[card.id].rotation}deg)`,
                 cursor: dragging === card.id ? 'grabbing' : 'grab'
               }}
               onMouseDown={(e) => handleMouseDown(e, card.id)}
               onTouchStart={(e) => handleMouseDown(e, card.id)}
            >
              {card.title && <h3 className="card-title">{card.title}</h3>}
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        
        <div className="why-content">
          <h2 className="why-title">Why <span className="demadose-wrapper">DemaDose<img src={circle} alt="Circle" className="circle-bg" /></span>?</h2>
          <img src={buyArrow} alt="Arrow" className="buy-arrow" />
          <a href="https://forms.gle/2jW6kUwC5xP2MWVh9" target="_blank" rel="noopener noreferrer">
            <img src={waitingListBtn} alt="Join the waiting list" className="btn-why-img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

