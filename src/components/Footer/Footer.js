import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © {new Date().getFullYear()} Shaheen Hadadzadeh
        </p>
      </div>
    </footer>
  );
}

export default Footer;
