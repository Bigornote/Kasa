import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>

      <nav className="navigation">
        <ul>
          <NavLink
            to="/"
            end
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            end
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>à propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
