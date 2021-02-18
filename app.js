// JavaScript built in data object

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// need to set the Date object for it to be invoked
const date = new Date();

const month = months[date.getMonth()];
const day = days[date.getDay()];

// console.log(date.getDate());
// console.log(date.getFullYear());

const sentence = `Today's date is ${date.getDate()} of ${
  months[date.getMonth()]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
