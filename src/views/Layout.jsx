const React = require('react');
const Navbar = require('./Navbar');

function Layout({ children,username,userid }) {
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
        <script defer src="/js/application.js" />
        <script defer src="/css/style.css" />

        <title>Document</title>
      </head>
      <Navbar className="d-flex justify-content-center" username={username} userid={userid}/>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
