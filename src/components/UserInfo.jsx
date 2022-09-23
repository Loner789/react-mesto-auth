// IMPORTS:
import React from "react";
import { Link } from "react-router-dom";

function UserInfo({ loggedIn, email, onLogout }) {
  return (
    <div className="header__user-info">
      <p className="header__email">{email}</p>
      <Link
        to="sign-in"
        className={`header__link ${loggedIn && "header__link_style_darkened"}`}
        onClick={onLogout}
      >
        Выйти
      </Link>
    </div>
  );
}

export default UserInfo;
