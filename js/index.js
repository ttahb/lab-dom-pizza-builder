// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms){
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    if(state.greenPeppers){
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.getElementsByClassName('sauce')[0].classList.toggle('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.getElementsByClassName('crust')[0].classList.toggle('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const somebuttons = document.getElementsByClassName('btn');
  //console.log("somebuttons", somebuttons);
  const copySomeButtons = [...somebuttons];
  copySomeButtons.forEach((button) => {
    if(state.pepperoni && button.classList.contains('btn-pepperoni')){
      button.className = 'btn btn-pepperoni active';
    }
    if(!state.pepperoni && button.classList.contains('btn-pepperoni')){
      button.className = 'btn btn-pepperoni';
    }

    if(state.mushrooms && button.classList.contains('btn-mushrooms')){
      button.className = 'btn btn-mushrooms active';
    }
    if(!state.mushrooms && button.classList.contains('btn-mushrooms')){
      button.className = 'btn btn-mushrooms';
    }

    if(state.greenPeppers && button.classList.contains('btn-green-peppers')){
      button.className = 'btn btn-green-peppers active';
    }
    if(!state.greenPeppers && button.classList.contains('btn-green-peppers')){
      button.className = 'btn btn-green-peppers';
    }

    if(state.whiteSauce && button.classList.contains('btn-sauce')){
      button.className = 'btn btn-sauce active';
    }
    if(!state.whiteSauce && button.classList.contains('btn-sauce')){
      button.className = 'btn btn-sauce';
    }

    if(state.glutenFreeCrust && button.classList.contains('btn-crust')){
      button.className = 'btn btn-crust active';
    }
    if(!state.glutenFreeCrust && button.classList.contains('btn-crust')){
      button.className = 'btn btn-crust';
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  const unorderedList = document.getElementsByClassName('panel price')[0].lastElementChild.previousElementSibling;
  console.log("list", unorderedList);
  unorderedList.innerHTML = "";
  let sum = basePrice;

  const keys = Object.keys(ingredients);
  console.log("keys", keys);
  for(const key of keys){
    if(state[`${key}`]) {
      const ingredient = ingredients[key];
      console.log("ingredient", ingredient);
      console.log("ingredient.price", ingredient.price);
      sum += ingredient.price;
      console.log("ingredient name", ingredient.name);
      unorderedList.innerHTML += "<li>$" + `${ingredient.price} ${ingredient.name}` + "</li>";
    }
  }

  const strong = document.getElementsByClassName('panel price')[0].lastElementChild;
  strong.innerHTML = "$"+`${sum}`;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function(){
  // console.log('hello mushrooms');
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function(){
  // console.log('hello green peppers');
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});