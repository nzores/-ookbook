const fs = require('fs').promises;
const render = require('../lib/renderTemplate');
const Main = require('../views/Main');
require('dotenv').config();

exports.MainPage = async (req, res) => {
  // сюда нужно передавтаь свой ключ для доступа в апи
  const myApiKey = process.env.MY_API_KEY;
  // тут нужно указать сколько рецептов мы хотим получить за один запрос
  const itemsPerRequest = 10;
  // запрос к апи

  // const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${20}&apiKey=${myApiKey}`, {
  //   method: 'GET',
  //   headers: {'Content-Type': 'application/json'}
  // });
  const userid = req.session?.user?.id;

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

  const arrFromJson = newObj.recipes;

  //! на примере одного рецепта

  const {
    extendedIngredients,
    id,
    title,
    readyInMinutes,
    image,
    instructions,
  } = newObj.recipes[0];
  const newArr = extendedIngredients.map((el) => el.original);
  const ingredients = newArr.join(', ');
  //! теперь можно записывать в базу



  // получение массива для записи в дб поступающих из апишки данных

  const arrayForDBTemporal = arrFromJson.map((el) => {
    el = {
      name: el.title,
      ingredientsCount: el.extendedIngredients.length,
      cookingTime: el.readyInMinutes,
      image: el.image,
      recipeId: el.id,
    };
    return el;
  });


  // получение массива для записи в дб вместе с текстом инструкций на примере 100 рецептов

  const arrayForDBFavourite = arrFromJson.map((el) => {
    const arrIngredients = el.extendedIngredients;
    const readyIngredients = arrIngredients.map((elem) => elem.original);
    const ingredients = readyIngredients.join(', ');
    el = {
      name: el.title,
      ingredients,
      cookingTime: el.readyInMinutes,
      image: el.image,
      userId: userid,
      recipeId: el.id,
    };
    return el;
  });
  console.log('arrayForDBFavourite: ', arrayForDBFavourite);
  


  // записываем результат ответа от апи
  // const data = await response.json();
  
  // console.log(data);
  render(Main, { userid }, res);
};
