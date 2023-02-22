const render = require('../lib/renderTemplate');
const Main = require('../views/Main');
require('dotenv').config();

exports.MainPage = async (req, res) => {

//сюда нужно передавтаь свой ключ для доступа в апи
  const myApiKey = process.env.MY_API_KEY
  //тут нужно указать сколько рецептов мы хотим получить за один запрос
  const itemsPerRequest = 10
//запрос к апи
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${20}&apiKey=${myApiKey}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });

  // записываем результат ответа от апи
  const data = await response.json();
  const userid = req.session?.user?.id;
  console.log(data)
  render(Main, { userid }, res);
}


