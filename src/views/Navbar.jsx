const React = require('react');

module.exports = function Navbar({ children, username, userid }) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
       <div class="container-fluid">
        <ul className="navbar-nav  ">
          <li className="navbar-nav ">
            <a className="navbar-brand" id="homeBtn" >
              Главная
            </a>
          </li>
          {username ? (
            <>
              <li className="navbar-nav">
                <a className="navbar-brand" id="privateNote" href={`/user/${userid}`}>
                  Избранное
                </a>
              </li>
              <li className="navbar-brand">
                <p className="">Привет, {username}</p>
              </li>
              <li className="navbar-nav">
                <a className="navbar-brand" id="exitBtn" >
                  Выйти
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-nav ">
                <a className="navbar-brand " id="entryBtn"  >
                  Войти
                </a>
              </li>
              <li className="navbar-nav">
                <a className="navbar-brand" id="regBtn" >
                  Регистрация
                </a>
              </li>
            </>
          )}
        </ul>
        </div>
      </nav>
  );
};
