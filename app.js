// submit event listener
// prevent default
// how to get a value

const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
  console.log(name.value);
  console.log(password.value);
  console.log(form);
});
