import React from "react";
import "./Bookmarks.css";

function Bookmarks() {
  return (
    <div className="bookmarks">
      <h2 className="bookmarks__title">Go Somewhere</h2>
      <div className="bookmarks__links">
        <a className="bookmarks__link" href="https://www.google.com/">
          search
        </a>
      </div>
    </div>
  );
}

export default Bookmarks;
