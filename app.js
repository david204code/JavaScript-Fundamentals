// previousElementSibling
// nextElementSibling

// don't need to worry about whitespace

const first = document.querySelector(".first");
// console.log(first.nextElementSibling);
first.nextElementSibling.style.color = "red";

const last = document.querySelector("#last");
last.previousElementSibling.style.color = "orange";
