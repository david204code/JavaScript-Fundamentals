// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - click element first then bubbles up -- default

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");

function sayHello() {
  console.log("grace and peace to you from God our Father and the Lord Jesus");
}

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = `hope, love, glory, joy`;
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("hi David");
  }
});

// heading.addEventListener("click", sayHello);
