import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__text">
        Jop Konrad &copy; {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
