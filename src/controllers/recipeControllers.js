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
  const recipeID = req.params.recipeId;
  // console.log('recipeID: ', recipeID);
  // запрос к апи

  const response = await fetch(
    ` https://api.spoonacular.com/recipes/${recipeID}/information?includeNutrition=false&apiKey=${myApiKey}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const oneRecipe = await response.json()

  // let obj;
  // const file = fs.readFile(
  //   './src/controllers/response-recipes1-example.json',
  //   'utf8',
  //   (err, data) => {
  //     // console.log('data: ', data);
  //     if (err) throw err;
  //     obj = data;
  //   }
  // );
  // const newObj = JSON.parse(await file);

  const igredients = oneRecipe.extendedIngredients.map(
    (el) => el.original
  );

  const oneRecipeData = {
    id: oneRecipe.id,
    title: oneRecipe.title,
    readyInMinutes: oneRecipe.readyInMinutes,
    servings: oneRecipe.servings,
    image: oneRecipe.image,
    instructions: oneRecipe.instructions,
    ingredientsCount: oneRecipe.extendedIngredients.length
  }
  console.log(oneRecipeData);
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
