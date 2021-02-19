// getElementByTagName

// getElementByTagName('tagname')

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
// console.log(headings.length);

const items = document.getElementsByTagName("li");

// // wouldn't work!
// items.forEach(function (item) {
//   console.log(item);
// });

// transform nodelist to an array for forEach to work
const betterItems = [...items];
items[3].style.color = "red";

betterItems.forEach(function (item) {
  // console.log(item);
});

console.log(items);
console.log(betterItems);

document.getElementById("btn").style.backgroundColor = "blue";
document.getElementById("btn").style.color = "white";
