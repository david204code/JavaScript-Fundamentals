// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = "green";
    console.log("currentTarget", e.currentTarget);
    console.log("target", e.target);
    e.target.style.color = "green";
  });
});
