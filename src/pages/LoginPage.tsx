import React, { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      login,
      password,
    };
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: data,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data was send:", data);
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
