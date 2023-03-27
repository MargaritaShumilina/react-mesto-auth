import React from "react";

function Login(props) {
  return (
    <div className="main-content">
      <div className="main-form form-login">
        <h1 className="main-form__heading form-login__heading">Вход</h1>
        <form className="main-form__block form-login__block">
          <fieldset className="main-form__inputs form-login__inputs">
            <input
              type="email"
              className="main-form__input form-login__input form-login-email"
              placeholder="Email"
              required
              id="form-login-email"
              maxLength="40"
              minLength="5"
            />
            <input
              type="password"
              className="main-form__input form-login__input form-login-password"
              placeholder="Пароль"
              required
              id="form-login-password"
              maxLength="40"
              minLength="5"
            />
          </fieldset>
          <button className="main-form__button form-login__button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
