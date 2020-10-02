const burger = document.querySelector(".burger"),
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

const burgerCB = document.querySelector("#burger-checkbox");

//  add mobile backdrop when menu open
burger.addEventListener("click", () => {
  backdrop.classList.add("mobile-menu-backdrop");
  body.classList.add("fixed-position");
});

// remove mobile backdrop and close menu
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("mobile-menu-backdrop");
  body.classList.remove("fixed-position");
  uncheck();
});

function uncheck() {
  burgerCB.checked = false;
}

if (burgerCB.checked == true && window.location.reload) {
  uncheck();
  console.log("page refreshed");
}

menuClose.addEventListener("click", () => {
  backdrop.classList.remove("mobile-menu-backdrop");
  body.classList.remove("fixed-position");
});

// rotate mobile dropdown arrows on click
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
