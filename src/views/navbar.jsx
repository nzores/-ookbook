const React = require('react');

module.exports = function Navbar({ username, userId }) {
  return (
    <nav className="clearfix mar-b-1" id="navbar">
      <ul className="no-bullets no-margin no-padding right">
        <li className="pipe-separate t-light-green left">
          <button className="nav-link" id="homeBtn" type="button">
            Главная
          </button>
        </li>
        {username ? (
          <>
            <li className="pipe-separate t-light-green left">
              <a className="nav-link" id="privateNote" href={`/user/${userId}`}>
                Избранное
              </a>
            </li>
            <li className="pipe-separate t-light-green left">
              <p className="nav-link">Привет, {username}</p>
            </li>
            <li className="pipe-separate t-light-green left">
              <button className="nav-link" id="exitBtn" type="button">
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="pipe-separate t-light-green left">
              <button className="nav-link" id="entryBtn" type="button">
                Войти
              </button>
            </li>
            <li className="pipe-separate t-light-green left">
              <button className="nav-link" id="regBtn" type="button">
                Регистрация
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
