import React from 'react';

export default function WelcomeScreen({ onNavigate }) {
  return (
    /* The main absolute viewport box containing all inner coordinates */
    <div className="welcome-screen-wrapper">
      
      {/* Welcome Title */}
      <h2 className="position-absolute text-start welcome-title-spec">
        Welcome to PopX
      </h2>
      
      {/* Lorem Part */}
      <p className="position-absolute text-start welcome-desc-spec">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      
      {/* Create Account Button */}
      <button 
        className="position-absolute d-flex align-items-center justify-content-center border-0 btn-create-account-spec" 
        onClick={() => onNavigate('signup')}
      >
        Create Account
      </button>
      
      {/* Already Registered? Login Button */}
      <button 
        className="position-absolute d-flex align-items-center justify-content-center border-0 btn-already-registered-spec" 
        onClick={() => onNavigate('login')}
      >
        Already Registered? Login
      </button>

    </div>
  );
}