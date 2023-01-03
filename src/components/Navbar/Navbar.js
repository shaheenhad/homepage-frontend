import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__logo" to="/">
        home.page
      </NavLink>
      <div className="navbar__links">
        <NavLink
          activeClassName="navbar__link_active"
          className="navbar__link"
          exact={true}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="navbar__link_active"
          className="navbar__link"
          to="/weather"
        >
          Weather
        </NavLink>
        <NavLink
          activeClassName="navbar__link_active"
          className="navbar__link"
          to="/quote"
        >
          QuoteOTD
        </NavLink>
        <NavLink
          activeClassName="navbar__link_active"
          className="navbar__link"
          to="/word"
        >
          WordOTD
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
