import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Telecom Mission Control</h1>
      <nav className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/onboarding">Onboarding</Link>
        <Link to="/policy">Policy</Link>
        <Link to="/towers">Towers</Link>
      </nav>
    </header>
  );
};

export default Header;
