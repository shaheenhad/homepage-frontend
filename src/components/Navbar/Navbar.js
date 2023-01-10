import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import menu from "../../images/menu.svg";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (width > 740) {
        setIsNavExpanded(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  function handleMenuClick() {
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <nav className="navbar">
      <NavLink className="navbar__logo" to="/">
        home.page
      </NavLink>
      <button onClick={handleMenuClick} className="navbar__menu-button">
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
      </div>
      <menu
        className={`navbar__menu ${isNavExpanded ? `navbar__menu_active` : ``}`}
      >
        <NavLink className="navbar__menu-link" exact={true} to="/">
          Home
        </NavLink>
        <NavLink className="navbar__menu-link" to="/quote">
          QuoteOTD
        </NavLink>
      </menu>
    </nav>
  );
}

export default Navbar;
