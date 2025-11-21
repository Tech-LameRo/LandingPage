import React from 'react';
import './DesignShowcase.css';

const DesignShowcase = () => {
  return (
    <section className="design-section">
      <div className="design-container">
        <h2 className="design-title">
          Design that makes you<br />
          stand out
        </h2>
        
        <div className="mockups-grid">
          <div className="mockup-card mockup-1">
            <div className="phone-frame">
              <div className="phone-content">
                <div className="app-header">
                  <div className="app-logo">🍔</div>
                  <h3>Toronto Menu</h3>
                </div>
                <div className="menu-items">
                  <div className="menu-item">
                    <div className="item-image"></div>
                    <div className="item-details">
                      <p>Menu Item</p>
                      <span className="price">$12.99</span>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-image"></div>
                    <div className="item-details">
                      <p>Menu Item</p>
                      <span className="price">$10.99</span>
                    </div>
                  </div>
                </div>
                <div className="category-tabs">
                  <span className="tab active">Categories</span>
                  <span className="tab">Popular</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup-card mockup-2">
            <div className="phone-frame">
              <div className="phone-content light-theme">
                <div className="app-search">
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="food-grid">
                  <div className="food-card">🥗</div>
                  <div className="food-card">🍕</div>
                  <div className="food-card">🍔</div>
                  <div className="food-card">🌮</div>
                </div>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          </div>

          <div className="mockup-card mockup-3">
            <div className="phone-frame">
              <div className="phone-content pink-theme">
                <div className="hero-food">🥞</div>
                <h3>Pancake</h3>
                <p>Delicious breakfast</p>
                <button className="add-btn">Add to cart</button>
              </div>
            </div>
          </div>

          <div className="mockup-card mockup-4">
            <div className="phone-frame">
              <div className="phone-content">
                <h3 className="restaurant-name">RESTAURANT NAME</h3>
                <div className="food-images">
                  <div className="food-img">🍜</div>
                  <div className="food-img">🍱</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup-card mockup-5">
            <div className="phone-frame">
              <div className="phone-content light-theme">
                <div className="app-logo-header">
                  <span className="logo-text">foodie</span>
                </div>
                <div className="search-bar">
                  <input type="text" placeholder="Search" />
                </div>
                <div className="food-gallery">
                  <div className="gallery-item">🍔</div>
                  <div className="gallery-item">🍕</div>
                  <div className="gallery-item">🌮</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup-card mockup-6">
            <div className="phone-frame">
              <div className="phone-content blue-theme">
                <h3>Your Bucket</h3>
                <div className="bucket-items">
                  <div className="bucket-item">
                    <span>Item 1</span>
                    <span>$12</span>
                  </div>
                  <div className="bucket-item">
                    <span>Item 2</span>
                    <span>$8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;

