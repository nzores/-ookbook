/* eslint-disable max-len */
const express = require('express');
const fs = require('fs').promises;

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

router.get('/recipes/more', async (req, res) => {
  try {
    let obj;
    const file = fs.readFile(
      './src/controllers/response-recipes100-food.json',
      'utf8',
      (err, data) => {
        // console.log('data: ', data);
        if (err) throw err;
        obj = data;
      }
    );
    const newObj = JSON.parse(await file);

    const arrJson = newObj.recipes;

    let num1 = Math.floor(Math.random() * 51); // generates a random integer between 0 and 50 inclusive
    let num2 = Math.floor(Math.random() * 50) + 51; // generates a random integer between 51 and 100 inclusive
    // const lag = Math.floor(Math.random() * 21); // generates a random integer between 0 and 20 inclusive

    num2 = Math.min(num2, num1 + 20); // sets num2 to be within 20 of num1 if it would otherwise exceed that limit
    num1 = Math.max(num1, num2 - 20);

    const arrFromJson = arrJson.slice(num1, num2);

    const recipes = arrFromJson.map((el) => {
      if (el.readyInMinutes === 45) {
        function generateRandomNumber() {
          return Math.floor(Math.random() * 26) + 20;
        }
        el.readyInMinutes = generateRandomNumber();
      }
      el = {
        name: el.title,
        ingredientsCount: el.extendedIngredients.length,
        cookingTime: el.readyInMinutes,
        image: el.image,
        recipeId: el.id,
      };
      return el;
    });
    const allRecords = await TemporalRecipe.findAll({
      attributes: [
        'name',
        'ingredientsCount',
        'cookingTime',
        'image',
        'recipeId',
      ],
      raw: true,
      nest: true,
    });
    // console.log('allRecords: ', allRecords);

    const nonDuplicates = recipes.filter(
      (newOb) => !allRecords.some((oldOb) => oldOb.recipeId === newOb.recipeId)
    );

    nonDuplicates.forEach(async (el) => {
      await TemporalRecipe.create(el);
    });

    res.json(nonDuplicates);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
