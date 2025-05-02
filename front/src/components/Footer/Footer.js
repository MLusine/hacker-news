import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="more">
        <a href="#">More</a>
      </div>
      <div className="divider"></div>
      <div className="footer">
        <p>Join us for AI Startup School this June 16-17 in San Francisco!</p>
        <ul className="footer-menu">
          <li>
            <a href="#">Guidelines</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">Lists</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>

          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">Apply to YC </a>
          </li>
          <li>
            <a href="#"> | </a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
        <div className="search">Search
        <input />
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
