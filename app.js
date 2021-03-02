// JSON.stringify(), JSON.parse()

const friends = ["Matthew", "Mark", "Luke"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[0]);
