var menu = document.querySelector(".page-header__nav");

menu.classList.remove("page-header__nav--nojs");

var menuToggle = menu.querySelector(".page-header__toggle");

menuToggle.addEventListener("click", function (evt) {
  if (menu.classList.contains("page-header__nav--closed")) {
    evt.preventDefault();
    menu.classList.remove("page-header__nav--closed");
    menu.classList.add("page-header__nav--opened");
  }   else {
      evt.preventDefault();
      menu.classList.remove("page-header__nav--opened");
      menu.classList.add("page-header__nav--closed");
    }
});

var mapInteractive = document.querySelector(".contacts__map");
mapInteractive.classList.remove("contacts__map--nojs");