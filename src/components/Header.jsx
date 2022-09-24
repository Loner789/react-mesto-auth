// IMPORTS:
import React from "react";
import logo from "../images/icon_logo.svg";
import UserInfo from "./UserInfo";
import { Link, useLocation } from "react-router-dom";

// HEADER COMPONENT:
function Header({ loggedIn, email, onSignOut, onClick, isClicked }) {
  // Constants
  const location = useLocation();

  return (
    <header
      className={`header ${
        loggedIn && "header_type_logged-in"
      } header_place_mesto`}
    >
      <div className="header__logo-wrapper">
        <a href="https://wikiway.com/russia/" target="blank">
          <img
            src={logo}
            alt="Логотип Россия."
            className="logo"
          />
        </a>
        {loggedIn && (
          <button
            type="button"
            className={`header__burger-btn ${
              isClicked && "header__burger-btn_active"
            }`}
            onClick={onClick}
          ></button>
        )}
      </div>
      {loggedIn ? (
        <UserInfo
          email={email}
          loggedIn={loggedIn}
          onSignOut={onSignOut}
          isClicked={isClicked}
        />
      ) : (
        <>
          {location.pathname === "/sign-in" ? (
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          ) : (
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
