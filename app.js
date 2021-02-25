// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location')
// still need to use createElement and createTextNode

const result = document.querySelector("#result");
const first = document.querySelector(".red");

// create a new empty element with the tag name div
const bodyDiv = document.createElement("div");
// create node within div
const text = document.createTextNode("Have your identify in Chirst");
// place text within bodyDiv
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

// console.log(result.children);
const heading = document.createElement("h2");
const headingText = document.createTextNode("Gospel, the Good News");
heading.appendChild(headingText);
// add the class
heading.classList.add("blue");
result.insertBefore(heading, first);

console.log(result.children);
