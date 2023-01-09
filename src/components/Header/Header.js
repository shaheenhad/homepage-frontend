import React from "react";
import { greeting } from "../../utils/getGreeting";
import Clock from "../Clock/Clock";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className={`header__title header__title_${greeting}`}>
        Good <em>{greeting}</em>
      </h1>
      <Clock />
    </header>
  );
}

export default Header;
