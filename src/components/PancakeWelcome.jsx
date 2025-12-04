import React from 'react';
import './PancakeWelcome.css';
import pancakeImage from '../assets/pancakewelcome.png';

const PancakeWelcome = ({ 
  restaurantName = "Pancafé",
  palette = null
}) => {
  // Add cursor blink effect when editing
  const isEditing = restaurantName === '' || restaurantName.length < 7;
  // Default palette (pink theme from the templates)
  const defaultPalette = {
    gradient: {
      welcome: {
        start: '#E6A4B4',
        end: '#A8D5BA'
      }
    },
    text: {
      primary: '#FFFFFF'
    },
    button: {
      background: '#FFF8F2',
      text: '#CA4E6C'
    }
  };

  const currentPalette = palette || defaultPalette;

  return (
    <div className="pancake-welcome-container">
      <div 
        className="pancake-gradient-background"
        style={{
          background: `linear-gradient(to bottom, ${currentPalette.gradient.welcome.start}, ${currentPalette.gradient.welcome.end})`
        }}
      >
        <div className="pancake-content">
          <img
            src={pancakeImage}
            alt="Pancakes"
            className="pancake-image"
          />

          <h1 
            className="pancake-title"
            style={{ color: currentPalette.text.primary }}
          >
            {restaurantName}
            {isEditing && <span className="cursor-blink">|</span>}
          </h1>

          <button 
            className="pancake-button"
            style={{
              backgroundColor: currentPalette.button.background
            }}
          >
            <span 
              className="pancake-button-text"
              style={{ color: currentPalette.button.text }}
            >
              Start ordering
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PancakeWelcome;

