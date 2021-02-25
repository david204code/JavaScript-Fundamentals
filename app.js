// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location')
// still need to use createElement and createTextNode

// replaceChild('child', 'old')

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

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(
  `And we know in all things God works for the good of those who love him, who have been called according to his purpose`
);
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
