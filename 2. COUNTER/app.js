// set initial count
let count = 0;
// select value and button
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");

btns.forEach(function (event) {
  event.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
      counter.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
      counter.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "black";
      counter.style.color = "black";
    }
    value.textContent = count;
  });
});
