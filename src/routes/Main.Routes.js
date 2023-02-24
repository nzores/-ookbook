/* eslint-disable max-len */
const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

const { MainPage } = require('../controllers/MainControllers');

const { TemporalRecipe, Favourite, Sequelize } = require('../../db/models');

router.get('/', MainPage);

let countRequest = 0;
router.get('/recipes/showlist/:sorted', async (req, res) => {
  const { sorted } = req.params;
  try {
    const recipesFav = await Favourite.findAll();

    const username = req.session?.user?.name;
    if (sorted === 'sortByIngredients') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['ingredientsCount', 'DESC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['ingredientsCount', 'ASC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
    }
    if (sorted === 'sortByCooking') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['cookingTime', 'DESC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await TemporalRecipe.findAll({
          order: [['cookingTime', 'ASC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
    }

    if (sorted === 'sortByIngredientsFav') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await Favourite.findAll({
          order: [['ingredientsCount', 'DESC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await Favourite.findAll({
          order: [['ingredientsCount', 'ASC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
    }
    if (sorted === 'sortByCookingFav') {
      countRequest += 1;
      if (countRequest % 2 !== 0) {
        const sortedByIngredients = await Favourite.findAll({
          order: [['cookingTime', 'DESC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
      if (countRequest % 2 === 0) {
        const sortedByIngredients = await Favourite.findAll({
          order: [['cookingTime', 'ASC']],
        });
        res.json({ sortedByIngredients, recipesFav, username });
      }
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/recipes/more', async (req, res) => {
  try {
    const myApiKey = process.env.MY_API_KEY;

    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=${20}&apiKey=${myApiKey}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const userid = req.session?.user?.id;
    const allData = await response.json();

    const arrFromJson = allData.recipes;

    // let obj;
    // const file = fs.readFile(
    //   './src/controllers/response-recipes100-food.json',
    //   'utf8',
    //   (err, data) => {
    //     // console.log('data: ', data);
    //     if (err) throw err;
    //     obj = data;
    //   }
    // );
    // const newObj = JSON.parse(await file);

    // const arrJson = newObj.recipes;

    // let num1 = Math.floor(Math.random() * 51);
    // let num2 = Math.floor(Math.random() * 50) + 51;

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
      (newOb) =>
        !allRecords.some((oldOb) => oldOb.recipeId === newOb.recipeId) &&
        newOb.image !== undefined
    );

    nonDuplicates.forEach(async (el) => {
      await TemporalRecipe.create(el);
    });
    const allRecordsFinal = await TemporalRecipe.findAll();
    const recipesFav = await Favourite.findAll();

    const username = req.session?.user?.name;

    res.json({ nonDuplicates, allRecordsFinal, recipesFav, username });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
