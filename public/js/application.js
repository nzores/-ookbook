/* eslint-disable camelcase */
const message = document.createElement("p");

const navbar = document.getElementById("navbar");

const entryModalWindow = document.querySelector("#modalOne");
const regModalWindow = document.querySelector("#modalTwo");

const modalWin = document.querySelector("#modalWin");
const closeButton = document.querySelectorAll(".close");

const regButton = document.getElementById("registerForm");
const loginButton = document.getElementById("loginBtn");

const formReg = document.forms.signup;
const formLogin = document.forms.login;

const logindiv = document.getElementById("logindiv");
const signupdiv = document.getElementById("signupdiv");

const sortBtnParent = document.getElementById("sortButtons");
const sortBtnParentFav = document.getElementById("sortButtonsFav");

const recipesContainer = document.getElementById("containerRecipes");
const recipesContainerFav = document.getElementById("containerRecipesFav");

const upArrow =
  "M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z";
const downArrow =
  "M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z";

recipesContainer?.addEventListener("click", async (event) => {
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
  if (event.target.className === "favInput") {
    // console.log('CLICK');
    const recipe_Id = event.target.parentNode.dataset.recipe;
    const cooking_Time = event.target.parentNode.dataset.timecook;
    const ingredientsNum = event.target.parentNode.dataset.ingredientscount;
    const property = event.target.parentNode;
    // console.log(event.target.dataset.fav);
    if (event.target.dataset.fav === "true") {
      console.log("CLICK");
      console.log("1 if", event.target.dataset.fav);
      try {
        const response = await fetch("/user/deleteFav", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recipeId: recipe_Id }),
        });
        if (response.status === 200) {
          event.target.dataset.fav = "false";
          property.querySelector("#favPath").attributes.fill.value = "none";
          property.querySelector("#favPath").attributes["stroke-width"].value =
            "20px";
          //   event.target.textContent = 'Добавить в Избранное';
        }
      } catch (error) {
        console.log("Error Favorite", error);
      }
    } else {
      console.log("2 if", event.target.dataset.fav);
      try {
        const response = await fetch("/user/addFavourite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recipeId: recipe_Id,
            cookingTime: cooking_Time,
            ingredients: ingredientsNum,
          }),
        });

        if (response.status === 200) {
          event.target.dataset.fav = "true";
          property.querySelector("#favPath").attributes.fill.value = "#FF5353";
          property.querySelector("#favPath").attributes["stroke-width"].value =
            "0";
          //   event.target.textContent = 'Убрать из Избранного';
        }
      } catch (error) {
        console.log("Error Favorite", error);
      }
    }
  }
});

sortBtnParentFav?.addEventListener("click", async (event) => {
  while (recipesContainerFav.firstChild) {
    recipesContainerFav.removeChild(recipesContainerFav.firstChild);
  }
  if (event.target.id === "sortByIngredientsFav") {
    const response = await fetch("/recipes/showlist/sortByIngredientsFav");
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement("div");
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
      recipesContainerFav.appendChild(card);
    });
  }
  if (event.target.id === "sortByCookingFav") {
    const response = await fetch("/recipes/showlist/sortByCookingFav");
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement("div");
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
      recipesContainerFav.appendChild(card);
    });
  }
});

sortBtnParent?.addEventListener("click", async (event) => {
  const sortBtnIconIngredients = document.querySelector("#sortSVG");
  const sortBtnIconCooktime = document.querySelector("#sortSVGtwo");
  sortSVGtwo;
  const sortBtnAttributesIngredients = document
    .querySelector("#sortSVG")
    .getAttribute("d");
  const sortBtnAttributesCooktime = document
    .querySelector("#sortSVGtwo")
    .getAttribute("d");

  //==========

  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.firstChild);
  }
  if (event.target.id === "sortByIngredients") {
    const response = await fetch("/recipes/showlist/sortByIngredients");
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement("div");
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

      if (sortBtnAttributesIngredients === null) {
        sortBtnIconIngredients.setAttribute("d", upArrow);
      }

      if (sortBtnAttributesIngredients === upArrow) {
        sortBtnIconIngredients.setAttribute("d", downArrow);
      }

      if (sortBtnAttributesIngredients === downArrow) {
        sortBtnIconIngredients.setAttribute("d", upArrow);
      }
    });
  }
  if (event.target.id === "sortByCooking") {
    const response = await fetch("/recipes/showlist/sortByCooking");
    const sortedRecipes = await response.json();
    sortedRecipes.forEach((el) => {
      const card = document.createElement("div");
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

      if (sortBtnAttributesCooktime === null) {
        console.log("why");

        sortBtnIconCooktime.setAttribute("d", upArrow);
      }

      if (sortBtnAttributesCooktime === upArrow) {
        sortBtnIconCooktime.setAttribute("d", downArrow);
      }

      if (sortBtnAttributesCooktime === downArrow) {
        sortBtnIconCooktime.setAttribute("d", upArrow);
      }
    });
  }
});

window?.addEventListener("scroll", async () => {
  try {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const response = await fetch("/recipes/more");

      const additionalRecipes = await response.json();
      additionalRecipes.forEach((el) => {
        const card = document.createElement("div");
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

navbar?.addEventListener("click", async (e) => {
  if (e.target.id === "entryBtn") {
    entryModalWindow.style.display = "block";
  }
  if (e.target.id === "regBtn") {
    regModalWindow.style.display = "block";
  }
  if (e.target.id === "homeBtn") {
    window.location = "/";
  }
  if (e.target.id === "exitBtn") {
    await fetch("/auth/signout");
    window.location = "/";
  }
  if (e.target.id === "privateBtn") {
    await fetch("/user/:id");
  }
});

modalWin?.addEventListener("click", async (e) => {
  if (e.target === regModalWindow || e.target === closeButton[0]) {
    regModalWindow.style.display = "none";
  }
  if (e.target === entryModalWindow || e.target === closeButton[1]) {
    entryModalWindow.style.display = "none";
  }
  if (e.target === regButton) {
    e.preventDefault();
    message.innerText = "";
    const formData = Object.fromEntries(new FormData(formReg));
    try {
      const reg = await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (reg.status !== 200) {
        const data = await reg.json();
        message.innerText = data.err;
        signupdiv.appendChild(message);
      } else {
        reg.json();
        window.location = "/";
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (e.target === loginButton) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formLogin));

    try {
      const login = await fetch("/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (login.status !== 200) {
        const dataerr = await login.json();
        message.innerText = dataerr.err;
        logindiv.appendChild(message);
      } else {
        login.json();
        window.location = "/";
      }
    } catch (err) {
      console.error(err);
    }
  }
});
