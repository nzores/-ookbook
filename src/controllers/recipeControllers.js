const express = require('express');
const fs = require('fs').promises;
const render = require('../lib/renderTemplate');
const RecipePage = require('../views/Recipe');

const { TemporalRecipe, Favourite } = require('../../db/models');

exports.Recipe = async (req, res) => {
  const userid = req.session?.user?.id;
  const username = req.session?.user?.name;

  const myApiKey = process.env.MY_API_KEY;
  // тут нужно указать сколько рецептов мы хотим получить за один запрос
  const dishId = 10;
  // запрос к апи

  // const response = await fetch(
  //   ` https://api.spoonacular.com/recipes/${dishId}/information?includeNutrition=false&apiKey=${myApiKey}`,
  //   {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   }
  // );

  let obj;
  const file = fs.readFile(
    './src/controllers/response-recipes1-example.json',
    'utf8',
    (err, data) => {
      // console.log('data: ', data);
      if (err) throw err;
      obj = data;
    }
  );
  const newObj = JSON.parse(await file);

  const igredients = newObj.recipes[0].extendedIngredients.map(
    (el) => el.original
  );

  const oneRecipeData = newObj.recipes.map((el) => ({
    id: el.id,
    title: el.title,
    readyInMinutes: el.readyInMinutes,
    servings: el.servings,
    image: el.image,
    instructions: el.instructions,
    ingredientsCount: el.extendedIngredients.length
  }));
  const recipesFav = await Favourite.findAll();

  render(
    RecipePage,
    {
      oneRecipeData,
      igredients,
      userid,
      username,
      recipesFav,
    },
    res
  );
};
