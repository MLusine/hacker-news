import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="nav">
        <ul className="menu-list">
          <li className="y-item">
            <Link to="/">
              <div className="y">
                <img src="./y18.svg" className="yphoto"/>
              </div>
            </Link>
          </li>
          <li className="item">
            <Link to="/news"> <span className="hnname">Hacker News</span></Link>
          </li>
          <li className="item">
            <Link to="/newest">new</Link>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <Link to="/front">past</Link>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <Link to="/newcomments">comments</Link>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <Link to="/ask">ask</Link>
          </li>
          <li className="item">
              <b> | </b>
          </li>
          <li className="item">
            <Link to="/show">show</Link>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <Link to="/jobs">jobs</Link>
          </li>
          <li className="item">
            <b> | </b>
          </li>
          <li className="item">
            <Link to="/submit">submit</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
    </header>
  );
};

export default Header;
