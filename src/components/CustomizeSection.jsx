import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomizeSection.css';
import PancakeWelcome from './PancakeWelcome';
import statusBar from '../assets/StatusBar.png';
import changeColor from '../assets/ChangeColor.png';
import editingText from '../assets/EditingText.png';

const CustomizeSection = () => {
  // Color palettes for different themes
  const palettes = [
    {
      // Pink to Green theme
      gradient: {
        welcome: { start: '#E6A4B4', end: '#A8D5BA' }
      },
      text: { primary: '#FFFFFF' },
      button: { 
        background: '#FFF8F2',
        text: '#CA4E6C' 
      }
    },
    {
      // Orange to Red theme
      gradient: {
        welcome: { start: '#E7B672', end: '#9B1719' }
      },
      text: { primary: '#FFFFFF' },
      button: { 
        background: '#E7B672',
        text: '#9B1719' 
      }
    },
    {
      // Purple to Blue theme
      gradient: {
        welcome: { start: '#C9B7DD', end: '#A3D2E3' }
      },
      text: { primary: '#FFFFFF' },
      button: { 
        background: '#FFF8F2',
        text: '#0D6483' 
      }
    },
    {
      // Cream to Gold theme
      gradient: {
        welcome: { start: '#FFE7C0', end: '#DDA447' }
      },
      text: { primary: '#5B3A29' },
      button: { 
        background: '#5B3A29',
        text: '#DDA447' 
      }
    },
    {
      // Light Pink to Burgundy theme
      gradient: {
        welcome: { start: '#FFF0F5', end: '#88445B' }
      },
      text: { primary: '#88445B' },
      button: { 
        background: '#88445B',
        text: '#FFF0F5' 
      }
    }
  ];

  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle'); // idle, moving-to-phone, clicking, moving-back
  const [isClicking, setIsClicking] = useState(false); // Triggers individual click animations
  const [editingPhase, setEditingPhase] = useState('idle'); // idle, moving-to-text, clicking-text, moved-up-after-click, editing, moving-back
  const [restaurantName, setRestaurantName] = useState('Pancafé');
  const [currentAnimationType, setCurrentAnimationType] = useState('color'); // 'color' or 'text'

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // Animation variants for EditingText
  const editingTextVariants = {
    idle: {
      x: 0,
      y: 0,
      scale: isMobile ? 0.70 : 0.80,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    },
    movingToText: {
      x: isMobile ? -50 : 300,
      y: isMobile ? 500 : 135,
      scale: isMobile ? 0.55 : 0.65,
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
    },
    hoveringText: {
      x: isMobile ? -50 : 300,
      y: isMobile ? 500 : 135,
      scale: isMobile ? 0.55 : 0.65,
      transition: { duration: 0.1, ease: "easeOut" }
    },
    clickingText: {
      x: isMobile ? -50 : 300,
      y: isMobile ? 500 : 135,
      scale: isMobile ? 0.45 : 0.55,
      transition: { duration: 0.15, ease: "easeInOut" }
    },
    movedUpAfterClick: {
      x: isMobile ? -50 : 275,
      y: isMobile ? 475 : 100,
      scale: isMobile ? 0.55 : 0.65,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    movingBackFromText: {
      x: 0,
      y: 0,
      scale: isMobile ? 0.70 : 0.80,
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Animation variants for ChangeColor
  const changeColorVariants = {
    idle: {
      x: 0,
      y: 0,
      scale: isMobile ? 0.70 : 0.85,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    },
    movingToPhone: {
      x: isMobile ? 0 : -180,
      y: isMobile ? -100 : -150,
      scale: isMobile ? 0.55 : 0.70,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    },
    hovering: {
      x: isMobile ? 0 : -180,
      y: isMobile ? -100 : -150,
      scale: isMobile ? 0.55 : 0.70,
      transition: { duration: 0.1, ease: "easeOut" }
    },
    clicking: {
      x: isMobile ? 0 : -180,
      y: isMobile ? -100 : -150,
      scale: isMobile ? 0.45 : 0.60,
      transition: { duration: 0.1, ease: "easeIn" }
    },
    movingBack: {
      x: 0,
      y: 0,
      scale: isMobile ? 0.70 : 0.85,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
  };

  useEffect(() => {
    const colorAnimationSequence = () => {
      // Phase 1: Move to phone (1s)
      setAnimationPhase('moving-to-phone');
      
      setTimeout(() => {
        // Phase 2: Start hovering at phone position
        setAnimationPhase('hovering');
        let clickCount = 0;
        
        // Helper function to perform one click
        const performClick = () => {
          clickCount++;
          
          // Click down animation
          setIsClicking(true);
          
          // After 200ms, change color and release
          setTimeout(() => {
            setCurrentTemplateIndex((prevIndex) => (prevIndex + 1) % palettes.length);
            setIsClicking(false);
            
            // Check if we've completed 3 clicks
            if (clickCount >= 3) {
              // Don't reset color - keep current color
              
              // Phase 3: Move back after a short pause
              setTimeout(() => {
                setAnimationPhase('moving-back');
                
                // Phase 4: Return to idle, then start text editing
                setTimeout(() => {
                  setAnimationPhase('idle');
                  setCurrentAnimationType('text');
                }, 1200);
              }, 800);
            }
          }, 200);
        };
        
        // First click happens after a short delay
        setTimeout(() => {
          performClick();
          
          // Continue clicking every 1600ms
          const clickInterval = setInterval(() => {
            if (clickCount >= 3) {
              clearInterval(clickInterval);
            } else {
              performClick();
            }
          }, 1600);
        }, 300);
      }, 1000); // Wait for move-to-phone animation
    };

    const textEditingSequence = () => {
      // Phase 1: Move to text
      setEditingPhase('moving-to-text');
      
      setTimeout(() => {
        setEditingPhase('hoveringText');
        
        // Phase 2: Click on text
        setTimeout(() => {
          setEditingPhase('clickingText');
          
          setTimeout(() => {
            // Move up slightly after clicking
            setEditingPhase('movedUpAfterClick');
            
            // Phase 3: Typewriter effect - delete and retype
            const originalName = 'Pancafé';
            const newName = 'Coffee Shop';
            
            // Delete animation
            let deleteIndex = originalName.length;
            const deleteInterval = setInterval(() => {
              if (deleteIndex > 0) {
                setRestaurantName(originalName.substring(0, deleteIndex - 1));
                deleteIndex--;
              } else {
                clearInterval(deleteInterval);
                
                // Type new name
                let typeIndex = 0;
                const typeInterval = setInterval(() => {
                  if (typeIndex < newName.length) {
                    setRestaurantName(newName.substring(0, typeIndex + 1));
                    typeIndex++;
                  } else {
                    clearInterval(typeInterval);
                    
                    // Wait a bit, then revert and move back
                    setTimeout(() => {
                      // Delete new name
                      let revertDeleteIndex = newName.length;
                      const revertDeleteInterval = setInterval(() => {
                        if (revertDeleteIndex > 0) {
                          setRestaurantName(newName.substring(0, revertDeleteIndex - 1));
                          revertDeleteIndex--;
                        } else {
                          clearInterval(revertDeleteInterval);
                          
                          // Type back original
                          let revertTypeIndex = 0;
                          const revertTypeInterval = setInterval(() => {
                            if (revertTypeIndex < originalName.length) {
                              setRestaurantName(originalName.substring(0, revertTypeIndex + 1));
                              revertTypeIndex++;
                            } else {
                              clearInterval(revertTypeInterval);
                              
                              // Move back
                              setTimeout(() => {
                                setEditingPhase('movingBackFromText');
                                
                                setTimeout(() => {
                                  setEditingPhase('idle');
                                  setCurrentAnimationType('color');
                                }, 1200);
                              }, 500);
                            }
                          }, 100);
                        }
                      }, 80);
                    }, 1500);
                  }
                }, 100);
              }
            }, 80);
          }, 200);
        }, 300);
      }, 1200);
    };

    if (currentAnimationType === 'color') {
      colorAnimationSequence();
    } else if (currentAnimationType === 'text') {
      textEditingSequence();
    }
  }, [palettes.length, currentAnimationType]);

  return (
    <section className="customize-section">
      <div className="customize-container">
        <h2 className="customize-title">
          Customize your<br />
          own app
        </h2>
        <p className="customize-subtitle">
          Effortlessly add and arrange your text, visuals,<br />
          buttons and even entire sections
        </p>
        
        <div className="phone-mockup-container">
          <div className="pointer pointer-left">
            <motion.img 
              src={editingText} 
              alt="Editing Text" 
              className="editing-text-image"
              variants={editingTextVariants}
              animate={
                editingPhase === 'idle' ? 'idle' :
                editingPhase === 'moving-to-text' ? 'movingToText' :
                editingPhase === 'hoveringText' ? 'hoveringText' :
                editingPhase === 'clickingText' ? 'clickingText' :
                editingPhase === 'movedUpAfterClick' ? 'movedUpAfterClick' :
                'movingBackFromText'
              }
            />
          </div>
          
          <div className="phone-wrapper">
            <div className="phone-mockup">
              <PancakeWelcome 
                palette={palettes[currentTemplateIndex]} 
                restaurantName={restaurantName}
              />
            </div>
            <img src={statusBar} alt="Status Bar" className="status-bar-overlay" />
          </div>
          
          <div className="pointer pointer-right">
            <motion.img 
              src={changeColor} 
              alt="Change Color" 
              className="change-color-image"
              variants={changeColorVariants}
              animate={
                animationPhase === 'idle' ? 'idle' :
                animationPhase === 'moving-to-phone' ? 'movingToPhone' :
                animationPhase === 'hovering' ? (isClicking ? 'clicking' : 'hovering') :
                'movingBack'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;

