// find function
// returns single instances/single object
// return first match, if no match than undefined
// great for getting unique value

const people = [
  { name: "David", age: 26, position: "Worshipper", id: 1 },
  { name: "Wu", age: 23, position: "Believer", id: 2 },
  { name: "David Wu", age: 15, position: "Child of God", id: 3 },
  { name: "Mr David Wu", age: 19, position: "Seeker", id: 4 },
];

const names = ["Matthew", "Mark", "Luke"];

console.log(
  names.find(function (name) {
    return name === "Matthew";
  })
);

const person = people.find(function (person) {
  // add the condition
  return person.id === 4;
});

console.log(person);

const person1 = people.filter(function (person) {
  // add the condition
  return person.id === 4;
});

console.log(person1[0]);
