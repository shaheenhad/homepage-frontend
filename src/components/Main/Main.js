import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Clock from "../Clock/Clock";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Navbar />
      <Header />
      <Clock />
    </main>
  );
}

export default Main;
