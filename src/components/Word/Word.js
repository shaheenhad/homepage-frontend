import React from "react";
import "./Word.css";
import Preloader from "../Preloader/Preloader";

function Word() {
  const [word, setWord] = React.useState("precocious");

  const [definition, setDefinition] = React.useState(
    "having or showing mature qualities at an unusually early age"
  );

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="word">
      <h2 className="word__title">Amaze your people</h2>
      {isLoading && <Preloader />}
      <div className="word__container">
        <p className="word__word">{word}:</p>
        <p className="word__definition">{definition}</p>
      </div>
      <button className="word__button">Get a new word</button>
    </div>
  );
}

export default Word;
