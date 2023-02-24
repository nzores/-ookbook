/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
const message = document.createElement('p');

const navbar = document.getElementById('navbar');

const entryModalWindow = document.querySelector('#modalOne');
const regModalWindow = document.querySelector('#modalTwo');

const modalWin = document.querySelector('#modalWin');
const closeButton = document.querySelectorAll('.close');

const regButton = document.getElementById('registerForm');
const loginButton = document.getElementById('loginBtn');

const formReg = document.forms.signup;
const formLogin = document.forms.login;

const logindiv = document.getElementById('logindiv');
const signupdiv = document.getElementById('signupdiv');

const sortBtnParent = document.getElementById('sortButtons');
const sortBtnParentFav = document.getElementById('sortButtonsFav');

const recipesContainer = document.getElementById('containerRecipes');
const recipesContainerFav = document.getElementById('containerRecipesFav');

const recipeOnePage = document.getElementById('recipeOne');

recipeOnePage?.addEventListener('click', async (event) => {
  const recipeId = event.target.dataset.recipe;
  const cookingTime = event.target.dataset.timecook;
  const ingredients = event.target.dataset.ingredientscount;

  // if (recipeId) {
  //   const favourite = await fetch('/user/addFavourite', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ recipeId, cookingTime, ingredients }),
  //   });
  // }
  if (event.target.className === 'favInputRec') {
    // console.log('CLICK');
    const recipe_Id = event.target.parentNode.dataset.recipe;
    const cooking_Time = event.target.parentNode.dataset.timecook;
    const ingredientsNum = event.target.parentNode.dataset.ingredientscount;
    const property = event.target.parentNode;
    // console.log(event.target.dataset.fav);
    if (event.target.dataset.fav === 'true') {
      console.log('CLICK');
      console.log('1 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/deleteFav', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: recipe_Id }),
        });
        if (response.status === 200) {
          event.target.dataset.fav = 'false';
          property.querySelector('#favPath').attributes.fill.value = 'none';
          property.querySelector('#favPath').attributes['stroke-width'].value = '20px';
          //   event.target.textContent = 'Добавить в Избранное';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    } else {
      console.log('2 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/addFavourite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipeId: recipe_Id,
            cookingTime: cooking_Time,
            ingredients: ingredientsNum,
          }),
        });

        if (response.status === 200) {
          event.target.dataset.fav = 'true';
          property.querySelector('#favPath').attributes.fill.value = '#FF5353';
          property.querySelector('#favPath').attributes['stroke-width'].value = '0';
          //   event.target.textContent = 'Убрать из Избранного';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    }
  }
});

recipesContainer?.addEventListener('click', async (event) => {
  // console.log(event.target.dataset === recipe);

  const recipeId = event.target.dataset.recipe;
  const cookingTime = event.target.dataset.timecook;
  const ingredients = event.target.dataset.ingredientscount;

  // if (recipeId) {
  //   const favourite = await fetch('/user/addFavourite', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ recipeId, cookingTime, ingredients }),
  //   });
  // }
  if (event.target.className === 'favInput') {
    // console.log('CLICK');
    const recipe_Id = event.target.parentNode.dataset.recipe;
    const cooking_Time = event.target.parentNode.dataset.timecook;
    const ingredientsNum = event.target.parentNode.dataset.ingredientscount;
    const property = event.target.parentNode;
    // console.log(event.target.dataset.fav);
    if (event.target.dataset.fav === 'true') {
      console.log('CLICK');
      console.log('1 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/deleteFav', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: recipe_Id }),
        });
        if (response.status === 200) {
          event.target.dataset.fav = 'false';
          property.querySelector('#favPath').attributes.fill.value = 'none';
          property.querySelector('#favPath').attributes['stroke-width'].value = '20px';
          //   event.target.textContent = 'Добавить в Избранное';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    } else {
      console.log('2 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/addFavourite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipeId: recipe_Id,
            cookingTime: cooking_Time,
            ingredients: ingredientsNum,
          }),
        });

        if (response.status === 200) {
          event.target.dataset.fav = 'true';
          property.querySelector('#favPath').attributes.fill.value = '#FF5353';
          property.querySelector('#favPath').attributes['stroke-width'].value = '0';
          //   event.target.textContent = 'Убрать из Избранного';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    }
  }
});

recipesContainerFav?.addEventListener('click', async (event) => {
  console.log(event.target.dataset);

  const recipeId = event.target.dataset.recipe;
  const cookingTime = event.target.dataset.timecook;
  const ingredients = event.target.dataset.ingredientscount;

  // if (recipeId) {
  //   const favourite = await fetch('/user/addFavourite', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ recipeId, cookingTime, ingredients }),
  //   });
  // }
  if (event.target.className === 'favInput') {
    // console.log('CLICK');
    const recipe_Id = event.target.parentNode.dataset.recipe;
    const cooking_Time = event.target.parentNode.dataset.timecook;
    const ingredientsNum = event.target.parentNode.dataset.ingredientscount;
    const property = event.target.parentNode;
    // console.log(event.target.dataset.fav);
    if (event.target.dataset.fav === 'true') {
      console.log('CLICK');
      console.log('1 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/deleteFav', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: recipe_Id }),
        });
        if (response.status === 200) {
          event.target.dataset.fav = 'false';
          property.querySelector('#favPath').attributes.fill.value = 'none';
          property.querySelector('#favPath').attributes['stroke-width'].value = '20px';
          //   event.target.textContent = 'Добавить в Избранное';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    } else {
      console.log('2 if', event.target.dataset.fav);
      try {
        const response = await fetch('/user/addFavourite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipeId: recipe_Id,
            cookingTime: cooking_Time,
            ingredients: ingredientsNum,
          }),
        });

        if (response.status === 200) {
          event.target.dataset.fav = 'true';
          property.querySelector('#favPath').attributes.fill.value = '#FF5353';
          property.querySelector('#favPath').attributes['stroke-width'].value = '0';
          //   event.target.textContent = 'Убрать из Избранного';
        }
      } catch (error) {
        console.log('Error Favorite', error);
      }
    }
  }
});

sortBtnParentFav?.addEventListener('click', async (event) => {
  while (recipesContainerFav.firstChild) {
    recipesContainerFav.removeChild(recipesContainerFav.firstChild);
  }
  if (event.target.id === 'sortByIngredientsFav') {
    const response = await fetch('/recipes/showlist/sortByIngredientsFav');
    const sortedRecipes = await response.json();
    const { sortedByIngredients, recipesFav, username } = sortedRecipes;
    sortedByIngredients.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('col-sm');
      card.innerHTML = `
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${
  el.recipeId
}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body" data-recipe=${el.recipeId} data-timecook=${
  el.cookingTime
} data-ingredientsCount=${el.ingredientsCount}>
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${
  el.name
}</h2></a>
        <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <div class="trashCont" style="position: absolute; top: 20px; left: 226px; width: 40px; height: 40px; z-index: 1;"></div>
        
        ${
  username
    ? recipesFav.find((elem) => elem.recipeId === el.recipeId)
      ? `
              <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  stroke-width="5"
                  stroke="#FFF"
                  fill="#FF5353"
                ></path>
              </svg>
              <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="true">
              </div>
             `
      : `
                <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
                <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="false">
                </div>
            `
    : ''
}
        
        </div>
        </div>
          `;

      recipesContainer.appendChild(card);
    });
  }
  if (event.target.id === 'sortByCookingFav') {
    const response = await fetch('/recipes/showlist/sortByCookingFav');
    const sortedRecipes = await response.json();
    const { sortedByIngredients, recipesFav, username } = sortedRecipes;
    sortedByIngredients.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('col-sm');
      card.innerHTML = `
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${
  el.recipeId
}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body" data-recipe=${el.recipeId} data-timecook=${
  el.cookingTime
} data-ingredientsCount=${el.ingredientsCount}>
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${
  el.name
}</h2></a>
        <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <div class="trashCont" style="position: absolute; top: 20px; left: 226px; width: 40px; height: 40px; z-index: 1;"></div>
        
        ${
  username
    ? recipesFav.find((elem) => elem.recipeId === el.recipeId)
      ? `
              <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  stroke-width="5"
                  stroke="#FFF"
                  fill="#FF5353"
                ></path>
              </svg>
              <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="true">
              </div>
             `
      : `
                <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
                <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="false">
                </div>
            `
    : ''
}
        
        </div>
        </div>
          `;

      recipesContainer.appendChild(card);
    });
  }
});

sortBtnParent?.addEventListener('click', async (event) => {
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.firstChild);
  }
  if (event.target.id === 'sortByIngredients') {
    const response = await fetch('/recipes/showlist/sortByIngredients');
    const sortedRecipes = await response.json();
    const { sortedByIngredients, recipesFav, username } = sortedRecipes;
    sortedByIngredients.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('col-sm');
      card.innerHTML = `
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${
  el.recipeId
}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body" data-recipe=${el.recipeId} data-timecook=${
  el.cookingTime
} data-ingredientsCount=${el.ingredientsCount}>
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${
  el.name
}</h2></a>
        <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <div class="trashCont" style="position: absolute; top: 20px; left: 226px; width: 40px; height: 40px; z-index: 1;"></div>
        
        ${
  username
    ? recipesFav.find((elem) => elem.recipeId === el.recipeId)
      ? `
              <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  stroke-width="5"
                  stroke="#FFF"
                  fill="#FF5353"
                ></path>
              </svg>
              <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="true">
              </div>
             `
      : `
                <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
                <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="false">
                </div>
            `
    : ''
}
        
        </div>
        </div>
          `;

      recipesContainer.appendChild(card);
    });
  }
  if (event.target.id === 'sortByCooking') {
    const response = await fetch('/recipes/showlist/sortByCooking');
    const sortedRecipes = await response.json();
    const { sortedByIngredients, recipesFav, username } = sortedRecipes;
    sortedByIngredients.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('col-sm');
      card.innerHTML = `
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${
  el.recipeId
}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body" data-recipe=${el.recipeId} data-timecook=${
  el.cookingTime
} data-ingredientsCount=${el.ingredientsCount}>
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${
  el.name
}</h2></a>
        <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <div class="trashCont" style="position: absolute; top: 20px; left: 226px; width: 40px; height: 40px; z-index: 1;"></div>
        
        ${
  username
    ? recipesFav.find((elem) => elem.recipeId === el.recipeId)
      ? `
              <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  stroke-width="5"
                  stroke="#FFF"
                  fill="#FF5353"
                ></path>
              </svg>
              <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="true">
              </div>
             `
      : `
                <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
                <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="false">
                </div>
            `
    : ''
}
        
        </div>
        </div>
          `;

      recipesContainer.appendChild(card);
    });
  }
});

window?.addEventListener('scroll', async () => {
  try {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const response = await fetch('/recipes/more');

      const additionalRecipes = await response.json();
      const {
        nonDuplicates, allRecordsFinal, recipesFav, username,
      } = additionalRecipes;

      nonDuplicates.forEach((el) => {
        const card = document.createElement('div');
        card.classList.add('col-sm');
        card.innerHTML = `
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${
  el.recipeId
}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body" data-recipe=${el.recipeId} data-timecook=${
  el.cookingTime
} data-ingredientsCount=${el.ingredientsCount}>
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${
  el.name
}</h2></a>
        <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <div class="trashCont" style="position: absolute; top: 20px; left: 226px; width: 40px; height: 40px; z-index: 1;"></div>
        
        ${
  username
    ? recipesFav.find((elem) => elem.recipeId === el.recipeId)
      ? `
              <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                <path
                  id="favPath"
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  stroke-width="5"
                  stroke="#FFF"
                  fill="#FF5353"
                ></path>
              </svg>
              <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="true">
              </div>
             `
      : `
                <svg class="heart" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;" viewBox="0 0 256 256">
                  <path
                    id="favPath"
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
                <div class="favInput" style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; z-index: 1;" data-fav="false">
                </div>
            `
    : ''
}
        
        </div>
        </div>
          `;

        recipesContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error(error);
  }
});

navbar?.addEventListener('click', async (e) => {
  if (e.target.id === 'entryBtn') {
    entryModalWindow.style.display = 'block';
  }
  if (e.target.id === 'regBtn') {
    regModalWindow.style.display = 'block';
  }
  if (e.target.id === 'homeBtn') {
    window.location = '/';
  }
  if (e.target.id === 'exitBtn') {
    await fetch('/auth/signout');
    window.location = '/';
  }
  if (e.target.id === 'privateBtn') {
    await fetch('/user/:id');
  }
});

modalWin?.addEventListener('click', async (e) => {
  if (e.target === regModalWindow || e.target === closeButton[0]) {
    regModalWindow.style.display = 'none';
  }
  if (e.target === entryModalWindow || e.target === closeButton[1]) {
    entryModalWindow.style.display = 'none';
  }
  if (e.target === regButton) {
    e.preventDefault();
    message.innerText = '';
    const formData = Object.fromEntries(new FormData(formReg));
    try {
      const reg = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (reg.status !== 200) {
        const data = await reg.json();
        message.innerText = data.err;
        signupdiv.appendChild(message);
      } else {
        reg.json();
        window.location = '/';
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (e.target === loginButton) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formLogin));

    try {
      const login = await fetch('/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (login.status !== 200) {
        const dataerr = await login.json();
        message.innerText = dataerr.err;
        logindiv.appendChild(message);
      } else {
        login.json();
        window.location = '/';
      }
    } catch (err) {
      console.error(err);
    }
  }
});
