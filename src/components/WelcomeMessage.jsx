import React from 'react';
import './WelcomeMessage.css';

export default function WelcomeMessage() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to CalmSphere.</h1>
      <p className="welcome-subtext">Your journey to mental peace begins here.</p>
    </div>
  );
}

