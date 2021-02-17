// forEach
// does not return new array

const people = [
  { name: "David", age: 26, position: "Worshipper" },
  { name: "Wu", age: 23, position: "Believer" },
  { name: "David Wu", age: 15, position: "Child of God" },
];

// call back function
// function showPerson(person) {
//   console.log(person);
// }

// calling the forEach() method
// people.forEach(showPerson);

// set up anonymous function and pass the callback function directly
people.forEach(function (item) {
  console.log(item);
});
