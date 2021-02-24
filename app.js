// getAttribute()
// setAttribute()

// GET THE ATTRIBUTE
// const first = document.querySelector(".first");
// // console.log(first);
// const classValue = first.getAttribute("class");
// console.log(classValue);
// const idValue = first.getAttribute("id");
// console.log(idValue);

// const link = document.getElementById("link");
// // console.log(link);
// const showLink = link.getAttribute("href");
// console.log(showLink);

// SET THE ATTRIBUTE, dynamically add class and text content
const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "Your glory Lord is what our hearts long for";
console.log(last.textContent);

const links = document.querySelectorAll(".first");
console.log(links);
