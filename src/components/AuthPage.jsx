// IMPORTS:
import React from 'react';
import { Link } from "react-router-dom";

function AuthPage({ formName, onSubmit, title, children, btnText }) {
  return (
    <section className="auth-page">
      <form
        className="auth-page__form"
        name={formName}
        onSubmit={onSubmit}
      >
        <h2 className="auth-page__title">{title}</h2>
        {children}
        <button type="submit" className="auth-page__btn">
          {btnText}
        </button>
        {formName === "register" && (
          <Link className="auth-page__link" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        )}
      </form>
    </section>
  );
}

export default AuthPage;
