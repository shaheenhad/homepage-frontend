import React from "react";
import "./Bookmarks.css";
import google from "../../images/google.png";
import amazon from "../../images/amazon.png";
import insta from "../../images/insta.png";
import reddit from "../../images/reddit.png";
import spotify from "../../images/spotify.png";
import youtube from "../../images/youtube.png";

function Bookmarks() {
  return (
    <div className="bookmarks">
      <h2 className="bookmarks__title">Go Somewhere</h2>
      <div className="bookmarks__links">
        <a className="bookmarks__link" href="https://www.google.com/">
          <img className="bookmarks__logo" alt="search logo" src={google}></img>
        </a>
        <a className="bookmarks__link" href="https://www.spotify.com/">
          <img
            className="bookmarks__logo"
            alt="spotify logo"
            src={spotify}
          ></img>
        </a>
        <a className="bookmarks__link" href="https://www.reddit.com/">
          <img className="bookmarks__logo" alt="reddit logo" src={reddit}></img>
        </a>
        <a className="bookmarks__link" href="https://www.instagram.com/">
          <img
            className="bookmarks__logo"
            alt="instagram logo"
            src={insta}
          ></img>
        </a>
        <a className="bookmarks__link" href="https://www.amazon.com/">
          <img className="bookmarks__logo" alt="amazon logo" src={amazon}></img>
        </a>
        <a className="bookmarks__link" href="https://www.youtube.com/">
          <img
            className="bookmarks__logo"
            alt="youtube logo"
            src={youtube}
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Bookmarks;
