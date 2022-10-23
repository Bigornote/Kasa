import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img className="logo-footer" src={logo} alt="Logo Kasa" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
