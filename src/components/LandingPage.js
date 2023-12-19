// LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import the new styles

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to the Landing Page</h1>
        <p>Choose an option:</p>
        <div className="options">
          <Link to="/food" className="option-link">
            Continue with Food App
          </Link>
          <Link to="/todo" className="option-link">
            Switch to Todo App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
