const render = require("../lib/renderTemplate");

const RecipePage = require("../views/Recipe");

exports.Recipe = (req, res) => {
  render(RecipePage, {}, res);
};
