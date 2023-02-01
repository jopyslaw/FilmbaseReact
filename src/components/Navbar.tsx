import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";
import {
  Link,
  NavigateFunction,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const nav: NavigateFunction = useNavigate();
  const isNotLogged: boolean = isExpired(localStorage.getItem("token") ?? "");
  const handleLogout = (): void => {
    const decodedToken: any = decodeToken(localStorage.getItem("token") ?? "");
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${decodedToken.userId}`,
      data: {
        userId: decodedToken.userId,
      },
    })
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <>
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
    </>
  );
};

export default Navbar;
