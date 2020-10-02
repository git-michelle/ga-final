const burger = document.querySelector(".burger"),
  burgerSpan = document.querySelector("span.burger-bars"),
  menuClose = document.querySelector("span.cancel"),
  body = document.getElementsByTagName("BODY")[0],
  backdrop = document.querySelector("#backdrop");

//CB = checkbox
const dropdownOne = document.querySelector(".dropdown-1"),
  dropdownTwo = document.querySelector(".dropdown-2"),
  dropdownOneCB = document.querySelector("#dropdown-1"),
  dropdownTwoCB = document.querySelector("#dropdown-2"),
  arrow1 = document.querySelector("#arrow-1"),
  arrow2 = document.querySelector("#arrow-2"),
  actionArrow = document.querySelector(".show-dropdown");

burger.addEventListener("click", () => {
  // burgerSpan.classList.toggle("cancel");
  backdrop.classList.toggle("mobile-menu-backdrop");
  body.classList.toggle("fixed-position");
});

menuClose.addEventListener("click", () => {
  backdrop.classList.toggle("mobile-menu-backdrop");
  body.classList.toggle("fixed-position");
});

dropdownOne.addEventListener("click", () => {
  dropdownTwoCB.checked = false;
  arrow1.classList.toggle("rotate-arrow");
  arrow2.className = "arrow";
});
dropdownTwo.addEventListener("click", () => {
  dropdownOneCB.checked = false;
  arrow2.classList.toggle("rotate-arrow");
  arrow1.className = "arrow";
});
