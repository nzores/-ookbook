const React = require('react');

const Layout = require('./Layout');

const Registration = require('./Register');

const Login = require('./Login');

function Main(props) {
  const { plainCoockbooks: coockbook } = props;
  return (
    <Layout>
      {coockbook && coockbook.map(({ id, title, text }) => (
        <div key={id} id={id}>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      ))}
      <Registration />
      <Login />
    </Layout>
  );
}
module.exports = Main;
