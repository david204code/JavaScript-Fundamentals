// className allows us to check for the class name and add or edit the class
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
// console.log(classValue);

// add class (className) to the element
// second.className = "colors";
// // this will over written previous assignment
// second.className = "text";
// can use both side by side
// second.className = "colors text";

// classList can be used AND need to use the "add" property
const classValue1 = third.classList;
// third.classList.add("colors");
// third.classList.add("text");
third.classList.add("text", "colors");
console.log(classValue1);

// removeClasses
third.classList.remove("text");
// third.classList.remove("text", "");
console.log(classValue1);

// contain - check if the elements does have that class
let result = third.classList.contains("text");
if (result) {
  console.log("Ask and it will be given to you");
} else {
  console.log("You have not because you ask will evil intent");
}
