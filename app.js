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

const person = people.find(function (person) {
  // add the condition
  return person.id === 4;
});

console.log(person);
