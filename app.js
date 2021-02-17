// reduce method
// still iterates over the array, callback function, 2 parameters
// reduces the value in the array to a single value = number, array, object
// in the callback function 1st parameter ('acc') - total of all calculation
// in the call back funtion 2nd paramter ('curr') - current iteration/value

const people = [
  { name: "David", age: 26, position: "Worshipper", id: 1, salary: 200 },
  { name: "Wu", age: 23, position: "Believer", id: 2, salary: 300 },
  { name: "David Wu", age: 15, position: "Child of God", id: 3, salary: 500 },
  { name: "Mr David Wu", age: 19, position: "Seeker", id: 4, salary: 500 },
];

const total = people.reduce(
  function (acc, currItem) {
    console.log(`total: ${acc}`);
    console.log(`current money : ${currItem.salary} `);

    // the functionality
    acc += currItem.salary;

    // must alway return acc, the first total
    return acc;
  },
  // initial value in the loop
  0
);

console.log(total);
