import React from 'react';
import './CustomizeSection.css';

const CustomizeSection = () => {
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
            <div className="pointer-label">Easy Editing</div>
            <div className="pointer-arrow"></div>
          </div>
          
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="screen-header">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="status-icons">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>
                </div>
                <h3 className="screen-title">Payment Details</h3>
              </div>
              
              <div className="payment-form">
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="Robert Wolfkisser" readOnly />
                </div>
                
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" readOnly />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" readOnly />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="000" readOnly />
                  </div>
                </div>
                
                <div className="payment-summary">
                  <div className="summary-row">
                    <span>Sub total</span>
                    <span>$250.00</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (10%)</span>
                    <span>$25.00</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery</span>
                    <span>$15.00</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>$290.00</span>
                  </div>
                </div>
                
                <button className="payment-btn">Payment</button>
              </div>
            </div>
          </div>
          
          <div className="pointer pointer-right">
            <div className="pointer-arrow"></div>
            <div className="pointer-label">Quick Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;

