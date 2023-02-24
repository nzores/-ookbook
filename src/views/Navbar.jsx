const React = require('react');

module.exports = function Navbar({ children, username, userid }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <a className="navbar-brand" href="#">
        <img
          src="/favicon.ico"
          height="50"
          alt="Logo"
          loading="lazy"
          id="homeBtn"
        />

        Main page
      </a>
      {username ? (
        <p className="">
          Привет,
          {' '}
          {username}
        </p>
      ) : <></>}
      <div className="container-fluid justify-content-end">
        <ul className="navbar-nav  ">
          {username ? (
            <>
              <li className="navbar-nav ">
                <a
                  className="navbar-brand"
                  id="privateNote"
                  href={`/user/${userid}`}
                >
                  Избранное
                </a>
              </li>
              <li className="navbar-nav ">
                <a className="navbar-brand text-danger" style={{ color: 'black' }} href="#" id="exitBtn">
                  Выйти
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-nav ">
                <a className="navbar-brand " href="#" id="entryBtn">
                  Войти
                </a>
              </li>
              <li className="navbar-nav ">
                <a className="navbar-brand" href="#" id="regBtn">
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
