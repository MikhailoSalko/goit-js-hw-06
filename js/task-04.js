const btnIncrementEl = document.querySelector("button[data-action=increment]");
const btnDecrementEl = document.querySelector("button[data-action=decrement]");
const spanValueEl = document.querySelector("#value");

let counterValue = 0;

btnIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
});

btnDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
});
