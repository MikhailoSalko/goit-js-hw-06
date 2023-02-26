const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredientsEl = document.querySelector("#ingredients");
// console.log(listOfIngredientsEl);

const markUp = ingredients.map((el) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = el;
  return ingredientEl;
});
// console.log(markUp);

listOfIngredientsEl.append(...markUp);
