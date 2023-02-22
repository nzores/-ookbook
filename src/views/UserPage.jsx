const React = require('react');

const Layout = require('./Layout');

function UserPage(props) {
  const { plainCoockbooks: coockbook } = props;
  return (
    <Layout>
    <h1>USERPAGE</h1>
    </Layout>
  );
}
module.exports = UserPage;
