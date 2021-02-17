// map function
// return a new array

const people = [
  { name: "David", age: 26, position: "Worshipper" },
  { name: "Wu", age: 23, position: "Believer" },
  { name: "David Wu", age: 15, position: "Child of God" },
];

const ages = people.map(function (person) {
  console.log(person);
  return `I am ${person.position}`;
});

// return an object
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

// display on screen
const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

console.log(names);
