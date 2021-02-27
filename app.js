// select the element
// addEventListener()
// which event  and the respond

const btn = document.querySelector(".btn");

// select the heading
const heading = document.querySelector("h2");

// first: pass in the event, second: pass in the call back function
btn.addEventListener("click", function () {
  // console.log("The best decision");
  // add a class when the button is click
  heading.classList.add("red");
});
