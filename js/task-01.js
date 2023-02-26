// Find list of categories
const categoryEl = document.querySelector("#categories");
// console.log("Categories: ", categoryEl);

// get number of categories
const allCategoriesEl = categoryEl.querySelectorAll(".item");
console.log("Number of categories: ", allCategoriesEl.length);

// find categories
allCategoriesEl.forEach((category) => {
  const nameOfCategory = category.firstElementChild.textContent;
  console.log("Category:", nameOfCategory);
  const countElementInCategory = category.lastElementChild.children.length;
  console.log("Elements:", countElementInCategory);
});