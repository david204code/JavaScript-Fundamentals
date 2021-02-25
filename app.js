// inner html
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.innerText);
console.log(list.textContent);

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">Joshua</li> <li>Judges</li> <li>Ruth</li>`;
document.body.appendChild(ul);
