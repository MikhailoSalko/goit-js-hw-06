const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  event.target.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
});

inputEl.addEventListener("focus", () => {
  if (inputEl.classList.contains("invalid")) {
    inputEl.classList.remove("invalid");
    return;
  }
  if (inputEl.classList.contains("valid")) {
    inputEl.classList.remove("valid");
    return;
  }
  return;
});
