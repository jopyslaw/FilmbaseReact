import React from "react";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-page__form">
        <span className="register-page--text">Zarejstruj się</span>
        <form>
          <div className="register-page__form--flex register-page__form--margin">
            <div className="register-page__form--half-width">
              <label htmlFor="name" className="register-page__form--label">
                Podaj imię
              </label>
              <br />
              <input type="text" id="name" className="input-style" />
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
            <input type="text" className="input-style" id="username" />
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
            <input type="text" className="input-style" id="email" />
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
              <label className="register-page__form--label" htmlFor="password">
                Podaj hasło
              </label>
              <br />
              <input type="password" className="input-style" id="password" />
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
  );
};

export default RegisterPage;
