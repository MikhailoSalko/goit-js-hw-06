const inputEl = document.querySelector("#name-input");
const spanTextContent = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  spanTextContent.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    spanTextContent.textContent = "Anonymous";
  }
});
