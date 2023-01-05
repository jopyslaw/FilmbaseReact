import React, { FormEvent } from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      name,
      username,
      email,
      password,
    };
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
                {/*<div className="validator">
                        <span className="validator--color">To pole nie może być puste</span>
                    </div>*/}
                <br />
              </div>
            </div>
            <div className="register-page__form--margin">
              <label className="register-page__form--label" htmlFor="username">
                Podaj nazwę użtykownika
              </label>
              <br />
              <input
                type="text"
                className="input-style"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/*<div className="validator">
              <span className="validator--color">
                To pole nie może być puste
              </span>
                </div>*/}
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
              {/*<div className="validator">
              <span className="validator--color">
                To pole nie może być puste
              </span>
              <span className="validator--color">
                Podany adres e-mail jest nieprawidłowy
              </span>
              </div>*/}
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
                {/*<div className="validator">
                <span className="validator--color">
                  To pole nie może być puste
                </span>
                <span className="validator--color">
                  Podane hasło musi zawierać minimum 8 znaków, jedną dużą
                  literę, jedną małą literę, jedną liczbę i jeden znak specjalny
                </span>
            </div>*/}
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
                {/*<div className="validator">
                <span className="validator--color">
                  To pole nie może być puste
                </span>
                <span className="validator--color">
                  Podane hasło musi zawierać minimum 8 znaków, jedną dużą
                  literę, jedną małą literę, jedną liczbę i jeden znak specjalny
                </span>
              </div>*/}
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
