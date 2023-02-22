const render = require("../lib/renderTemplate");

const UserPage = require("../views/UserPage");

exports.UserPage = (req, res) => {
  render(UserPage, {}, res);
};
