const openButton = document.querySelector(".menu-open");
const closeButton = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

function openMenu() {
  menu.classList.add("open");
  openButton.setAttribute("aria-expanded", "true");
}


function closeMenu()  {
  menu.classList.remove("open");
  openButton.setAttribute("aria-expanded", "false");
}

/* test*/
let resizeTimer;

window.addEventListener("resize", stopTransition);


function stopTransition() {
  menu.classList.add("no-transition");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(startTransition, 100);
}


function startTransition() {
  menu.classList.remove("no-transition");
}