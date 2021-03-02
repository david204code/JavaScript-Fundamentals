// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("currentTarget: ", e.currentTarget);
  // console.log("target", e.target);
  // if (e.target.classList.contains("link")) {
  //   console.log("This is a link");
  // }
}

// stop propogation
function stopPropagantion(e) {
  console.log("clicks on the list");
  e.stopPropagation();
}

// list.addEventListener("click", stopPropagantion);
list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
