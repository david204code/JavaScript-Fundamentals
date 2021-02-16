// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa overspending!`);
    // break out of the function by setting up a return inside this if statemetn
    return total;
  }
  console.log(`Total is less than 100`);
  return total;
  // console.log(total);
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([2004, 2008, 2009, 2010, 2013]);

// pass in object for console log
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
