const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 0) {
    if (inputEl.classList.contains("invalid")) {
      return inputEl.classList.remove("invalid");
    }
    if (inputEl.classList.contains("valid")) {
      return inputEl.classList.remove("valid");
    }
    return;
  }
  if (
    event.currentTarget.value.length > 0 &&
    event.currentTarget.value.length < inputEl.dataset.length
  ) {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
      return inputEl.classList.add("invalid");
    }
    return inputEl.classList.add("invalid");
  }
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
      return inputEl.classList.add("valid");
    }
    return inputEl.classList.add("valid");
  }
});
