import React from "react";
import "./Quote.css";
import quoteApi from "../../utils/QuotableApi";
import Preloader from "../Preloader/Preloader";

function Quote() {
  const [quote, setQuote] = React.useState("Requested Resource Not Found");
  const [author, setAuthor] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    handleGetQuote();
  }, []);

  function handleGetQuote() {
    setIsLoading(true);
    setTimeout(() => {
      quoteApi
        .getQuote()
        .then((res) => {
          setAuthor(res.author);
          setQuote(res.content);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 300);
  }

  return (
    <div className="quote">
      <h2 className="quote__title">Get some insight</h2>
      {isLoading && <Preloader />}
      <div className="quote__container">
        <p className="quote__text">"{quote}"</p>
        <p className="quote__author">— {author}</p>
      </div>
      <button onClick={handleGetQuote} className="quote__button">
        Get a new quote
      </button>
    </div>
  );
}

export default Quote;
