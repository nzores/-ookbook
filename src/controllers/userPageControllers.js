const render = require('../lib/renderTemplate');

const UserPage = require('../views/UserPage');

const { TemporalRecipe, Favourite, Sequelize } = require('../../db/models');

exports.UserPage = async (req, res) => {
  const recipes = await Favourite.findAll();
  

  render(UserPage, { recipes }, res);
};
