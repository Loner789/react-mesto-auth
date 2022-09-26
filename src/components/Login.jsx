// IMPORTS:
import React from "react";
import AuthPage from "./AuthPage";
import { useForm } from "../hooks/useForm";

// Initial data for state-variable
const initValues = {
  email: "",
  password: "",
};

// LOGIN COMPONENT:
function Login({ onLogin }) {
  // Constants
  const { values, handleChange, setValues } = useForm(initValues);

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = values;

    if (!email || !password) return;

    onLogin(email, password).then(() => setValues(initValues));
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
            value={values.email}
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
            value={values.password}
          />
          <span className="popup__container-input-error"></span>
        </label>
      </AuthPage>
    </div>
  );
}

export default Login;
