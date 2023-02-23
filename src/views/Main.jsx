const React = require('react');

const Layout = require('./Layout');

function Main({ username, recipes, userid }) {
  return (
    <Layout username={username} userid={userid}>
      <h1>Main Page</h1>
      <div id="sortButtons">
        <button id="sortByIngredients">sort by count inredients</button>
        <button id="sortByCooking">sort by cooking time</button>
      </div>
      <div className="container text-center">
        <div className="row align-items-start" id="containerRecipes">
          {recipes &&
            recipes.map((el) => (
              <div className="col-sm">
                <div
                  className="card"
                  key={el.recipeId}
                  style={{ width: '18rem' }}
                >
                  <img src={el.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <a href={`/recipe/${el.recipeId}`}>
                      <h2 className="card-title">{el.name}</h2>
                    </a>
                    <p>Count ingrediants {el.ingredientsCount} unit/s</p>
                    <p>Cooking time {el.cookingTime} min</p>
                    {/* <button type="button" className="btn btn-outline-primary">
                      Unlike
                    </button> */}
                    <button
                      type="button"
                      data-recipe={el.recipeId}
                      data-timecook={el.cookingTime}
                      // className="btn btn-primary"
                      className="btn btn-primary disabled"
                      data-bs-toggle="button"
                      aria-pressed="false"
                    >
                      Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div id="spinner" className="spinner">
          <div />
        </div> */}
      </div>
    </Layout>
  );
}
module.exports = Main;
