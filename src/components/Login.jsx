// IMPORTS:
import React, { useState } from "react";
import AuthPage from "./AuthPage";

// Initial data for state-variable
const initValues = {
  email: "",
  password: "",
};

// LOGIN COMPONENT:
function Login({ onLogin }) {
  // Constants
  const [state, setState] = useState(initValues);

  // Functions
  function handleChange(e) {
    const { name, value } = e.target;
    setState((old) => ({ ...old, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = state;

    if (!email || !password) return;

    onLogin(email, password).then(() => setState(initValues))
  }

  return (
    <div className="login">
      <AuthPage
        formName="login"
        onSubmit={handleSubmit}
        title="Вход"
        btnText="Войти"
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

export default Login;
