const express = require('express');

const router = express.Router();

const { MainPage } = require('../controllers/MainControllers');

const { TemporalRecipe, Sequelize } = require('../../db/models');

router.get('/', MainPage);

let countRequest = 0;
router.get('/recipes/showlist/:sorted', async (req, res) => {
  const { sorted } = req.params;
  try {
    if (sorted === 'sortByIngredients') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['ingredientsCount', 'DESC']],
        });
        res.json(sortedByIngredients);
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['ingredientsCount', 'ASC']],
        });
        res.json(sortedByIngredients);
      }
    }
    if (sorted === 'sortByCooking') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['cookingTime', 'DESC']],
        });
        res.json(sortedByIngredients);
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['cookingTime', 'ASC']],
        });
        res.json(sortedByIngredients);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
