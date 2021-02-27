// select the element
// addEventListener()
// which event  and the respond

const btn = document.querySelector(".btn");

// select the heading
const heading = document.querySelector("h2");

function changeColors() {
  // console.log("New life, spring of living water");
  // does the heading contains the class of red
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    // remove the class
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

// // first: pass in the event, second: pass in the call back function
// btn.addEventListener("click", function () {
//   // console.log("The best decision");
//   // add a class when the button is click
//   heading.classList.add("red");
// });

// passing in as reference
btn.addEventListener("click", changeColors);
