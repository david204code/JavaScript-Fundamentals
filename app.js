// QuerySelector and QuerySelectorAll
// Select the element or group of elements
// Decide the effect we want to apply to the selection

// querySelector('any css'); selects single, selecting the first element
// querySelectorAll('any css') - select all, the whole list can use the forEach() method

// # for id and . for class
const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const list = document.querySelectorAll(".special");
// console.log(list);
list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
