const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles[0].addEventListener("click",function () {
//   collapsibles[0].classList.toggle("collapsible--expanded");
//   console.log(collapsibles);
// });

// document.getElementsByClassName("collapsible")[0].addEventListener("click",function () {
//   document.getElementsByClassName("collapsible")[0].classList.toggle("collapsible--expanded");

// });