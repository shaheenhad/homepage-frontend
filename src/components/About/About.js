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
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
