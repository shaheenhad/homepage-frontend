import React from "react";
import { greeting } from "../../utils/getGreeting";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Good <i>{greeting}</i>
      </h1>
    </header>
  );
}

export default Header;
