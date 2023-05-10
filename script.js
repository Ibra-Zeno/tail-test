const close = document.querySelector(".close-button");
const open = document.querySelector(".open-button");
close.addEventListener("click", toggleMenu);
open.addEventListener("click", toggleMenu);

const nav = document.querySelectorAll(".small-nav");
nav.forEach(function (element) {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu(e) {
  close.parentElement.parentElement.parentElement.classList.toggle("hidden");
}

const checkpoint = 200;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.getElementById("scroll-arrow").style.opacity = opacity * 1;
});
