import axios from "axios";
import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const Navbar = () => {
  const nav = useNavigate();
  const isNotLogged = isExpired(localStorage.getItem("token") ?? "");
  const handleLogout = () => {
    const decodedToken: any = decodeToken(localStorage.getItem("token") ?? "");
    console.log(decodedToken);
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${decodedToken.userId}`,
      data: {
        userId: decodedToken.userId,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.removeItem("token");
    nav("/");
  };

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
        {!isNotLogged && (
          <Link
            to="/add"
            style={{ textDecoration: "none", color: "white" }}
            className="navbar__button"
          >
            Dodaj nowy film
          </Link>
        )}
        {isNotLogged && (
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "white" }}
            className="navbar__button"
          >
            Zarejstruj się
          </Link>
        )}
        {isNotLogged && (
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "white" }}
            className="navbar__button"
          >
            Zaloguj się
          </Link>
        )}
        {!isNotLogged && (
          <div className="navbar__button" onClick={handleLogout}>
            Wyloguj się
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
