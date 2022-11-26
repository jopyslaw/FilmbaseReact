import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <img src='../src/assets/img/logo.png' alt="logo strony" />
            <a>
                <span className="navbar__logo--text">Filmbase</span>
            </a>
        </div>
        <div className="navbar__buttons">
            <a>
                <div className="navbar__button">
                    Zarejstruj się
                </div>
            </a>
            <a>
                <div className="navbar__button">
                    Zaloguj się
                </div>
            </a>
            <div className="navbar__button">
                Wyloguj się
            </div>
        </div>
    </div>
  )
}

export default Navbar