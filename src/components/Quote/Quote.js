import React from "react";
import "./Quote.css";
import { getQuote } from "../../utils/ForismaticAPI";

function Quote() {
  const [quote, setQuote] = React.useState(
    "It would not be much of a universe if it wasn’t home to the people you love."
  );

  const [author, setAuthor] = React.useState("Stephen Hawking");

  return (
    <div className="quote">
      <h2 className="quote__title">Insight of the day</h2>
      <div className="quote__container">
        <p className="quote__text">"{quote}"</p>
        <p className="quote__author">— {author}</p>
      </div>
      <button className="quote__button">Get a new quote</button>
    </div>
  );
}

export default Quote;
