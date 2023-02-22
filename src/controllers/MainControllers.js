const render = require('../lib/renderTemplate');
const Main = require('../views/Main');

exports.MainPage = (req, res) => {
  // const username = req.session?.user?.name;
  const userid = req.session?.user?.id;
  // console.log('username: ', username);
  const coockbook = [];
  render(Main, { userid, coockbook }, res);
};
