import React, { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: data,
    })
      .then((response) => {
        console.log(response);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("register", data);
  };

  return (
    <div className="register-page__container">
      <div className="register-page">
        <div className="register-page__form">
          <span className="register-page--text">Zarejstruj się</span>
          <form onSubmit={handleSubmit}>
            <div className="register-page__form--flex register-page__form--margin">
              <div className="register-page__form--half-width">
                <label htmlFor="name" className="register-page__form--label">
                  Podaj imię
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  className="input-style"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="register-page__form--margin">
              <label className="register-page__form--label" htmlFor="email">
                Podaj e-mail
              </label>
              <br />
              <input
                type="text"
                className="input-style"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-page__form--flex register-page__form--margin">
              <div className="register-page__form--half-width">
                <label
                  className="register-page__form--label"
                  htmlFor="password"
                >
                  Podaj hasło
                </label>
                <br />
                <input
                  type="password"
                  className="input-style"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="register-page__form--half-width">
                <label
                  className="register-page__form--label"
                  htmlFor="repeatPassword"
                >
                  Powtórz hasło
                </label>
                <br />
                <input
                  type="password"
                  className="input-style"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="register-page__form--margin">
              <button className="register-page__register-btn">
                Zarejstruj się
              </button>
              <button className="register-page__clear-btn">Wyczyść</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
