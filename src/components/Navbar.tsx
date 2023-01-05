import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src={require("../assets/img/logo.png")}
            height={"90px"}
            width={"auto"}
            alt="logo strony"
          />
        </Link>
      </div>
      <div className="navbar__buttons">
        <Link
          to="/add"
          style={{ textDecoration: "none", color: "white" }}
          className="navbar__button"
        >
          Dodaj nowy film
        </Link>
        <Link
          to="/signup"
          style={{ textDecoration: "none", color: "white" }}
          className="navbar__button"
        >
          Zarejstruj się
        </Link>
        <Link
          to="/signin"
          style={{ textDecoration: "none", color: "white" }}
          className="navbar__button"
        >
          Zaloguj się
        </Link>
        {/*<div className="navbar__button">
                Wyloguj się
            </div>*/}
      </div>
    </div>
  );
};

export default Navbar;
