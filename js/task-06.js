const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 0) {
    return inputEl.classList.remove("invalid", "valid");
  }
  if (
    event.currentTarget.value.length > 0 &&
    event.currentTarget.value.length < inputEl.dataset.length
  ) {
    return inputEl.classList.add("invalid");
  }
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }
});
