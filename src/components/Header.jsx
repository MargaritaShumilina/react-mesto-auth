import { Routes, Route, useNavigate, Link } from "react-router-dom";
import logo from "../blocks/logo/img/logo.svg";

function Header(props) {
  function signOut() {
    localStorage.removeItem("jwt");
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <div>
        <Routes>
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="">
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="">
                Зарегистрироваться
              </Link>
            }
          />
          <Route
            path="/"
            element={
              <Link to="/sign-in" onClick={props.isSignOut} className="">
                Выйти
              </Link>
            }
          />
        </Routes>
      </div>
      <p className="my-profile__value">{props.userData}</p>
    </header>
  );
}

export default Header;
