import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="Logo">
        WEATHER WEAR
      </span>
      <nav className="header__nav">
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
