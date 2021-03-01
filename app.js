// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//   console.log("keypress");
// });

// nameInput.addEventListener("keydown", function () {
//   console.log("keydown");
// });

nameInput.addEventListener("keyup", function () {
  // console.dir(nameInput);
  console.log(nameInput.value);
});
