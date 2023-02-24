const express = require('express');

const router = express.Router();

const { UserPage } = require('../controllers/userPageControllers');
const { TemporalRecipe, Favourite, Sequelize } = require('../../db/models');

router.get('/:userid', UserPage);

router.post('/addFavourite', async (req, res) => {
  const { recipeId, cookingTime, ingredients } = req.body;

  const myApiKey = process.env.MY_API_KEY;

  const response = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0ba18b59ebmshe964789696d2bdfp1eecdejsna35aeedff2a5',
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    }
  );
  const oneRecipe = await response.json();
  const { extendedIngredients } = oneRecipe;
  const ingredintsText = extendedIngredients
    .map((el) => el.original)
    .join(', ');
  const oneFavourite = await Favourite.create({
    name: oneRecipe.title,
    ingredients: ingredintsText,
    ingredientsCount: Number(ingredients),
    cookingTime: Number(cookingTime),
    instructions: oneRecipe.instructions,
    image: oneRecipe.image,
    userId: Number(req.session?.user?.id),
    recipeId: Number(recipeId),
  });
  res.json()
});

router.delete('/deleteFav', async (req, res) => {
  const { recipeId } = req.body;
  const userId = req.session?.user?.id;

  if (await Favourite.destroy({ where: { recipeId, userId } })) {
    res.json({ isDeleteSuccessful: true });
  } else {
    res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить запись из базы данных.',
    });
  }
});

module.exports = router;
