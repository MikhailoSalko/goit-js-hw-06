// Find list of categories
const categoryEl = document.querySelector("#categories");
// console.log("Categories: ", categoryEl);

// get number of categories
const allCategoriesEl = categoryEl.querySelectorAll(".item");
console.log("Number of categories: ", allCategoriesEl.length);

// Find first category
const firstCategoryEl = categoryEl.firstElementChild;
// console.log(firstCategoryEl);
console.log("Category: ", firstCategoryEl.firstElementChild.textContent);
console.log("Elements: ", firstCategoryEl.lastElementChild.children.length);

// Second category
const secondCategoryEl = categoryEl.firstElementChild.nextElementSibling;
// console.log(secondCategoryEl);
console.log("Category: ", secondCategoryEl.firstElementChild.textContent);
console.log("Elements: ", secondCategoryEl.lastElementChild.children.length);

// Third category
const thirdCategoryEl = secondCategoryEl.nextElementSibling;
// console.log(thirdCategoryEl);
console.log("Category: ", thirdCategoryEl.firstElementChild.textContent);
console.log("Elements: ", thirdCategoryEl.lastElementChild.children.length);
