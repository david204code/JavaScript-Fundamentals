// function returns

const wallHeight = 80;

function calculate(value) {
  // local variable
  const newValue = value * 2.54;
  console.log("The value in cm is: " + value * 2.54 + " cm");
  return newValue;
}

// call the function
const width = calculate(100);
const height = calculate(wallHeight);

const dimension = [width, height];
console.log(dimension);
