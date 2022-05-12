//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks[0]);
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      console.log(data.drinks[0].strDrinkThumb);
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
      document.querySelector(".item-1").innerText =
        data.drinks[0].strIngredient1;
      document.querySelector(".item-2").innerText =
        data.drinks[0].strIngredient2;
      document.querySelector(".item-3").innerText =
        data.drinks[0].strIngredient3;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // document.querySelector("img").src = data.message;
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
