// Web Storage API - provided by broswer
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "David");
// sessionStorage.setItem("name", "David");

// (key & value)
localStorage.setItem("name", "David");
localStorage.setItem("friend", "Joe");
localStorage.setItem("job", "footballer");
localStorage.setItem("address", "101 Hill drive");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

const anotherName = localStorage.getItem("name");
console.log(anotherName);

localStorage.clear();
