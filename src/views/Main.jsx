const React = require('react');

const Layout = require('./Layout');
const Registration = require('./Register');
const Login = require('./Login');
const Navbar = require('./Navbar');

function Main({ username, recipes, userid }) {
  console.log('username: ', username);
  return (
    <Layout username={username} userid={userid}>
      {/* <Navbar username={username} userid={userid} /> */}
      <h1>Main Page</h1>
      <div id="sortButtons">
        <button id="sortByIngredients">sort by count inredients</button>
        <button id="sortByCooking">sort by cooking time</button>
      </div>
      <div class="container text-center" id="containerRecipes">
      <div class="row align-items-start">
        {recipes &&
          recipes.map((el) => (
            <div class="col-sm">
            <div class="card" key={el.recipeId} style={{width: "18rem"}} data-recipe={el.recipeId}>
      <img src={el.image}  class="card-img-top"
        alt="" />
      <div class="card-body">
        {/* <h2 class="card-title" >{el.name}</h2> */}
        <a href={`/recipe/${el.recipeId}`}><h2 class="card-title" >{el.name}</h2></a>
        {/* <h2>{el.name}</h2> */}
        <p>Count ingrediants {el.ingredientsCount} unit/s</p>      
        <p>Cooking time {el.cookingTime} min</p>
        {/* <h3>{el.image}</h3> */}
        <button type="button" class="btn btn-outline-primary">Unlike</button>
        <button type="button" class="btn btn-primary">Like</button>
        
      </div>
    </div>
    </div>
          ))}
          </div>
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
