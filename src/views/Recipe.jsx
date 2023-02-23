const React = require("react");

const Layout = require("./Layout");

function Recipe({ oneRecipeData,igredients , username, userid}) {
  // const { oneRecipeData,igredients} = props;
  return (
    <Layout username={username} userid={userid}>

        <div class="container-fluid">
        <div class="card mx-auto col-md-6 col-10 mt-5 pt-4">
        <h1 className="food">{oneRecipeData[0].title}</h1>
          <i className="fa fa-clock-o">cooking time : { oneRecipeData[0].readyInMinutes}</i>
          <i className="fa fa-users"> servings: {oneRecipeData[0].servings}</i>
          <img src={oneRecipeData[0].image} class="img-fluid" alt="..."></img>
          <div className="stars">
            <ul>
              {igredients.map((el) => <li>{el}</li>)}
            </ul>
          </div>
          <p className="info">
            {oneRecipeData[0].instructions}
          </p>
        </div>
        </div>
    </Layout>
  );
}
module.exports = Recipe;
