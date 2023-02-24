const React = require('react');

module.exports = function Login() {
  return (
    <div id="modalOne" className="modal">
      <div className="modal-content">
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white" id="loginmodal">
          <form name="login" id="loginformm">
            <a className="close">&times;</a>
            <h2 className="enter">Вход на сайт</h2>

            <div id='logindiv'>
              <label htmlFor="title-input" className="block mar-b-1">
                Имя пользователя
              </label>
              <input
                id="title-input"
                name="username"
                type="text"
                tabIndex="1"
                className="title-input"
              />

              <label htmlFor="title-input" className="block mar-b-1">
                Пароль
              </label>
              <input
                id="title-input123"
                name="password"
                type="password"
                tabIndex="1"
                className="title-input"
              />
            </div>

            <input
              id="loginBtn"
              type="submit"
              value="Login"
              tabIndex="3"
              className="generalButton"
              // className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
};