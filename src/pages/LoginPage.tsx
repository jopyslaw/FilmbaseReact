import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page__img">
      <div className="login-page__container">
        <div className="login-page">
          <div className="login-page__form">
            <div className="login-page__form--text">
              <span>Zaloguj się</span>
            </div>
            <div className="login-page__form--style">
              <form className="login-page__form--width">
                <div className="field-width">
                  <label htmlFor="username" className="login-page__form--label">
                    Podaj nazwę użytkownika
                  </label>{" "}
                  <br />
                  <input type="text" id="username" className="input-field" />
                  {/*<div className="validator">
                    <span className="validator--color">
                      To pole nie może być puste
                    </span>
                  </div>*/}
                </div>
                <div className="field-width">
                  <label htmlFor="password" className="login-page__form--label">
                    Podaj hasło
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    id="password"
                    className="input-field"
                  />
                  {/*<div className="validator">
                    <span className="validator--color">
                      To pole nie może być puste
                    </span>
                    <span className="validator--color">
                      Podane hasło musi zawierać minimum 8 znaków, jedną dużą
                      literę, jedną małą literę, jedną liczbę i jeden znak
                      specjalny
                    </span>
                  </div>*/}
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
