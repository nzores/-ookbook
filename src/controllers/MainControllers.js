const render = require('../lib/renderTemplate');
const Main = require('../views/Main')

exports.MainPage = (req, res) => {
  render(Main, {}, res);
}


