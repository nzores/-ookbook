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

const recipesContainer = document.getElementById('containerRecipes');

recipesContainer?.addEventListener('click', async (event) => {
  const recipeId = event.target.dataset.recipe;
  const cookingTime = event.target.dataset.timecook;
  const favourite = await fetch('/user/addFavourite', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipeId, cookingTime }),
  });

});

sortBtnParent?.addEventListener('click', async (event) => {
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.firstChild);
  }
  if (event.target.id === 'sortByIngredients') {
    const response = await fetch('/recipes/showlist/sortByIngredients');
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="col-sm">
      <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${el.recipeId}>
      <img src=${el.image}  class="card-img-top"
      alt="" />
      <div class="card-body">
      <a href=/recipe/${el.recipeId}><h2 class="card-title" >${el.name}</h2></a>
      <p>Count ingrediants ${el.ingredientsCount} unit/s</p>      
      <p>Cooking time ${el.cookingTime} min</p>
      <button type="button" class="btn btn-outline-primary">Unlike</button>
      <button type="button" class="btn btn-primary">Like</button>
      
      </div>
      </div>
      </div>
        `;
      recipesContainer.appendChild(card);
    });
  }
  if (event.target.id === 'sortByCooking') {
    const response = await fetch('/recipes/showlist/sortByCooking');
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="col-sm">
      <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${el.recipeId}>
      <img src=${el.image}  class="card-img-top"
      alt="" />
      <div class="card-body">
      <a href=/recipe/${el.recipeId}><h2 class="card-title" >${el.name}</h2></a>
      <p>Count ingrediants {el.ingredientsCount} unit/s</p>      
      <p>Cooking time ${el.cookingTime} min</p>
      <button type="button" class="btn btn-outline-primary">Unlike</button>
      <button type="button" class="btn btn-primary">Like</button>
      
      </div>
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
      additionalRecipes.forEach((el) => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="col-sm">
        <div class="card" key=${el.recipeId} style="width:18rem" data-recipe=${el.recipeId}>
        <img src=${el.image}  class="card-img-top"
        alt="" />
        <div class="card-body">
        <a href=/recipe/${el.recipeId}><h2 class="card-title" >${el.name}</h2></a>
        <p>Count ingrediants {el.ingredientsCount} unit/s</p>      
        <p>Cooking time ${el.cookingTime} min</p>
        <button type="button" class="btn btn-outline-primary">Unlike</button>
        <button type="button" class="btn btn-primary">Like</button>
        
        </div>
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
        message.innerText = data.error;
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

      const dataerr = await login;
      if (login.status !== 200) {
        message.innerText = dataerr.err;
        logindiv.appendChild(message);
      } else {
        window.location = '/';
      }
    } catch (err) {
      console.error(err);
    }
  }
});
