const React = require('react');

const Layout = require('./Layout');
const Registration = require('./Register');
const Login = require('./Login');
const Navbar = require('./navbar');

function Main({ coockbook }) {
  return (
    <Layout>
      <Navbar />
      <h1>Main Page</h1>
      {coockbook &&
        coockbook.map(({ id, title, text }) => (
          <div key={id} id={id}>
            <h2>{title}</h2>
            <h3>{text}</h3>
          </div>
        ))}
      <div id="modalWin">
        <Registration />
        <Login />
      </div>
    </Layout>
  );
}
module.exports = Main;
