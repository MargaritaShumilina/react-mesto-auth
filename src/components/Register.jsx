import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div className="main-content">
      <div className="main-form form-registration">
        <h1 className="main-form__heading form-registration__heading">
          Регистрация
        </h1>
        <form className="main-form__block form-registration__block">
          <fieldset className="main-form__inputs form-registration__inputs">
            <input
              type="email"
              className="main-form__input form-registration__input form-registration-email"
              placeholder="Email"
              required
              id="form-registration-email"
              maxLength="40"
              minLength="5"
            />
            <input
              type="password"
              className="main-form__input form-registration__input form-registration-password"
              placeholder="Пароль"
              required
              id="form-registration-password"
              maxLength="40"
              minLength="5"
            />
          </fieldset>
          <button className="main-form__button form-registration__button">
            Зарегистрироваться
          </button>
        </form>
        <p className="main-form__another-way">
          Уже зарегистрированы?&nbsp;
          <Link
            to="sign-in"
            className="main-form__login-link"
            onClick={props.onOpenStatusPopup}
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
