const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    window.alert(`All form inputs must be filled`);
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();
  console.log(formData);
});
