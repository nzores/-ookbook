const fs = require('fs').promises;
const render = require('../lib/renderTemplate');
const Main = require('../views/Main');
require('dotenv').config();
const { TemporalRecipe, Favourite } = require('../../db/models');

exports.MainPage = async (req, res) => {
  // сюда нужно передавтаь свой ключ для доступа в апи
  const myApiKey = process.env.MY_API_KEY;
  // тут нужно указать сколько рецептов мы хотим получить за один запрос
  const itemsPerRequest = 10;
  // запрос к апи

  try {
    const allRecords = await TemporalRecipe.findAll();
    if (allRecords.length > 0) {
      const deleteRecipes = await TemporalRecipe.destroy({ truncate: true });
    }

    // const response = await fetch(
    //   `https://api.spoonacular.com/recipes/random?number=${20}&apiKey=${myApiKey}`,
    //   {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   }
    // );

    const userid = req.session?.user?.id;
    // const allData = await response.json();

    // const arrFromJson = allData.recipes;
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

    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 50) + 51;

    num2 = Math.min(num2, num1 + 20);
    num1 = Math.max(num1, num2 - 20);

    const arrFromJson = arrJson.slice(num1, num2);

    // const arrayForDBFavourite = arrFromJson.map((el) => {
    //   const arrIngredients = el.extendedIngredients;
    //   const readyIngredients = arrIngredients.map((elem) => elem.original);
    //   const ingredients = readyIngredients.join(', ');
    //   if (el.readyInMinutes === 45) {
    //     function generateRandomNumber() {
    //       return Math.floor(Math.random() * 26) + 20;
    //     }
    //     el.readyInMinutes = generateRandomNumber();
    //   }
    //   el = {
    //     name: el.title,
    //     ingredients,
    //     cookingTime: el.readyInMinutes,
    //     image: el.image,
    //     userId: userid,
    //     recipeId: el.id,
    //   };
    //   return el;
    // });

    // получение массива для записи в дб поступающих из апишки данных

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

    const clearRecipes = recipes.filter((el) => el.image !== undefined);

    clearRecipes.forEach(async (el) => {
      await TemporalRecipe.create(el);
    });
    const recipesFav = await Favourite.findAll();

    render(Main, { clearRecipes, userid, recipesFav }, res);
  } catch (error) {
    console.error(error);
  }
};

// //! на примере одного рецепта

// const {
//   extendedIngredients,
//   id,
//   title,
//   readyInMinutes,
//   image,
//   instructions,
// } = newObj.recipes[0];
// const newArr = extendedIngredients.map((el) => el.original);
// const ingredients = newArr.join(', ');
// //! теперь можно записывать в базу

// получение массива для записи в дб вместе с текстом инструкций на примере 100 рецептов

// записываем результат ответа от апи
// const data = await response.json();

// console.log(data);
