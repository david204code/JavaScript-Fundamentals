// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector("#result");

// create a new empty element with the tag name div
const bodyDiv = document.createElement("div");
// create node within div
const text = document.createTextNode("Have your identify in Chirst");
// place text within bodyDiv
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

// console.log(result.children);
const heading = document.createElement("h2");
const headingText = document.createTextNode("Gospel, the Good News");
heading.appendChild(headingText);
// add the class
heading.classList.add("blue");
result.appendChild(heading);

console.log(result.children);
