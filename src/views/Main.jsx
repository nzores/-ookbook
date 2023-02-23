const React = require('react');

const Layout = require('./Layout');
const Registration = require('./Register');
const Login = require('./Login');
const Navbar = require('./Navbar');

function Main({ username, recipes, userid }) {
  console.log('username: ', username);
  return (
    <Layout>
      <Navbar username={username} userid={userid} />
      <h1>Main Page</h1>
      <div id="sortButtons">
        <button id="sortByIngredients">sort by count inredients</button>
        <button id="sortByCooking">sort by cooking time</button>
      </div>
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
      </div>
      <div id="modalWin">
        <Registration />
        <Login />
      </div>
      {/* <div className="d-flex justify-content-between">
        {coockbook.map((el) => (
          <Card
            id="deckblock"
            style={{
              backgroundColor: "red",
              backgroundAttachment: "fixed",
            }}
          >
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title style={{ cursor: "default" }}>
                {" "}
                <a
                  href={`/recipe/${el.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {el.name}
                </a>
              </Card.Title>
              <Card.Text style={{ cursor: "default" }} />
            </Card.Body>
          </Card>
        ))}
      </div> */}
    </Layout>
  );
}
module.exports = Main;
