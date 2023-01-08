import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import menu from "../../images/menu.svg";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    <nav className="navbar">
      <NavLink className="navbar__logo" to="/">
        home.page
      </NavLink>
      <button className="navbar__menu">
        <img
          className="navbar__menu-icon"
          src={menu}
          alt="icon for mobile nav"
        ></img>
      </button>
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
