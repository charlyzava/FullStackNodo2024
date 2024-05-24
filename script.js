const button = document.querySelector("#button");
const menu = document.querySelector("#menu");

// const button = document.getElementById("button");
// const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  console.log("Open");
  menu.classList.toggle("hidden");
});