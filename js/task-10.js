function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEls = document.querySelector("#controls");
const inputValue = controlsEls.firstElementChild;
const btnCreateBoxes = document.querySelector("button[data-create]");
const btnDestroyBoxes = document.querySelector("button[data-destroy]");
const fildOfBoxes = document.querySelector("#boxes");

// ===================================
//======== first solution  ===========
// ==================================

// =======BEGIN=========

// const createBoxes = () => {
//   const allItems = [];
//   let sizesOfBox = 30;
//   for (let index = 0; index < inputValue.value; index += 1) {
//     const itemEl = document.createElement("div");
//     sizesOfBox += 10;
//     itemEl.style.width = `${sizesOfBox}px`;
//     itemEl.style.height = `${sizesOfBox}px`;
//     itemEl.style.backgroundColor = `${getRandomHexColor()}`;
//     allItems.push(itemEl);
//   }
//   fildOfBoxes.style.display = "flex";
//   fildOfBoxes.style.flexWrap = "wrap";
//   fildOfBoxes.style.width = "500px";
//   fildOfBoxes.append(...allItems);
// };

// const destroyBoxes = () => {
//   inputValue.value = "";
//   fildOfBoxes.innerHTML = "";
// };

// btnCreateBoxes.addEventListener("click", createBoxes);
// btnDestroyBoxes.addEventListener("click", destroyBoxes);

//  ===========END=============

// ===================================
//======== second solution  ===========
// ==================================

// =======BEGIN=========

// const createBoxes = () => {
//   const allItems = [];
//   let sizesOfBox = 30;
//   let i = 0;

//   while (i < inputValue.value) {
//     allItems.push(sizesOfBox);
//     sizesOfBox += 10;
//     i += 1;
//   }
//   // for (let index = 0; index < inputValue.value; index += 1) {
//   //   sizesOfBox += 10;
//   //   allItems.push(sizesOfBox);
//   // }

//   const markUp = allItems
//     .map(
//       (item) =>
//         `<div style="width: ${item}px; height: ${item}px; background-color: ${getRandomHexColor()};"></div>`
//     )
//     .join("");

//   fildOfBoxes.style.display = "flex";
//   fildOfBoxes.style.flexWrap = "wrap";
//   fildOfBoxes.style.width = "500px";
//   fildOfBoxes.insertAdjacentHTML("beforeend", markUp);
// };

// const destroyBoxes = () => {
//   inputValue.value = "";
//   fildOfBoxes.innerHTML = "";
// };

// btnCreateBoxes.addEventListener("click", createBoxes);
// btnDestroyBoxes.addEventListener("click", destroyBoxes);

// ===========END=============

// ===================================
//======== third solution  ===========
// ==================================

// =======BEGIN=========

const createBoxes = () => {
  let sizesOfBox = 30;
  let i = 0;

  while (i < inputValue.value) {
    const markUp = `<div style="width: ${sizesOfBox}px; height: ${sizesOfBox}px; background-color: ${getRandomHexColor()};"></div>`;
    fildOfBoxes.innerHTML += markUp;
    sizesOfBox += 10;
    i += 1;
  }
};

const destroyBoxes = () => {
  inputValue.value = "";
  fildOfBoxes.innerHTML = "";
};

btnCreateBoxes.addEventListener("click", createBoxes);
btnDestroyBoxes.addEventListener("click", destroyBoxes);

//  ===========END=============
