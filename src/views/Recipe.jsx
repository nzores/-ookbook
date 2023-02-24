/* eslint-disable no-nested-ternary */
const React = require('react');

const Layout = require('./Layout');

function Recipe({
  oneRecipeData, igredients, username, userid, recipesFav,
}) {
  // const { oneRecipeData,igredients} = props;
  // const countIngr = oneRecipeData[0].extendedIngredients
  // console.log('countIngr: ', oneRecipeData[0]);
  const strippedText = oneRecipeData.instructions.replace(/(<([^>]+)>)/ig, '');

  return (
    <Layout username={username} userid={userid}>
      <div
        className="container-fluid"
        id="recipeOne"
        data-recipe={oneRecipeData.id}
        data-timecook={oneRecipeData.readyInMinutes}
        data-ingredientsCount={oneRecipeData.ingredientsCount}
      >
        <div className="card mx-auto col-md-6 col-10 mt-5 pt-4">
          <h1 className="food">{oneRecipeData.title}</h1>
          <i className="fa fa-clock-o">
            cooking time :
            {' '}
            {oneRecipeData.readyInMinutes}
          </i>
          <i className="fa fa-users">
            {' '}
            servings:
            {' '}
            {oneRecipeData.servings}
          </i>
          <img src={oneRecipeData.image} className="img-fluid" alt="..." />
          <div className="stars">
            <ul>
              {igredients.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <p className="info">{strippedText}</p>
        </div>
        <div className="trashContRec" />
        {username ? (
          recipesFav.find(
            (elem) => elem.recipeId === oneRecipeData.id,
          ) ? (
            <>
              <svg className="heartRec" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  strokeWidth="0"
                  stroke="#FFF"
                  fill="#FF5353"
                />
              </svg>
              <div className="favInputRec" data-fav="true">
                {/* Удалить из Избранного */}
              </div>
            </>
            ) : (
              <>
                <svg className="heartRec" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    strokeWidth="20px"
                    stroke="#000"
                    fill="none"
                  />
                </svg>
                <div className="favInputRec" data-fav="false">
                  {/* Добавить в Избранное */}
                </div>
              </>
            )
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
}
module.exports = Recipe;
