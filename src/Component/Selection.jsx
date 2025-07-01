import React from "react";
import "./Css/Selection.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
export default function Selection() {
  return (
    <div className="selection-container">
      <h1 className="selection-title">Who are you?</h1>
      <div className="selection-cards">
        <Link div className="selection-card" to="/section/developerLogin">
          I’m a Developer
        </Link>
        <Link className="selection-card" to="/section/userLogin">
          I’m a User
        </Link>
      </div>
    </div>
  );
}
