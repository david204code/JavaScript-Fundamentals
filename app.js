// mousedown - button is pressed
// mouseup - button is released
// click - fires after full actions occurs
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("You are prayed");
});

btn.addEventListener("mousedown", function () {
  console.log("head down");
});

btn.addEventListener("mouseup", function () {
  console.log("hearts lifted up");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
