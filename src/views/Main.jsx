const React = require('react');

const Layout = require('./Layout');
const Registration = require('./Register');
const Login = require('./Login');
const Navbar = require('./Navbar');

function Main({ username, recipes, userid }) {
  return (
    <Layout>
      <Navbar username={username} userid={userid} />
      <h1>Main Page</h1>
      <div id="sortButtons">
        <button id="sortByIngredients">sort by count inredients</button>
        <button id="sortByCooking">sort by cooking time</button>
      </div>
<<<<<<< HEAD
      <div id="containerRecipes">
        {recipes &&
          recipes.map((el) => (
            <div key={el.recipeId} data-recipe={el.recipeId}>
              <h2>{el.name}</h2>
              <h2>count ingrediants {el.ingredientsCount} unit/s</h2>
              <h2>cooking time {el.cookingTime} min</h2>
              {/* <h3>{el.image}</h3> */}
              <a href={`/recipe/${el.recipeId}`}>click</a>
            </div>
          ))}
=======
      <div className="container text-center">
        <div className="row align-items-start" id="containerRecipes">
          {recipes
            && recipes.map((el) => (
              <div className="col-sm">
                <div
                  className="card"
                  key={el.recipeId}
                  style={{ width: '18rem' }}
                  data-recipe={el.recipeId}
                >
                  <img src={el.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    {/* <h2 class="card-title" >{el.name}</h2> */}
                    <a href={`/recipe/${el.recipeId}`}>
                      <h2 className="card-title">{el.name}</h2>
                    </a>
                    {/* <h2>{el.name}</h2> */}
                    <p>
                      Count ingrediants
                      {' '}
                      {el.ingredientsCount}
                      {' '}
                      unit/s
                    </p>
                    <p>
                      Cooking time
                      {' '}
                      {el.cookingTime}
                      {' '}
                      min
                    </p>
                    {/* <h3>{el.image}</h3> */}
                    <button type="button" className="btn btn-outline-primary">
                      Unlike
                    </button>
                    <button type="button" className="btn btn-primary">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div id="spinner" className="spinner">
          <div />
        </div>
>>>>>>> 221fb7b57883ade198b739497abce2c78b96ef64
      </div>

      <div id="modalWin">
        <Registration />
        <Login />
      </div>
    </Layout>
  );
}
module.exports = Main;
