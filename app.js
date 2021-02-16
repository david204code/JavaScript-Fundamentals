// callback function. higher order

// callback function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.toUpperCase()}`;
}

// higher order function is the one that accepts the function
function greet(name, cb) {
  const myName = "David";
  console.log(`${cb(name)}, my name is ${myName}`);
}

// pass in the function but not invoked the funciton
greet("Lord", morning);
greet("almighty", afternoon);

// function greetMorning(name) {
//   const myName = "David";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "David";
//   console.log(`Good Afternoon ${name}, my name is ${myName}`);
// }
