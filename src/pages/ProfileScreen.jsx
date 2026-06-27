import React, { useEffect } from 'react';

export default function ProfileScreen({ formData = {}, onNavigate }) {
  const displayName = formData.fullName || 'Mary Doe';
  const displayEmail = formData.email || 'Marrydoe@Gmail.Com';

  // Intercept the browser's native back button actions
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);

    const handlePopState = () => {
      if (onNavigate) {
        onNavigate('signup');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNavigate]);

  return (
    <div className="profile-container shadow-sm">
      {/* Top Header Panel Section */}
      <div className="account-settings-box">
        <h1 className="account-settings-text">Account Settings</h1>
      </div>

      {/* User Avatar Asset */}
      <img 
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120" 
        alt="User Profile Canvas" 
        className="profile-avatar-pic"
      />
      
      {/* Visible Camera Icon using Bootstrap Icons */}
      <div className="profile-camera-icon" aria-label="Upload Photo">
        <i className="bi bi-camera-fill"></i>
      </div>
      
      <h2 className="profile-name-text">{displayName}</h2>
      <p className="profile-email-text">{displayEmail}</p>

      {/* Profile Bio Details Block */}
      <p className="profile-lorem-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      </p>

      {/* Layout Structure Dotted Dividers */}
      <div className="divider-dashed-top" />
      <div className="divider-dashed-bottom" />
    </div>
  );
}