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

var modal = document.querySelector(".modal");
var modalOpen = document.querySelector(".special-offers__button");
var overlay = document.querySelector(".overlay");

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
});

overlay.addEventListener("touchend", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});