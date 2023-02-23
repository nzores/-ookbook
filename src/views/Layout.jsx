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

        <title>Recipes</title>
      </head>
      <Navbar username={username} userid={userid} />
      <body>
        {children}
        <div id="modalWin">
          <Registration />
          <Login />
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
