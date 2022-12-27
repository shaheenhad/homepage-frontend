import React from "react";
import "./About.css";
import mePath from "../../images/about-me.jpg";

function About() {
  return (
    <div className="about">
      <img src={mePath} className="about__image"></img>
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">it me</p>
      </div>
    </div>
  );
}

export default About;
