import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Mouslem</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experiance</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button type="bottun" className="button n-button">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
