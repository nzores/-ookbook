const React = require('react');

const Layout = require('./Layout');

function Recipe(props) {
  const { plainCoockbooks: coockbook } = props;
  return (
    <Layout>
    <h1>RECIPE PAGE</h1>
    </Layout>
  );
}
module.exports = Recipe;
