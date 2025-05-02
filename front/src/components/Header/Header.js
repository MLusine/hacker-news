import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="container">
      <div className="nav">
        <ul className="menu-list">
          <li className="y-item">
            <a href="/">
              <div className="y">
                <img src="./y18.svg" className="yphoto"/>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#"> <span className="hnname">Hacker News</span></a>
          </li>
          <li className="item">
            <a href="#">new</a>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <a href="#">past</a>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <a href="#">comments</a>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <a href="#">ask</a>
          </li>
          <li className="item">
              <b> | </b>
          </li>
          <li className="item">
            <a href="#">show</a>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <a href="#">jobs</a>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <a href="#">submit</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/login">login</a>
      </div>
    </header>
  );
};

export default Header;
