import React, { FormEvent, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginModel } from "../models/AuthData";

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav: NavigateFunction = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data: LoginModel = {
      login,
      password,
    };
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: data,
    })
      .then((response: AxiosResponse) => {
        localStorage.setItem("token", response.data.token);
        nav("/");
      })
      .catch((error: any) => {
        toast.error(error.response.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "Error1",
        });
      });
  };

  return (
    <div className="login-page__img">
      <div className="login-page__container">
        <div className="login-page">
          <div className="login-page__form">
            <div className="login-page__form--text">
              <span>Zaloguj się</span>
            </div>
            <div className="login-page__form--style">
              <form className="login-page__form--width" onSubmit={handleSubmit}>
                <div className="field-width">
                  <label htmlFor="username" className="login-page__form--label">
                    Podaj nazwę użytkownika
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="username"
                    className="input-field"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </div>
                <div className="field-width">
                  <label htmlFor="password" className="login-page__form--label">
                    Podaj hasło
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btn-container">
                  <button className="btn-style">Zaloguj się</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
