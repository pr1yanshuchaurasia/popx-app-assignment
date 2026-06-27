import React, { useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';
import SignupScreen from './pages/SignupScreen';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';

export default function App() {
  const [page, setPage] = useState('welcome');
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: '9876543210',
    email: 'Marry@Gmail.Com',
    password: 'password123',
    company: 'PopX Agency',
    isAgency: 'yes'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-frame-container">
      <div className="mobile-screen">
        
        {page === 'welcome' && (
          <WelcomeScreen onNavigate={setPage} />
        )}

        {page === 'signup' && (
          <SignupScreen 
            formData={formData} 
            onInputChange={handleInputChange} 
            onNavigate={setPage} 
          />
        )}

        {page === 'login' && (
          <LoginScreen onNavigate={setPage} />
        )}

        {page === 'profile' && (
          <ProfileScreen 
            formData={formData} 
            onNavigate={setPage} 
          />
        )}

      </div>
    </div>
  );
}