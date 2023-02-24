const React = require('react');
const Navbar = require('./Navbar');
const Registration = require('./Register');
const Login = require('./Login');

function Layout({ children, username, userid }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/application.js" />

        <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js" />
        <script src="/js/google-translate.js" />
        <script src="//translate.google.com/translate_a/element.js?cb=TranslateInit" />


        <title>Recipes</title>
      </head>
      <Navbar username={username} userid={userid} />
      <body>
        {children}
        <div id="modalWin">
          <Registration />
          <Login />
        </div>
        <div class="language">
   <img src="/image/lang__ru.png" alt="ru" data-google-lang="ru" class="language__img"/>
   <img src="/image/lang__en.png" alt="en" data-google-lang="en"/>
</div>
      </body>
    </html>
  );
}

module.exports = Layout;
