// filter function
// return a new array and can change the size of the new array
// return based on condition

const people = [
  { name: "David", age: 26, position: "Worshipper" },
  { name: "Wu", age: 23, position: "Believer" },
  { name: "David Wu", age: 15, position: "Child of God" },
  { name: "Mr David Wu", age: 19, position: "Seeker" },
];

const youngPeople = people.filter(function (person) {
  // return condition
  return person.age <= 20;
});

const myJob = people.filter(function (person) {
  return person.position === "Worshipper";
});

console.log(youngPeople);
console.log(myJob);
