// Arrays and for loop

const names = ["Peter", "James", "John", "Mark"];
const lastName = "Disciple";
let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  // newArray.push(`${names[i]} ${lastName}`);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
