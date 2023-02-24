const inputEl = document.querySelector("#font-size-control");
const spanEqualizer = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  spanEqualizer.style.fontSize = `${event.currentTarget.value}px`;
});
