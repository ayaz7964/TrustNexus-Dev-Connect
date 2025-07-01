import React from "react";
import "./Css/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="Logo">
        <span className="dev">Dev</span>Connect
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Find Developers..." />
        <button className="searchButton">🔍</button>
      </div>
      <Link className="landing-page-button" to="/section">
        Get Started
      </Link>
    </div>
  );
}
