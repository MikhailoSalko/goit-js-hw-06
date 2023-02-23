const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredientsEl = document.querySelector("#ingredients");
console.log(listOfIngredientsEl);

const createIngredient = (ingredients) => {
  return ingredients.map((el) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = el;
    return listOfIngredientsEl.append(ingredientEl);
  });
};

createIngredient(ingredients);
