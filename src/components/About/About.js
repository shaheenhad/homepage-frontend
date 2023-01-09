import React from "react";
import "./About.css";
import mePath from "../../images/about-me.jpg";

function About() {
  return (
    <div className="about">
      <img
        alt="site author in nature"
        src={mePath}
        className="about__image"
      ></img>
      <div className="about__text">
        <h3 className="about__title">About the author</h3>
        <p className="about__description">
          Hi! I'm Shaheen Hadadzadeh, a full stack web developer with a
          background in chemical engineering. I work with React, Express, and
          Node, and am fluent in JavaScript, HTML, and CSS.
        </p>
        <p className="about__description">
          This is the final project I developed for the Practicum Software
          Engineering bootcamp, which makes use of Create React App and
          responsive web design via CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
