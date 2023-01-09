import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./Main.css";
import { greeting } from "../../utils/getGreeting";

function Main() {
  return (
    <main className={`main main_${greeting}`}>
      <Navbar />
      <Header />
    </main>
  );
}

export default Main;
