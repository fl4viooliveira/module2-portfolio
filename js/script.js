"use strict";
const wrapperMenu = document.querySelector(".wrapper-menu");
const menuOpen = document.querySelector(".menu-box");
const menuLink = document.querySelectorAll(".menu-link");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  menuOpen.classList.toggle("active");
});

menuLink.forEach((li) => {
  li.addEventListener("click", function () {
    wrapperMenu.classList.remove("open");
    menuOpen.classList.remove("active");
  });
});
