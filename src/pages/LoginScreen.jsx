import React from 'react';

export default function LoginScreen({ onNavigate }) {
  return (
    /* The main absolute viewport box containing all inner coordinates */
    <div className="login-screen-wrapper">
      
      {/* Signin Heading */}
      <h2 className="position-absolute text-start login-title-spec">
        Signin to your<br />PopX account
      </h2>
      
      {/* Description Paragraph */}
      <p className="position-absolute text-start login-desc-spec">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* --- EMAIL BLOCK --- */}
      <div className="position-absolute login-input-container" style={{ top: '195px' }}>
        <label className="login-label-spec text-start">Email Address</label>
        <input 
          type="email" 
          className="w-100 login-input-box-spec" 
          placeholder="Enter email address" 
          style={{ marginTop: '9px' }}
        />
      </div>

      {/* --- PASSWORD BLOCK --- */}
      <div className="position-absolute login-input-container" style={{ top: '258px' }}>
        <label className="login-label-spec text-start">Password</label>
        <input 
          type="password" 
          className="w-100 login-input-box-spec" 
          placeholder="Enter password" 
          style={{ marginTop: '9px' }}
        />
      </div>

      {/* --- SUBMIT LOGIN BUTTON --- */}
      <button 
        className="position-absolute d-flex align-items-center justify-content-center border-0 btn-login-submit-spec"
        onClick={() => onNavigate('profile')}
      >
        Login
      </button>

    </div>
  );
}