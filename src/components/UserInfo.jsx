// IMPORTS:
import React from "react";
import { Link } from "react-router-dom";

// USER-INFO COMPONENT:
function UserInfo({ loggedIn, email, onSignOut }) {
  return (
    <div className="header__user-info">
      <p className="header__email">{email}</p>
      <Link
        to="sign-in"
        className={`header__link ${loggedIn && "header__link_style_darkened"}`}
        onClick={onSignOut}
      >
        Выйти
      </Link>
    </div>
  );
}

export default UserInfo;
