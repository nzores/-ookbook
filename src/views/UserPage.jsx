const React = require('react');

const Layout = require('./Layout');

function UserPage({ username, recipes }) {
  return (
    <Layout username={username}>
      <h1>USERPAGE</h1>
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
                  data-recipe={el.recipeId}
                >
                  <img src={el.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <a href={`/recipe/${el.recipeId}`}>
                      <h2 className="card-title">{el.name}</h2>
                    </a>
                    <p>Count ingrediants {el.ingredientsCount} unit/s</p>
                    <p>Cooking time {el.cookingTime} min</p>
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
      </div>
    </Layout>
  );
}
module.exports = UserPage;
