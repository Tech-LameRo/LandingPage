import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EarlyAccess.css';
import logo from '../assets/LogoNoBG.png';

const EarlyAccess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  
  const [formData, setFormData] = useState({
    // Step 1: Business Type
    businessType: '',
    // Step 2: Primary Goal
    primaryGoal: '',
    // Step 3: How did you hear about us
    discovery: '',
    // Step 4: Urgency Scale
    urgencyScale: '',
    // Step 5: Budget
    budget: '',
    // Step 6: Personal Details
    fullName: '',
    phoneNumber: '',
    email: '',
    brandName: '',
    role: '',
    // Step 7: Presentation
    wantsPresentation: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Google Form configuration
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdiBNvwK2udPdS3FTLvwSyz5kSTSqQJHEa-fo8AcU79PCoTxQ/formResponse';
  const ENTRY_IDS = {
    businessType: 'entry.1022221645',
    primaryGoal: 'entry.757559923',
    discovery: 'entry.391167374',
    urgencyScale: 'entry.1972640232',
    budget: 'entry.928700212',
    fullName: 'entry.2028876955',
    phoneNumber: 'entry.75579541',
    email: 'entry.277721766',
    brandName: 'entry.199921597',
    role: 'entry.1957276842',
    wantsPresentation: 'entry.553673162'
  };

  // Step 1 Options - Values must match Google Form exactly
  const businessTypes = [
    { value: 'Food & Beverage', label: 'Food & Beverage' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Grocery store', label: 'Grocery Store' }
  ];

  // Step 2 Options
  const goalOptions = [
    { value: 'Improve Customer Engagement and loyalty', label: 'Improve Customer Engagement and loyalty' },
    { value: 'Reduce advertising costs by reaching customers directly.', label: 'Reduce advertising costs by reaching customers directly' },
    { value: 'Monetize my business through dedicated app', label: 'Monetize my business through dedicated app' }
  ];

  // Step 3 Options
  const discoveryOptions = [
    { value: 'Marketing (TV, Social Media, Influencers Etc)', label: 'Marketing (TV, Social Media, Influencers Etc)' },
    { value: 'Sales People', label: 'Sales People' },
    { value: 'Referral from friend or colleague', label: 'Referral from friend or colleague' }
  ];

  // Step 5 Options
  const budgetOptions = [
    { value: '$50 to $100', label: '$50 to $100' },
    { value: '$100 to $200', label: '$100 to $200' },
    { value: '$200 to $500', label: '$200 to $500' },
    { value: "I haven't set a budget yet", label: "I haven't set a budget yet" }
  ];

  // Step 6 Options
  const roleOptions = [
    { value: 'CEO', label: 'CEO' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Marketing / Sales Department', label: 'Marketing / Sales Department' },
    { value: 'Other', label: 'Other' }
  ];

  // Step 7 Options - Values must match Google Form exactly
  const presentationOptions = [
    { value: 'Yes invite me to the presentation', label: 'Yes, invite me to the presentation' },
    { value: "That's not for me", label: "That's not for me" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.businessType;
      case 2:
        return formData.primaryGoal;
      case 3:
        return formData.discovery;
      case 4:
        return formData.urgencyScale;
      case 5:
        return formData.budget;
      case 6:
        return formData.fullName && formData.phoneNumber && formData.email && 
          formData.brandName && formData.role;
      case 7:
        return formData.wantsPresentation;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build form data object
    const submissionData = {};
    
    // Basic fields (no "Other" option)
    submissionData[ENTRY_IDS.urgencyScale] = formData.urgencyScale;
    submissionData[ENTRY_IDS.budget] = formData.budget;
    submissionData[ENTRY_IDS.fullName] = formData.fullName;
    submissionData[ENTRY_IDS.phoneNumber] = formData.phoneNumber;
    submissionData[ENTRY_IDS.email] = formData.email;
    submissionData[ENTRY_IDS.brandName] = formData.brandName;
    submissionData[ENTRY_IDS.wantsPresentation] = formData.wantsPresentation;
    
    // Handle fields with options (no special "Other" handling needed now)
    submissionData[ENTRY_IDS.businessType] = formData.businessType;
    submissionData[ENTRY_IDS.primaryGoal] = formData.primaryGoal;
    submissionData[ENTRY_IDS.discovery] = formData.discovery;
    submissionData[ENTRY_IDS.role] = formData.role;

    try {
      // Create a hidden iframe for form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create a hidden form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_ACTION_URL;
      form.target = 'hidden_iframe';

      // Add all form fields
      Object.entries(submissionData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Clean up and show success after a short delay
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const stepTitles = [
    'Business Type',
    'Your Primary Goal',
    'How Did You Find Us?',
    'Urgency Level',
    'Budget Range',
    'Your Details',
    'One Last Thing'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">What type of business do you have?</h2>
            <p className="ea-step-description">Select the category that best describes your business.</p>
            
            <div className="ea-form-group">
              <div className="ea-radio-group ea-radio-vertical">
                {businessTypes.map((type) => (
                  <label key={type.value} className="ea-radio-label ea-radio-label-wide">
                    <input
                      type="radio"
                      name="businessType"
                      value={type.value}
                      checked={formData.businessType === type.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">Primary goal with DemaDose</h2>
            <p className="ea-step-description">What do you hope to achieve for your business?</p>
            
            <div className="ea-form-group">
              <div className="ea-radio-group ea-radio-vertical">
                {goalOptions.map((goal) => (
                  <label key={goal.value} className="ea-radio-label ea-radio-label-wide">
                    <input
                      type="radio"
                      name="primaryGoal"
                      value={goal.value}
                      checked={formData.primaryGoal === goal.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">How did you hear about us?</h2>
            <p className="ea-step-description">We'd love to know how you discovered DemaDose.</p>
            
            <div className="ea-form-group">
              <div className="ea-radio-group ea-radio-vertical">
                {discoveryOptions.map((option) => (
                  <label key={option.value} className="ea-radio-label ea-radio-label-wide">
                    <input
                      type="radio"
                      name="discovery"
                      value={option.value}
                      checked={formData.discovery === option.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">How urgent is DemaDose for your business?</h2>
            <p className="ea-step-description">On a scale from 1 to 10, how soon do you need this solution?</p>
            
            <div className="ea-form-group">
              <div className="ea-scale-container">
                <div className="ea-scale-labels">
                  <span className="ea-scale-label">Not urgent</span>
                  <span className="ea-scale-label">Very urgent</span>
                </div>
                <div className="ea-scale-buttons">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`ea-scale-btn ${formData.urgencyScale === String(num) ? 'active' : ''}`}
                      onClick={() => handleInputChange({ target: { name: 'urgencyScale', value: String(num) } })}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">What budget range are you considering?</h2>
            <p className="ea-step-description">Select the budget range that works for you.</p>
            
            <div className="ea-form-group">
              <div className="ea-radio-group ea-radio-vertical">
                {budgetOptions.map((option) => (
                  <label key={option.value} className="ea-radio-label ea-radio-label-wide">
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={formData.budget === option.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">Please share your details</h2>
            <p className="ea-step-description">We'll use this information to get in touch with you.</p>
            
            <div className="ea-form-group">
              <label htmlFor="fullName" className="ea-label">
                Full Name <span className="ea-required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="ea-input"
                required
              />
            </div>

            <div className="ea-form-group">
              <label htmlFor="phoneNumber" className="ea-label">
                Phone Number <span className="ea-required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className="ea-input"
                required
              />
            </div>

            <div className="ea-form-group">
              <label htmlFor="email" className="ea-label">
                Email <span className="ea-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="ea-input"
                required
              />
            </div>

            <div className="ea-form-group">
              <label htmlFor="brandName" className="ea-label">
                Brand Name <span className="ea-required">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
                placeholder="Your brand name"
                className="ea-input"
                required
              />
            </div>

            <div className="ea-form-group">
              <label className="ea-label">
                Role in the company <span className="ea-required">*</span>
              </label>
              <div className="ea-radio-group">
                {roleOptions.map((role) => (
                  <label key={role.value} className="ea-radio-label">
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={formData.role === role.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{role.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="ea-step-content">
            <h2 className="ea-step-title">One last thing!</h2>
            <p className="ea-step-description">Would you like to see the angel investor presentation for this business?</p>
            
            <div className="ea-form-group">
              <div className="ea-radio-group ea-radio-vertical">
                {presentationOptions.map((option) => (
                  <label key={option.value} className="ea-radio-label ea-radio-label-wide ea-radio-label-accent">
                    <input
                      type="radio"
                      name="wantsPresentation"
                      value={option.value}
                      checked={formData.wantsPresentation === option.value}
                      onChange={handleInputChange}
                      className="ea-radio"
                    />
                    <span className="ea-radio-custom"></span>
                    <span className="ea-radio-text">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="early-access-page">
        <header className="ea-header">
          <div className="ea-header-container">
            <Link to="/" className="ea-logo">
              <img src={logo} alt="DemaDose Logo" className="ea-logo-icon" />
            </Link>
          </div>
        </header>
        <main className="ea-main">
          <div className="ea-container">
            <div className="ea-content ea-success-content">
              <div className="ea-success-message">
                <div className="ea-success-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2>You're on the list!</h2>
                <p>Thank you for your interest in DemaDose. We'll be in touch soon with exclusive early access details.</p>
                <Link to="/" className="ea-home-btn">
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="ea-decoration">
              <div className="ea-glow ea-glow-1"></div>
              <div className="ea-glow ea-glow-2"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="early-access-page">
      <header className="ea-header">
        <div className="ea-header-container">
          <Link to="/" className="ea-logo">
            <img src={logo} alt="DemaDose Logo" className="ea-logo-icon" />
          </Link>
          <Link to="/" className="ea-back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="ea-main">
        <div className="ea-container">
          <div className="ea-content">
            {/* Progress Bar */}
            <div className="ea-progress-container">
              <div className="ea-progress-bar">
                <div 
                  className="ea-progress-fill" 
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="ea-progress-text">
                <span className="ea-step-indicator">Step {currentStep} of {totalSteps}</span>
                <span className="ea-step-name">{stepTitles[currentStep - 1]}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="ea-nav-buttons">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="ea-btn ea-btn-secondary"
                    onClick={prevStep}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button 
                    type="button" 
                    className="ea-btn ea-btn-primary"
                    onClick={nextStep}
                    disabled={!validateStep()}
                  >
                    Continue
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="ea-btn ea-btn-primary ea-btn-submit"
                    disabled={isSubmitting || !validateStep()}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="ea-spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Join the Waiting List
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>

              {submitStatus === 'error' && (
                <p className="ea-error-message">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="ea-decoration">
            <div className="ea-glow ea-glow-1"></div>
            <div className="ea-glow ea-glow-2"></div>
          </div>
        </div>
      </main>

      <footer className="ea-footer">
        <p>© 2025 DemaDose. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EarlyAccess;
