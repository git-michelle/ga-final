const burger = document.querySelector(".burger"),
  menuCloseContainer = document.querySelector("#cancel-container"),
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

// Close menu with x button. Must not use uncheck function
menuCloseContainer.addEventListener("click", () => {
  backdrop.classList.remove("mobile-menu-backdrop");
  body.classList.remove("fixed-position");
});

// FUNCTION TO UNCHECK menu and remove backdrop
function uncheck() {
  burgerCB.checked = false;
  backdrop.classList.remove("mobile-menu-backdrop");
  body.classList.remove("fixed-position");
}

// backdrop click to close mobile menu
backdrop.addEventListener("click", () => {
  uncheck();
});

// if page refreshed while menu open, close it
if (burgerCB.checked == true && window.location.reload) {
  uncheck();
  console.log("page refreshed");
}

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
