const React = require('react');
const Layout = require('./Layout');

module.exports = function Error({ message, error, username }) {
  return (
    <Layout username={username}>
      <h1>{message}</h1>
      <h2>{error.status}</h2>
      <pre>{error.stack}</pre>
      {username ? (
        <a
          id="writeBtn"
          href="/entries/new"
          className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center"
        >
          Попробуйте снова
        </a>
      ) : (
        <a
          id="writeBtn"
          href="/entries"
          className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center"
        >
          Главная страница
        </a>
      )}
    </Layout>
  );
};
