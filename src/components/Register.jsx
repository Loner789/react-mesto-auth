//IMPORTS:
import React, { useState } from "react";
import AuthPage from "./AuthPage";

function Register({ onRegister }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState((old) => ({ ...old, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = state;

    onRegister(email, password);
  }

  return (
    <div className="register">
      <AuthPage
        formName="register"
        onSubmit={handleSubmit}
        title="Регистрация"
        btnText="Зарегистрироваться"
      >
        <label className="popup__container-field">
          <input
            type="email"
            id="email"
            name="email"
            className="popup__container-input popup__container-input_type_login"
            placeholder="Email"
            required
            minLength="6"
            maxLength="40"
            onChange={handleChange}
            value={state.email}
          />
          <span className="popup__container-input-error"></span>
        </label>
        <label className="popup__container-field">
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="on"
            className="popup__container-input popup__container-input_type_login"
            placeholder="Пароль"
            required
            minLength="6"
            maxLength="40"
            onChange={handleChange}
            value={state.password}
          />
          <span className="popup__container-input-error"></span>
        </label>
      </AuthPage>
    </div>
  );
}

export default Register;
