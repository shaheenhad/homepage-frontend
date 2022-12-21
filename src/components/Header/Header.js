import React from "react";

const today = new Date();
const time = today.getHours();

function getGreeting(time) {
  if (5 <= time && time < 12) {
    return "morning";
  } else if (12 < time && time < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

const greeting = getGreeting(time);

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Good {greeting} </h1>
    </header>
  );
}

export default Header;
