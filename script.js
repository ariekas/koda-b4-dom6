const btn = document.querySelector("#hamb-btn");
const navItem = document.querySelector(".nav-item-mbl ul");

btn.addEventListener("click", function () {
  if (navItem.style.display === "flex") {
    navItem.style.display = "none";
  } else {
    navItem.style.display = "flex";
  }
});