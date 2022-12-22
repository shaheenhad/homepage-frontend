import React from "react";
import { greeting } from "../../utils/getGreeting";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Good {greeting}</h1>
    </header>
  );
}

export default Header;
